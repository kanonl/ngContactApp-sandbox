import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/Contact';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(users => {
      this.contacts = users;
    });
  }

  deleteContact(contact: Contact): void {
    this.contactService.deleteContact(contact).subscribe(response => {
      console.log(`delete id ${contact.id}`);
      this.contacts = this.contacts.filter(c => c.id !== contact.id);
    });
  }

}
