import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css'],
})
export class PasswordCheckerComponent {
  public password: string = '';
  public strength: string = 'empty';

  onPasswordInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.checkStrength();
  }

  checkStrength() {
    if (this.password.length === 0) {
      this.strength = 'empty';
    } else if (this.password.length < 8) {
      this.strength = 'short';
    } else {
      const hasLetters = /[a-zA-Z]/.test(this.password);
      const hasDigits = /\d/.test(this.password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.strength = 'strong';
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        this.strength = 'medium';
      } else {
        this.strength = 'easy';
      }
    }
  }
}
