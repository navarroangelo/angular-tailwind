import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css',
})
export class FeaturedComponent {
  title = 'Chronos Atelier';
  watchTitle: string = 'Patek Philippe Nautilus';
  watchDescription: string =
    'The epitome of luxury sports watches, our Watch of the Year combines elegant design with exceptional craftsmanship. Featuring a gradient blue dial, integrated bracelet, and the legendary caliber 26-330 S C movement, this timepiece represents the pinnacle of horological excellence.';
  watchImage = 'assets/patek-philippe-nautilus.png';
  watchAward: string = 'Watch of the Year';
  userName: string = '';

  submitEntry(): void {
    alert(`Thank you, ${this.userName}, for entering the raffle!`);
    this.userName = '';
  }
}
