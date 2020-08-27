import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  userDetails:any;
  constructor(private route: ActivatedRoute, private router: Router, private apiCall: ApisService,) { }

  ngOnInit(): void {
    let param = this.route.snapshot.paramMap.get('id');
    console.log(param)
    if(!param){
      this.router.navigate(['/']);
    } else {
      this.apiCall.userDetails(param).subscribe(result => {
        console.log("Response: ", result);
        this.userDetails = result;
      }, err => {
        console.log('Technical error!', 'Error message!');
      })
    }
  }
}
