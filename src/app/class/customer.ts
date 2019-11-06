export class Customer {
    id: string;
    title?: string;
    name?: string;
    surname?: string;
    profilePicId?: string;
    profilePhoto?: Blob;
    idNumber?: string;
    email?: string;
    customerContact?: string;
	password?: string;
	postalAddress?: string;
	surburb?: string;
	town_city?: string;
	postalCode?: string;
	monthlyPayment?: number;
	cardHolder?: string;
	cardNumber?: number;
	expiryDate?: Date;
	cVV?: number;
	isActive?: boolean;
	ageRange?: string;
	nationality?: string;
}
