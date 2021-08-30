import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;
  phoneTerm: string = '';
  constructor(private customerService: CustomersService) {
    this.customers$ = this.customerService.getAll();
  }

  async remove(id: string, e: Event) {
    e.preventDefault();
    if (confirm('are you sure you want to delete')) {
      await this.customerService.remove(id);
    }
  }
  ngOnInit(): void {}
}
