import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import '@skyra/discord-components-core';

@Component({
	selector: 'app-root',
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'angular';
}
