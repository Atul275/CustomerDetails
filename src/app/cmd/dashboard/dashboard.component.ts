import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApisService } from '../../services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  formStep: number = 1;
  userDataArray: any = [];
  constructor(
    private fb: FormBuilder,
    private apiCall: ApisService,
    private router: Router
  ) { }

  formData = this.fb.group({
    cusFName: ['', Validators.required],
    cusLname: ['', Validators.required],
    cusEmail: ['', Validators.required],
    cusContact: ['', Validators.required, [Validators.pattern(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)]],
    cusOwner: [''],
    proFName: ['', Validators.required],
    proType: ['', Validators.required],
    proRooms: ['', Validators.required],
    proKitchens: [''],
    proLivRoom: [''],
    proBathroom: [''],
    proGarden: [''],
    address1: ['', Validators.required],
    address2: [''],
    landmark:[''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    country: ['', Validators.required],
    pincode: ['', Validators.required]
  });

  ngOnInit(): void {
    this.userData();
  }

  nextStep() {
    this.formStep += 1;
  }

  backStep() {
    this.formStep -= 1;
  }

  submitForm() {
    console.log(this.formData.value);
    let data = this.formData.value;
    let input = {
      "cusDetails": [{
        "fname": data.cusFName,
        "lname": data.cusLname,
        "email": data.cusEmail,
        "contact": data.cusContact,
        "owner": data.cusOwner
      }],
      "proDetails": [{
        "proName": data.proFName,
        "proType": data.proType,
        "proRooms": data.proRooms,
        "proKitchens": data.proKitchens,
        "proLivRoom": data.proLivRoom,
        "proBathroom": data.proBathroom,
        "proGarden": data.proGarden
      }],
      "addrDetails": [{
        "address1": data.address1,
        "address2": data.address2,
        "landmark":data.landmark,
        "city": data.city,
        "state": data.state,
        "country": data.country,
        "pincode": data.pincode
      }]
    }

    this.apiCall.userAdd(input).subscribe(result => {
      console.log("Response: ", result);
      this.userData();
    }, err => {
      console.log('Technical error!', 'Error message!');
    })
  }

  userData() {
    this.apiCall.userData().subscribe(result => {
      console.log("Response: ", result);
      this.userDataArray = result;
    }, err => {
      console.log('Technical error!', 'Error message!');
    })
  }

  deleteRecord(id) {
    this.apiCall.userDelete(id).subscribe(result => {
      console.log("Response: ", result);
      this.userData();
    }, err => {
      console.log('Technical error!', 'Error message!');
    })
  }

  viewDetails(id) {
    this.router.navigate(['/details', { id: id }]);
  }

  updateDetails(id) {
    console.log(id)
    this.router.navigate(['/edit', { id: id }]);
  }
}
