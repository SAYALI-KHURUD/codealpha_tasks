import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './age-calculator.component.html',
  styleUrl: './age-calculator.component.css'
})
export class AgeCalculatorComponent {
  birthDate: string = '';
  age: number | null = null;

  calculateAge() {
    if (this.birthDate) {
      const birthDateObj = new Date(this.birthDate);
      const today = new Date();

      let age = today.getFullYear() - birthDateObj.getFullYear();
      const monthDiff = today.getMonth() - birthDateObj.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
      }

      this.age = age;
    }
  }
}