import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../model/Contact';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Output() deleteContact: EventEmitter<Contact> = new EventEmitter();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  setClass(): object {
    return {
      contact: true
    };
  }

  onContactUpdate(contact: Contact): void {
    contact.name = "Kanon Lo";
    this.contactService.updateContact(contact).subscribe(console.log);
  }

  onContactDelete(contact: Contact): void {
    this.deleteContact.emit(contact);
  }

}
