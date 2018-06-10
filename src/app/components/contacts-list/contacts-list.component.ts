import { Component, OnInit } from '@angular/core';

import { IContact } from '../../interfaces/contact';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts: Array<IContact>;

  constructor(private contactService: ContactService ) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onDelete(contact: IContact) {
    this.contacts =  this.contactService.deleteContact(contact);
  }
}
