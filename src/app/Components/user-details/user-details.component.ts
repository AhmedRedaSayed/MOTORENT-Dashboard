import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../Serivces/users.service';
import {MatTabsModule} from '@angular/material/tabs';
import { CurrencyPipe } from '@angular/common';




@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatTabsModule,CurrencyPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userId!:any;
  user!:any;
constructor(private _ActivatedRoute:ActivatedRoute,private _usersSerivce:UsersService,private router:Router){}
ngOnInit(): void {
this.getId()
this.getUser()
}

getId()
{
  this._ActivatedRoute.paramMap.subscribe((params)=>
  {
    this.userId = params.get('id')
  })
}
getUser()
{
  this._usersSerivce.getUser(this.userId).subscribe({
    next:(data)=>
    {
      this.user = data.data
      console.log(this.user);
    }
  })
}

deleteUser()
{
  this._usersSerivce.deleteUser(this.userId).subscribe({
    next:()=>
    {
      this.router.navigate(['/userLayout'])
    }
  })
}




}
