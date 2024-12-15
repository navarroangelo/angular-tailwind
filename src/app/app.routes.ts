import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { GalleryComponent } from './components/gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
  {
    path: 'featured',
    component: FeaturedComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];
