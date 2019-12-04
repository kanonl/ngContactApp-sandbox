export class Contact {
    id: number;
    name: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
    username: string;
    email: string;
    website: string;
    phone: string;
}