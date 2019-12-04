import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './component/contacts/contacts.component';
import { AboutComponent } from './component/pages/about/about.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '', component: ContactsComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
