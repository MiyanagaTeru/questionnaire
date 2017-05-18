import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup }   from '@angular/forms';

import { QuestionBase } from './question-base'

export class Choice {
	value: string;
	name: string;
}

export class Question {
	type: string;
	title: string;
	description: string;
	dataName: string;
	choices: Choice[];
}

export class Answer {
	dataName: string;
	dataValue: string;
}

const q = new QuestionBase({title: 'hello'})
console.log(q)
const QUESTIONS = [
	{
		type: "radio",
		title: "今天想吃什么？",
		description: "想吃也没人做啊",
		dataName: "food",
		choices: [
			{ value: "doujiao", text: "豆角肉丝焖面" },
			{ value: "xianggu", text: "香菇芽菜卤肉饭" },
			{ value: "jidan", text: "鸡蛋蔬菜烩饼" },
			{ value: "larou", text: "腊肉香肠煲仔饭" }
		]
	},
	{
		type: "radio",
		title: "明天想吃什么？",
		description: "周末了做个肉龙吧？",
		dataName: "tommorow",
		choices: [
			{ value: "roulong", text: "肉龙" },
			{ value: "shaobing", text: "烧饼" },
			{ value: "pisa", text: "披萨" },
			{ value: "zhajiangmian", text: "炸酱面" }
		]
	}
]


@Component({
	selector: "question",
	template: `
	<div *ngIf="currentQuestion" class="question">
		<h2 class="title">
			{{index}}. {{currentQuestion.title}}
		</h2>
		<div class="description">
			{{currentQuestion.description}}
		</div>
		<div class="form" [formGroup]="foodForm" novalidate>
			<div *ngFor="let choice of currentQuestion.choices" class="choice">
				<input class="choiceInput" type="radio" [formControlName]="currentQuestion.dataName" [value]="choice.value" [id]="choice.value" />
				<label class="choiceLabel" for={{choice.value}}>
					{{choice.text}}
				</label>
			</div>

		</div>
		<div class="navigation">
			<div class="navButton back" [class.disabled]="!canGoBack()" (click)="goBack()">上一题</div><!--
		---><div *ngIf="canGoNext()" class="navButton next" [class.disabled]="!canGoNext()" (click)="goNext()">下一题</div><!--
		---><div *ngIf="!canGoNext()" class="navButton next" (click)="goNext()">提交</div>
		</div>

		<p>{{foodForm.value | json}}</p>
	</div>

	`
})

export class QuestionComponent implements OnInit {

	questions = QUESTIONS;
	index = 0;
	currentQuestion = this.questions[this.index]
	// form
	foodForm: FormGroup;

	// actions
	updateCurrentQuestion() {
		this.currentQuestion = this.questions[this.index];
	}
	ngOnInit() {
		this.index = 0;
		this.updateCurrentQuestion();
		this.foodForm = new FormGroup({
			[this.currentQuestion.dataName]: new FormControl(),
			tommorow: new FormControl()
		})
	}

	submitQuestion() {
		// todo: how do you want to deal with the answer?
		let key = this.currentQuestion.dataName;
		console.log(`question name: ${key} \nanswer: ${this.foodForm.value[key]}`)
	}
	canGoBack() { return this.index > 0 && this.index < this.questions.length; }
	canGoNext() { return this.index >= 0 && this.index < this.questions.length - 1; }
	goBack() {
		if (this.canGoBack()) {
			this.index -= 1;
			this.updateCurrentQuestion();
		}
	}
	goNext() {
		this.submitQuestion();
		if (this.canGoNext()) {
			this.index += 1;
			this.updateCurrentQuestion();
		}
	}


}