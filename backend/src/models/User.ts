
export default class User {
    constructor(rut:String, nombre:String, apellidoPno:String, apellidoMno:String ){
        this.rut = rut
        this.nombre = nombre;
        this.apellidoPno = apellidoPno;
        this.apellidoMno = apellidoMno;
    }
    rut: String
    nombre : String;
    apellidoPno : String;
    apellidoMno : String;
}
