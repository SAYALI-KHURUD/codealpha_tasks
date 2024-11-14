import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,  // This indicates that the component is standalone
  imports: [ RouterOutlet, AgeCalculatorComponent], // Include necessary modules and components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correct plural form
})
export class AppComponent {
  title = 'AgeCalculator';
}
