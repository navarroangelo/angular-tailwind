import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  watches: any[] = [
    {
      name: 'Rolex Daytona',
      description:
        'A legendary chronograph that combines sportiness with elegance.',
      image: 'assets/rolex-daytona.jpg',
    },
    {
      name: 'Omega Speedmaster',
      description:
        'The first watch worn on the moon, featuring precise chronograph functionality.',
      image: 'assets/omega-speedmaster.png',
    },
    {
      name: 'Audemars Piguet Royal Oak',
      description:
        'A masterpiece of angular design with its signature octagonal bezel.',
      image: 'assets/ap-royal-oak.jpg',
    },
  ];
}
