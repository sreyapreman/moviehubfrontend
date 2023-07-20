import { Component } from '@angular/core';
import{FormControl,FormGroup,Validators} from '@angular/forms'
import { MovieService } from '../service/movie.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:MovieService,private router:Router){

  }
  reForm= new FormGroup({
    "username":new FormControl("",Validators.required),
    "email":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required),

  })
  signUp(){
    if(this.reForm.valid){
      // console.log(this.reForm.value);
      let formData=this.reForm.value
      this.service.register(formData).subscribe(res=>this.router.navigateByUrl(''))
      
    }
    else{
      alert("invalid")
    }
  }

}
