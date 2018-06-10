import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddContactComponent } from '../components/add-contact/add-contact.component';
import { ContactsListComponent } from '../components/contacts-list/contacts-list.component';
import { EditContactComponent } from '../components/edit-contact/edit-contact.component';

const appRoutes: Routes = [
  { path: 'list', component: ContactsListComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'edit/:id', component: EditContactComponent },
  { path: '**', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  providers: [  ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class RoutesModule { }
