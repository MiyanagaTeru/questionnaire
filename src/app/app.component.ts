import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div id="container">
	{{index}}
		<question></question>
	</div>`,
})
export class AppComponent  {

}
