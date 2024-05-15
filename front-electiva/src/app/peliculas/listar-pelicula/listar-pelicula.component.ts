import { Component, OnInit } from '@angular/core';
import { peliculas } from '../peliculas';
import { PeliculasService } from '../peliculas.service';
import {Router, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-pelicula',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './listar-pelicula.component.html',
  styleUrl: './listar-pelicula.component.css'
})
export class ListarPeliculaComponent implements OnInit{
  peliculas: Array<peliculas>=[];
  constructor(private routerPath: Router, private peliculasService: PeliculasService){

  }
  ngOnInit() {
      this.obtenerPeliculas();
  }
  obtenerPeliculas(){

    this.peliculasService.obtenerPeliculas().subscribe(vs=>{
      this.peliculas=vs;
      console.log(this.peliculas)
    });
  }
  onEditarNavigate(id:number){
    this.routerPath.navigate(['/peliculas/editar/${id}']);
  }

}
