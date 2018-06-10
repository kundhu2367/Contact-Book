import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AppComponent } from './app.component';
import { ContactsFormComponent } from './components/contacts-form/contacts-form.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { HeaderComponent } from './components/header/header.component';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    HeaderComponent,
    ContactsFormComponent,
    AddContactComponent,
    EditContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [{ provide: 'LOCALSTORAGE', useFactory: getLocalStorage }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage() {
  return (typeof window !== 'undefined') ? window.localStorage : null;
}
