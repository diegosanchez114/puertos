import {MatExpansionModule} from '@angular/material/expansion';
import { Component, inject, signal } from '@angular/core';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { IPuertosModel } from '../../models/puertos.model';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';



@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule, MatLabel, MatInputModule, MatButtonModule, MatTabsModule, FormsModule, ReactiveFormsModule, MatStepperModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  private formBuilder: FormBuilder= inject(FormBuilder)

  puerto: IPuertosModel= {
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
  }

  isLinear = true;

  primeroFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
  });
  segundoFormGroup = this.formBuilder.group({
    area: ['', Validators.required],
  });
  terceroFormGroup = this.formBuilder.group({
    area: ['', Validators.required],
  });

  addPuerto(){
    console.log(this.puerto);
  }

}
