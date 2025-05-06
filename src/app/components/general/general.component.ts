import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {

}
