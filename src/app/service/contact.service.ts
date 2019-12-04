import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../model/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  jsonplaceholderUrl: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {

    let url = new URL(this.jsonplaceholderUrl);
    url.pathname = "/users";
    url.search = new URLSearchParams({
      "_limit": "10"
    }).toString();

    return this.http.get<Contact[]>(url.toString());
  }

  updateContact(contact: Contact): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    let url = new URL(this.jsonplaceholderUrl);
    url.pathname = `/users/${contact.id}`;

    return this.http.put(url.toString(), contact, httpOptions);
  }

  deleteContact(contact: Contact): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    let url = new URL(this.jsonplaceholderUrl);
    url.pathname = `/users/${contact.id}`;

    return this.http.delete<Contact>(url.toString());
  }

}
