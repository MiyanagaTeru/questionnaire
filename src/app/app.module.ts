import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }        from './app.component';
import { QuestionComponent }   from './questions/question.component';

@NgModule({
	imports:      [
		BrowserModule,
		ReactiveFormsModule
	],
	declarations: [
		AppComponent,
		QuestionComponent
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
