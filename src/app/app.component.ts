import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { routes } from './app.routes';
import { GeneralComponent } from "./components/general/general.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatSlideToggleModule, CdkAccordionModule, RouterOutlet, GeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
