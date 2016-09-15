import { Component, ViewChild } from '@angular/core'
import { DataSource } from './shared/DataSource'
import { LogDecorator } from './shared/LogDecorator'
import { WordView } from './word-view/word-view.component'
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

	word: string;

	dataSource: DataSource;

	gameOver:boolean;

	wordsCorrect: string[];
	wordsFailed: string[];

	guessesDifficultyModifier: number;
	allowedGuesses: number;

	showSummary:boolean;
	difficultySelected: boolean;

	correctGuesses: number;
	incorrectGuesses: number;

	countdownTimer: any;
	timerLimitSec: number;
	currentTime: number;

	constructor() {
		this.dataSource = new DataSource();
		this.guessesDifficultyModifier = 5;
		this.difficultySelected = false;

		console.log(this.wordView);
		console.log(this.letterBank);
	}

	ngAfterViewInit() {
    	console.log(this.wordView);
  	}

	@LogDecorator
	selectDifficulty(diff) {
		var modifier = 5,
			timer = 60;
		switch (diff) {
			case "Beginner":
				modifier = 5;
				timer = 60;
				break;
			case "Intermediate":
				modifier = 4;
				timer = 40;
				break;
			case "Advanced":
				modifier = 2;
				timer = 20;
				break;
		}
		this.guessesDifficultyModifier = modifier;
		this.difficultySelected = true;
		this.timerLimitSec = timer;
		this.startNewGame();
	}

	@LogDecorator
	startNewGame() {
		this.wordsCorrect = [];
		this.wordsFailed = [];
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

		var totalLetters = 8;
		var numberHiddenLetters = 3;
		var numberGuessableLetters = totalLetters - numberHiddenLetters;

		this.allowedGuesses = numberHiddenLetters + this.guessesDifficultyModifier;

		this.word = this.dataSource.getRandomWord();

		console.log(this.word);

		if (!this.word) {
			this.presentSummary();
		}
		else {
			// TODO: reset sub components
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
			this.wordsCorrect.push(currentWord);
		}
		else {
			this.wordsFailed.push(currentWord);
		}
		this.dataSource.markWordAsUsed(currentWord);
	}

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
}