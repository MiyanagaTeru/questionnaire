"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var question_base_1 = require("./question-base");
var Choice = (function () {
    function Choice() {
    }
    return Choice;
}());
exports.Choice = Choice;
var Question = (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;
var Answer = (function () {
    function Answer() {
    }
    return Answer;
}());
exports.Answer = Answer;
var q = new question_base_1.QuestionBase({ title: 'hello' });
console.log(q);
var QUESTIONS = [
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
];
var QuestionComponent = (function () {
    function QuestionComponent() {
        this.questions = QUESTIONS;
        this.index = 0;
        this.currentQuestion = this.questions[this.index];
    }
    // actions
    QuestionComponent.prototype.updateCurrentQuestion = function () {
        this.currentQuestion = this.questions[this.index];
    };
    QuestionComponent.prototype.ngOnInit = function () {
        this.index = 0;
        this.updateCurrentQuestion();
        this.foodForm = new forms_1.FormGroup((_a = {},
            _a[this.currentQuestion.dataName] = new forms_1.FormControl(),
            _a.tommorow = new forms_1.FormControl(),
            _a));
        var _a;
    };
    QuestionComponent.prototype.submitQuestion = function () {
        // todo: how do you want to deal with the answer?
        var key = this.currentQuestion.dataName;
        console.log("question name: " + key + " \nanswer: " + this.foodForm.value[key]);
    };
    QuestionComponent.prototype.canGoBack = function () { return this.index > 0 && this.index < this.questions.length; };
    QuestionComponent.prototype.canGoNext = function () { return this.index >= 0 && this.index < this.questions.length - 1; };
    QuestionComponent.prototype.goBack = function () {
        if (this.canGoBack()) {
            this.index -= 1;
            this.updateCurrentQuestion();
        }
    };
    QuestionComponent.prototype.goNext = function () {
        this.submitQuestion();
        if (this.canGoNext()) {
            this.index += 1;
            this.updateCurrentQuestion();
        }
    };
    return QuestionComponent;
}());
QuestionComponent = __decorate([
    core_1.Component({
        selector: "question",
        template: "\n\t<div *ngIf=\"currentQuestion\" class=\"question\">\n\t\t<h2 class=\"title\">\n\t\t\t{{index}}. {{currentQuestion.title}}\n\t\t</h2>\n\t\t<div class=\"description\">\n\t\t\t{{currentQuestion.description}}\n\t\t</div>\n\t\t<div class=\"form\" [formGroup]=\"foodForm\" novalidate>\n\t\t\t<div *ngFor=\"let choice of currentQuestion.choices\" class=\"choice\">\n\t\t\t\t<input class=\"choiceInput\" type=\"radio\" [formControlName]=\"currentQuestion.dataName\" [value]=\"choice.value\" [id]=\"choice.value\" />\n\t\t\t\t<label class=\"choiceLabel\" for={{choice.value}}>\n\t\t\t\t\t{{choice.text}}\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"navigation\">\n\t\t\t<div class=\"navButton back\" [class.disabled]=\"!canGoBack()\" (click)=\"goBack()\">\u4E0A\u4E00\u9898</div><!--\n\t\t---><div *ngIf=\"canGoNext()\" class=\"navButton next\" [class.disabled]=\"!canGoNext()\" (click)=\"goNext()\">\u4E0B\u4E00\u9898</div><!--\n\t\t---><div *ngIf=\"!canGoNext()\" class=\"navButton next\" (click)=\"goNext()\">\u63D0\u4EA4</div>\n\t\t</div>\n\n\t\t<p>{{foodForm.value | json}}</p>\n\t</div>\n\n\t"
    })
], QuestionComponent);
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map