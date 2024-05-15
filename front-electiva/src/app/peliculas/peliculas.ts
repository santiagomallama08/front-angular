export class peliculas{
    id: number;
    nombre: String;
    genero:String;
    duracion:number;
    descripcion:string;
    actores:string;
    directores:string;

    public constructor(id:number,nombre:string,genero:string,duracion:number,descripcion:string,actores:string,directores:string){
        this.id=id;
        this.nombre=nombre;
        this.genero=genero;
        this.duracion=duracion;
        this.descripcion=descripcion;
        this.actores=actores;
        this.directores=directores;

    }
}