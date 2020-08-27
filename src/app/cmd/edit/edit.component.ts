import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private apiCall: ApisService) { }
  formData = this.fb.group({
    cusFName: [''],
    cusLname: [''],
    cusEmail: [''],
    cusContact: [''],
    cusOwner: [''],
    proFName: [''],
    proType: [''],
    proRooms: [''],
    proKichens: [''],
    proLivRoom: [''],
    proBathroom: [''],
    proGarden: [''],
    address1: [''],
    address2: [''],
    city: [''],
    state: [''],
    country: ['']
  });
  userID: any;
  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id');
    console.log(param)
    this.userID = param;
    if (!param) {
      this.router.navigate(['/']);
    } else {
      this.apiCall.userDetails(param).subscribe(result => {
        console.log("Response: ", result);
        this.formData.patchValue({
          cusFName: result[0].cusDetails[0].fname,
          cusLname: result[0].cusDetails[0].lname,
          cusEmail: result[0].cusDetails[0].email,
          cusContact: result[0].cusDetails[0].contact,
          cusOwner: result[0].cusDetails[0].owner,
          proFName: result[0].proDetails[0].proName,
          proType: result[0].proDetails[0].proType,
          proRooms: result[0].proDetails[0].proRooms,
          proKichens: result[0].proDetails[0].proKichens,
          proLivRoom: result[0].proDetails[0].proLivRoom,
          proBathroom: result[0].proDetails[0].proBathroom,
          proGarden: result[0].proDetails[0].proGarden,
          address1: result[0].addrDetails[0].address1,
          address2: result[0].addrDetails[0].address2,
          city: result[0].addrDetails[0].city,
          state: result[0].addrDetails[0].state,
          country: result[0].addrDetails[0].country
        })
      }, err => {
        console.log('Technical error!', 'Error message!');
      })
    }
  }

  editUserData() {
    console.log(this.formData.value)
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
        "proKichens": data.proKichens,
        "proLivRoom": data.proLivRoom,
        "proBathroom": data.proBathroom,
        "proGarden": data.proGarden
      }],
      "addrDetails": [{
        "address1": data.address1,
        "address2": data.address1,
        "city": data.city,
        "state": data.state,
        "country": data.country
      }]
    }
    this.apiCall.userUpdate(this.userID, input).subscribe(result => {
      console.log("Response: ", result);
    }, err => {
      console.log('Technical error!', 'Error message!');
    })
  }

  submitForm() {
    console.log(this.formData.value);
  }

}
