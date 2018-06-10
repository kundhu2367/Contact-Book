import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { IContact } from '../../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: IContact[];

  constructor(private http: HttpClient, @Inject('LOCALSTORAGE') private localStorage: any) { }

  getContacts(): IContact[] {
    this.contacts = JSON.parse(this.localStorage.getItem('contacts'));
    return this.contacts;
  }

  getContactById(id: number): IContact {
    this.contacts = JSON.parse(this.localStorage.getItem('contacts'));
    return this.contacts.filter(contact => contact.id === id)[0];
  }

  addContacts(contact: IContact) {
    this.contacts = JSON.parse(this.localStorage.getItem('contacts'));
    if (typeof contact.id === 'undefined' || contact.id === 0 ) {
      contact.id = this.getRandomId();
    } else {
      this.contacts = this.contacts.filter(contactDetail => contactDetail.id !== contact.id);
    }
    this.contacts = (this.contacts == null) ? [] : this.contacts;
    this.contacts.push(contact);
    this.localStorage.setItem('contacts', JSON.stringify(this.contacts) );
    return true;
  }

  deleteContact(contact: IContact) {
    this.contacts = JSON.parse(this.localStorage.getItem('contacts'));
    this.contacts = this.contacts.filter(contactDetail => contactDetail.id !== contact.id);
    this.localStorage.setItem('contacts', JSON.stringify(this.contacts) );
    return this.contacts;
  }

  getRandomId() {
      return Math.floor((Math.random() * 9999) + 1);
  }
}
