export interface PuertosModel {
    id: number;
    nombre: string;
    pais: string;
    latitud: number;
    longitud: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    estado: boolean;
}