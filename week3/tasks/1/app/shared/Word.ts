export class Word {
	constructor(public text:string, public addedBy:string){
		
	}

	toJson() {
		return {
			text: this.text,
			addedBy: this.addedBy,
		};
	}

	static unserialise(wordData) {
	    var word = new Word(wordData.text, wordData.addedBy);
	    return word;
	}
}