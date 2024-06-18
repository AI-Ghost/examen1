import { Routes } from '@angular/router';
import { InicioComponent } from './shared/inicio/inicio.component';
import { NosotrosComponent } from './shared/nosotros/nosotros.component';
import { NoticiasComponent } from './shared/noticias/noticias.component';

export const routes: Routes = [
    { path: 'inicio-component', component: InicioComponent },
    { path: 'nosotros-component', component: NosotrosComponent },
    { path: 'noticias-component', component: NoticiasComponent },
];
