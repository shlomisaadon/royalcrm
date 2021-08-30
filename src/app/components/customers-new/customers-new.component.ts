import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss'],
})
export class CustomersNewComponent implements OnInit {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  reset(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  async onSubmit({ valid }: NgForm) {
    //TODO : update db
    if (valid) {
      await this.customerService.add(this.form);
      this.routerService.navigate(['../..'], {
        relativeTo: this.activateRouteService,
      });
    }
  }
  constructor(
    private customerService: CustomersService,
    private routerService: Router,
    private activateRouteService: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
