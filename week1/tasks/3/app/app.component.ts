import { Component, ViewChild } from '@angular/core'
import { DataSource } from './shared/DataSource'
import { LogDecorator } from './shared/LogDecorator'
import { WordView } from './word-view/word-view.component'
import { Summary } from './summary/summary.component'
import { LetterBank } from './letter-bank/letter-bank.component'

@Component({
	moduleId: module.id,
	selector: 'wordgame',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class App {

	@ViewChild(WordView) wordView: WordView;
	@ViewChild(LetterBank) letterBank: LetterBank;
	@ViewChild(Summary) summary: Summary;

	word: string;

	dataSource: DataSource;

	gameOver:boolean;

	guessesDifficultyModifier: number;
	allowedGuesses: number;

	showSummary:boolean;
	difficultySelected: boolean;

	correctGuesses: number;
	incorrectGuesses: number;

	countdownTimer: any;
	timerLimitSec: number;
	currentTime: number;

	numberHiddenLetters: number = 3;

	constructor() {
		this.dataSource = new DataSource();
		this.guessesDifficultyModifier = 5;
		this.difficultySelected = false;
	}

	@LogDecorator
	selectDifficulty(diff) {
		this.guessesDifficultyModifier = diff.modifier;
		this.difficultySelected = true;
		this.timerLimitSec = diff.timer;
		this.startNewGame();
	}

	@LogDecorator
	startNewGame() {
		this.nextWord();
	}

	@LogDecorator
	nextWord() {
		clearInterval(this.countdownTimer);

		this.gameOver = false;
		this.showSummary = false;
		this.currentTime = 0;

		this.correctGuesses = 0;
		this.incorrectGuesses = 0;

		this.allowedGuesses = this.numberHiddenLetters + this.guessesDifficultyModifier;

		this.word = this.dataSource.getRandomWord();

		if (!this.word) {
			this.presentSummary();
		}

		this.countdownTimer = setInterval(function(){
			this.currentTime++;
			if (this.currentTime >= this.timerLimitSec) {
				this.gameCompleted(false);
				clearInterval(this.countdownTimer);
			}
		}.bind(this), 1000);
	}

	@LogDecorator
	presentSummary() {
		this.showSummary = true;
	}

	@LogDecorator
	gameCompleted(won) {
		this.gameOver = true;
		var currentWord = this.wordView.getWord();
		if (won) {
			this.summary.addCorrectWord(currentWord);
		}
		else {
			this.summary.addFailedWord(currentWord);
		}
		this.dataSource.markWordAsUsed(currentWord);
	}

	@LogDecorator
	onUserGuess(event) {
		var correct = event.correct;

		if (event.correct) {
			this.correctGuesses++;
			var wordGuessed = this.wordView.regenerateDisplayedWord(event.guessedLetters);
			if (wordGuessed) {
				this.gameCompleted(true);
			}
		}
		else {
			// incorrect
			this.incorrectGuesses++;
		}

		if (this.incorrectGuesses > event.hiddenLettersCount) {
			this.gameCompleted(false);
		}

		var wordGuessed = this.wordView.checkWordGuessed();

		if (event.guessedLetterCount >= this.allowedGuesses && !wordGuessed) {
			this.gameCompleted(false);
		}
	}

	@LogDecorator
	onNewWordGenerated() {
		this.letterBank.hiddenLetters = this.wordView.hiddenLetters;
	}
}