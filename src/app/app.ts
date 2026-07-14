import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCard } from './components/property-card/property-card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PropertyCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('elete-capital');
}
