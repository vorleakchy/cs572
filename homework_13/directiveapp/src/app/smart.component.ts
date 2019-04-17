import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart',
  template: `
    <h1 makeBigger>Contacts</h1>
    <button (click)="toggleAllContacts()">Show/Hide All Contacts</button>
    <dump *ngFor="let contact of contacts" [contact]="contact"></dump>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  toggleContacts: boolean = true;

  contacts = [
    { name: 'Charles', showInList: true }, 
    { name: 'Mohammed', showInList: false }, 
    { name: 'Seyha', showInList: false },
    { name: 'Vorleak', showInList: true }
  ];

  constructor() { }

  toggleAllContacts() {
    this.toggleContacts = this.toggleContacts == true ? false : true;
    this.contacts.map(c => c.showInList = this.toggleContacts);

    // Uncomment `ChangeDetection...` in dump component, you will not see the affect of toggling contacts
    // It means, it will not rerender its template
  }

  ngOnInit() {
  }

}
