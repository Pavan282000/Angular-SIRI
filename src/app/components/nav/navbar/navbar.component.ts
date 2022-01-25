import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showCoverPage: boolean = false;
  showCoverImage: boolean = false;
  showAssessmentPage: boolean = true;

  constructor() { }
  userForm:FormGroup
  ngOnInit(): void {
    this.userForm = new FormGroup({

      'email' : new FormControl('email',[Validators.required,Validators.email]),
      'password' : new FormControl('',
    [Validators.required,Validators.minLength(5),])
    })
  }
  goToCoverPage(event: any){
    this.showCoverPage = true;
    this.showCoverImage = true;
    this.showAssessmentPage = false;
  }

}
