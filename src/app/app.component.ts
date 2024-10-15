import { Component, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular';
import { Card } from './card.blueprint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'your-app-name';
  selectedButtonLabel: string = 'Student';
  showRegisterForm: boolean = false;
  public card = new Card({
    content: `Hi! I'm Jane, photographer and filmmaker.
    Photography is a way of feeling, of touching,
    of loving. What you have caught on film is captured forever...
    it remembers little things, long after you have
    forgotten everything.`,
    icons: ['person', 'favorite', 'share'],
    imageUrl: 'https://images.unsplash.com/'
    + 'photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    subtitle: 'Professional Photographer',
    title: 'Jane Doe'
});

  onSelectionChange(event:any) {
    if(event.index == 0){
      this.selectedButtonLabel = 'Student';
    }
    else if(event.index == 1){
      this.selectedButtonLabel = 'Teacher';
    }
    else if(event.index == 2){
      this.selectedButtonLabel = 'Admin';
    }
    if(this.showRegisterForm){
      this.showRegisterForm = false
    }
  }

  toggleRegisterForm() {
    this.showRegisterForm = true;
  }
}
