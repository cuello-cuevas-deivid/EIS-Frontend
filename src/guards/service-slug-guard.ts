import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const serviceSlugGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const slug = route.paramMap.get('slug');

  const paginasPermitidas = [
    'desarrollo-software',
    'desarrollo-aplicaciones-web',
    'diseno-portales-personalizados',
    'desarrollo-aplicaciones-moviles',
    'equipo-tecnicos-dedicado',
    'outsourcing',
    'alojamiento-web',
    'seguridad-software',
    'integracion-aplicaciones',
    'prueba-software-calidad-control',
    'optimizacion-posicionamiento-web',
    'soporte-mantenimiento'
  ];

  if (slug && paginasPermitidas.includes(slug)) {
    return true;
  }

  return router.createUrlTree(['/']);
};
