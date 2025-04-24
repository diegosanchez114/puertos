import {MatExpansionModule} from '@angular/material/expansion';
import { Component, signal } from '@angular/core';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';



@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatLabel, MatInputModule, MatButtonModule, MatTabsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  items = ['Formulario1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  readonly panelOpenState = signal(false);

}
