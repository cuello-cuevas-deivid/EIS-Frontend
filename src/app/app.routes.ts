import { Routes } from '@angular/router';
import { Home } from '../pages/home/home';
import { About } from '../pages/about/about';
import { Services } from '../pages/services/services';
import { Solutions } from '../pages/solutions/solutions';
import { Clients } from '../pages/clients/clients';
import { News } from '../pages/news/news';
import { ServiceDetail } from '../pages/service-detail/service-detail';

import { serviceSlugGuard } from '../guards/service-slug-guard';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: Home },
    { path: 'sobre-nosotros', component: About },
    { path: 'servicios', component: Services },
    { path: 'soluciones', component: Solutions },
    { path: 'clientes', component: Clients },
    { path: 'novedades', component: News },
    {
        path: 'servicio/:slug',
        component: ServiceDetail,
        canActivate: [serviceSlugGuard]
    },
];
