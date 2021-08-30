import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactsData;
  constructor(contact: ContactsService) {
    this.contactsData = contact.getAll();
    // this.contactsData = [];
  }

  ngOnInit(): void {}
}
