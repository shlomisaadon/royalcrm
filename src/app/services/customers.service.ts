import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customerRef: AngularFirestoreCollection<Customer>;
  //sign to observable with Customer Interface
  private customers$: Observable<Customer[]>;

  //Get service from firebase
  constructor(private asf: AngularFirestore) {
    //Creat a NEW COLLATION
    this.customerRef = this.asf.collection('customers', (ref) =>
      ref.orderBy('firstName', 'desc')
    );

    //creat Pipe with id and shareReplay for one request from DB
    this.customers$ = this.customerRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }
  ////////////////////////////////////////////////

  //add a new Doc
  add(customer: Customer) {
    return this.customerRef.add(customer);
  }

  //get all filed and watch all changes
  getAll() {
    return this.customers$;
  }
  // remove doc from firebase
  remove(id: string) {
    this.customerRef.doc(id).delete();
  }

  getById(id: string) {
    return this.customerRef.doc<Customer>(id).valueChanges({ idField: 'id' });
  }

  update({ id, ...customer }: Customer) {
    return this.customerRef.doc<Customer>(id).update(customer);
  }
}
