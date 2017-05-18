
class QuestionOptions {
	title: string;
	description?: string;
	controlType?: string;
	dataName?: string;
}


export class QuestionBase {
	title: string;
	description?: string;
	controlType?: string;
	dataName?: string;
	constructor (options: QuestionOptions) {
		this.title = options.title;
		this.description = options.description || "";
		this.controlType = options.controlType;
		this.dataName = options.dataName;
	}
}