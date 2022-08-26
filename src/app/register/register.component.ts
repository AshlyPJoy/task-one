import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
 registerForm=this.fb.group({
    username:["",[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z ]*')]],
    email:["",[Validators.required, Validators.email,Validators.pattern('^[ a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:["",[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9@$&*]*')]],
    cpassword:["",[Validators.required, Validators.minLength(6), Validators.pattern('[a-zA-Z0-9@$&*]*')]]
  })


 constructor(private router:Router,private fb:FormBuilder,private ds:DataserviceService) { }

  ngOnInit(): void {
  }

  
  register(){
    
  var username=this.registerForm.value.username
  var email=this.registerForm.value.email
  var password=this.registerForm.value.password
  var cpassword=this.registerForm.value.cpassword

  if(password!=cpassword){
    alert("password doesn't match")

  }else{
    const result=this.ds.register(username,email,password,cpassword)
    if(result){
      alert('Successfully registered')
      this.router.navigateByUrl('login')
    }
    else{
      alert('Already existing user')
    }
   

  }

 
   }

    
  }

 