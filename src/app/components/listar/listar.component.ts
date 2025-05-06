import { Component, inject, OnInit } from '@angular/core';
import { IFilter } from '../../models/filter.model';
import { FormsModule } from '@angular/forms';
import { PuertosService } from '../../services/puertos.service';
import { IPuertosModel } from '../../models/puertos.model';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule, MatTableModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{

  ngOnInit() {
    this.getData(); // Llamada al cargar el componente
  }

  private puertoService= inject(PuertosService);

  public listPuertos: IPuertosModel[]= []

  displayedColumns: string[] = ['puerto', 'personaContacto', 'correo', 'telefono'];
  dataSource = this.listPuertos;

  public filter: IFilter= {
    searchBy: 'name',
    value: 'Buscar'
  }

  getData(){
    this.puertoService.getPuertos().subscribe({
      next: (listPuertos: IPuertosModel[]) => {
        console.log(listPuertos)
        this.listPuertos= listPuertos;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {

      }
    })
  }
}
