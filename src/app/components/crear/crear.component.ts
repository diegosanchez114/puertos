import {MatExpansionModule} from '@angular/material/expansion';
import { Component, inject, signal } from '@angular/core';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { IPuertosModel } from '../../models/puertos.model';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { PuertosService } from '../../services/puertos.service';


interface Modo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatLabel, MatInputModule, MatButtonModule, MatTabsModule, FormsModule, ReactiveFormsModule, MatStepperModule, MatSelectModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})


export class CrearComponent {

  private formBuilder: FormBuilder= inject(FormBuilder)
  private puertoService= inject(PuertosService);

  

 /*  puerto: IPuertosModel= {
    id: 0,
    puerto: '',
    ciudad: '',
    personaEntrevistada: '',
    cargo: '',
    personaContacto: '',
    cedula: '',
    correo: '',
    telefono: '',
    fechaCreacion: new Date(), 
    fechaModificacion: new Date ()
  } */

    modos: Modo[] = [
      {value: '1', viewValue: 'Ferreo'},
      {value: '2', viewValue: 'Carretero'},
      {value: '3', viewValue: 'Fluvial'},
      {value: '4', viewValue: 'Maritimo'},
    ];

  isLinear = true;

  primeroFormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    ciudad: [''],
    personaEntrevistada: [''],
    cargo: [''],
    personaContacto: [''],
    cedula: [''],
    correo: [''],
    telefono: [''],
    areaUsoPublico: [''],
    areaUsoAdyacente: ['']
  }); 
  terceroFormGroup = this.formBuilder.group({
    area: ['', Validators.required],
  });
  cuartoFormGroup = this.formBuilder.group({
    area: ['', Validators.required],
  });

  addPuerto(){
    //console.log(this.puerto);
  }

  agregar(){
    //console.log(this.puerto);
  }

  CrearPuerto() {
    if (this.primeroFormGroup.invalid) return;
    console.log(this.primeroFormGroup.value)
    this.puertoService.CrearPuerto(this.primeroFormGroup.value)    
      .subscribe({        
        next: res => console.log('Producto creado:', res),
        error: err => console.error('Error:', err)
      });
  }

}
