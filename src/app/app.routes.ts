import {RouterModule, Routes} from '@angular/router';
import {
    PortafolioComponent,
    AboutComponent,
    ProductoComponent
} from "./components/index.paginas";

const app_routes: Routes = [
    { path: '', component: PortafolioComponent},
    { path: 'about', component: AboutComponent},
    { path: 'producto', component: ProductoComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''}
]

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });