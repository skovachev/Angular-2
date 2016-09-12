class DataSource {
	private words:string[];

	constructor() {
		this.words = ['test', 'journey', 'arena', 'playground'];
	}

	getRandomWord() {
		var totalWords = this.words.length;
		var randomIndex = Math.floor((Math.random() * totalWords));
		return this.words[randomIndex];
	}
}

export {
	DataSource
}