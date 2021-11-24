import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public data: Array<any>;

  constructor(private snack: MatSnackBar) {
    this.data = [
      { title: 'Test 1', description: 'Test 1', btnSubmitLabel: 'Learn More' },
      { title: 'Test 2', description: 'Test 2', btnSubmitLabel: 'Learn More' },
      { title: 'Test 3', description: 'Test 3', btnSubmitLabel: 'Learn More' },
      { title: 'Test 4', description: 'Test 4', btnSubmitLabel: 'Learn More' },
    ];
  }

  /**
   * submitedOnWebComponent
   */
  public submitedOnWebComponent(): void {
    this.snack.open('I was submited in a web component!', undefined, {
      duration: 2000,
    });
  }
}
