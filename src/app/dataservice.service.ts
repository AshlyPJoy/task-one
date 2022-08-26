import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  db: any = {
    Allu : {  "username": "Allu ", "email":"allu123@gmail.com","password": "allu@123","cpassword":"allu@123" },
    Nevin: {  "username": "Nevin", "email":"nevin32@gmail.com","password": "Nevin@123","cpassword":"Nevin@123" }
    
  }

  constructor() { }


register(username:any,email:any,password:any,cpassword:any){
  

  
let db=this.db
console.log(db);

  if(username in db){
    return false
    
  }
  else{
    db[username]={
    username,
    email,
    password,
    cpassword
    }
    return true
  }

}

login(username:any,password:any){
  

let db = this.db
if (username in db) {
  if (password==db[username]["password"]) {
   }
    return true
  }
  
 else {
  alert("Invalid credential")
  return false

}
}


}

