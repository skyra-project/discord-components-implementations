import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import '@skyra/discord-components-core';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'angular';
}
