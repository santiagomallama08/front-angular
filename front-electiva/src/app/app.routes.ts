import { Routes } from '@angular/router';
import { ListarPeliculaComponent } from './peliculas/listar-pelicula/listar-pelicula.component';
import { peliculas } from './peliculas/peliculas';

export const routes: Routes = [{
    path: '',
    component: ListarPeliculaComponent
    }

];
