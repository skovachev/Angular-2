import { Injectable } from '@angular/core'
import { Word } from './index'
import { Observable, Subscriber } from 'rxjs/Rx'

@Injectable()
export class WordsService {

	loadWords() {
		return new Observable<Word[]>((subscriber: Subscriber<Word[]>) => {
			var words = localStorage.getItem('words');
			if (words) {
				words = JSON.parse(words);
			}
			if (!words) {
				words = [];
			}
			subscriber.next(words.map((serialised) => Word.unserialise(serialised)));
			subscriber.complete();
		});
	}

	storeWords(words) {
		var words = words.map((word) => word.toJson());
		localStorage.setItem('words', JSON.stringify(words));
		return Observable.of(words);
	}

	updateWord(changedWord, changedData, words) {
		var wordFound = false;

		words.forEach(function(word, index, words) {
			if (word.text == changedWord.text) {
				for(let key in changedData) {
					let value = changedData[key];
					word[key] = value;
				}
				words[index] = word;
				wordFound = true;
			}
		});

		if (!wordFound) {
			var word = new Word(changedWord.text, changedWord.addedBy);
			for(let key in changedData) {
				let value = changedData[key];
				word[key] = value;
			}
			words.push(word);
		}

		return this.storeWords(words);
	}

	removeWord(word, words) {
		for(let index in words) {
			let currentWord = words[index];
			if (currentWord.text == word.text && currentWord.addedBy == word.addedBy) {
				words.splice(index, 1);
			}
		}
		return this.storeWords(words);
	}
}