import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IContact } from '../../interfaces/contact';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.css']
})
export class ContactsFormComponent implements OnInit {

  @Input() contact;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.contact.status === '') {
      return false;
    }
    this.contactService.addContacts(this.contact);
    this.router.navigate(['/list']);
  }

}
