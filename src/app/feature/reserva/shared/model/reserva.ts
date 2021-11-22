export class Reserva{

    // this.id = id;
    // this.cedula = cedula;
    // this.nombre = nombre;
    // this.fechaEntrada = fechaEntrada;
    // this.idGlamping = idGlamping;
    // this.cantPersonas = cantPersonas;
    // this.telefono = telefono;
    // this.fechaSalida = fechaSalida;
    // this.costoTotal = costoTotal;
    // this.fechaRegistro = fechaRegistro;

    id:number;
    cedula: string;
    nombre:string;
    fechaEntrada: Date;
    idGlamping: number;
    cantPersonas: number;
    telefono: string;
    fechaSalida: Date;
    costoTotal: number;
    fechaRegistro: Date;


    
    constructor( id:number,
        cedula: string,
        nombre:string,
        fechaEntrada: Date,
        idGlamping: number,
        cantPersonas: number,
        telefono: string,
        fechaSalida: Date,
        costoTotal: number,
        fechaRegistro: Date){

        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.fechaEntrada = fechaEntrada;
        this.idGlamping = idGlamping;
        this.cantPersonas = cantPersonas;
        this.telefono = telefono;
        this.fechaSalida = fechaSalida;
        this.costoTotal = costoTotal;
        this.fechaRegistro = fechaRegistro;

    }

}