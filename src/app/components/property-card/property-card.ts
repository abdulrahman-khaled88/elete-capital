import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-property-card',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatChipsModule],
  templateUrl: './property-card.html',
  styleUrl: './property-card.scss',
})
export class PropertyCard {
  property = {
    title: 'إليت كابيتال',
    subtitle: 'شقة A-1203',
    location: 'جدة ، حي الزهراء',
    lastUpdate: 'أخر تحديث : 15 يونيو 2026',
    price: '3,000,000',
  };
}
