import { Component, OnInit } from '@angular/core';
import { IContact } from '../../interfaces/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contact: IContact;

  constructor() { }

  ngOnInit() {
    this.contact = {
      id : 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      status: ''
    };
  }

}
