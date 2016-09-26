export class Word {
	constructor(public text:string){
		
	}

	toJson() {
		return {
			text: this.text,
		};
	}

	static unserialise(wordData) {
	    var word = new Word(wordData.text);
	    return word;
	}
}