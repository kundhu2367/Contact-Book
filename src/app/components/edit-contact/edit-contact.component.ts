import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../services/contact/contact.service';
import { IContact } from '../../interfaces/contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: IContact;

  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.contact = this.contactService.getContactById( +params.id );
    });
  }

}
