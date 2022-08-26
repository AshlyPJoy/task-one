import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  loginForm=this.fb.group({
    username:["",[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]],
    
    password:["",[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9@$&*#]*')]]
    
  })

  
constructor(private fb:FormBuilder,private ds:DataserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    
    var username=this.loginForm.value.username
    var password=this.loginForm.value.password

    const result=this.ds.login(username,password)

    if(result){
      alert('Login successfull ')
      
    }
    
    
  }
}
