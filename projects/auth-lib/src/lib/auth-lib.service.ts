import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {
  userName: string ='No User'
  constructor(private router : Router) { }
  login(){
    this.userName="Mohan"
  }
  navigate(s: string){

    this.router.navigate([s])
  }
}
