import { Component } from '@angular/core';
import{Router,NavigationEnd}from '@angular/router'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  displayNav:boolean=true
  constructor(private router:Router){
    this.router.events.subscribe(
      event=>{
        if(event instanceof NavigationEnd){
          this.displayNav=!["/","/register"].includes(event.url)
        }
      }
    )

  }
  signOut(){
    if("token" in localStorage){
      localStorage.removeItem("token")
      this.router.navigateByUrl('')

    }

  }

}
