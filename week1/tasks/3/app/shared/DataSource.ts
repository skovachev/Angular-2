class DataSource {
	words:string[];
	usedWords:string[];
	alphabet:string;

	constructor() {
		this.words = ['gladiator', 'playground', 'architecture', 'paleosoic'];
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
	}

	getRandomWord() {
		if (!this.words.length) {
			return null;
		}
		var totalWords = this.words.length;
		var randomIndex = Math.floor((Math.random() * totalWords));
		return this.words[randomIndex];
	}

	getRandomAlphabetChar() {
		var index = Math.floor(Math.random() * this.alphabet.length) + 1;
		return this.alphabet[index];
	}

	markWordAsUsed(word) {
		var index = this.words.indexOf(word);
		if (index !== -1) {
			this.words.splice(index, 1);
		}
	}
}

export {
	DataSource
}