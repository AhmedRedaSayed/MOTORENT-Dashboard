import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../Serivces/users.service';
import { RouterLink } from '@angular/router';
import { UserSearchPipe } from '../../../Pipes/user-search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink,UserSearchPipe,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users!:any[]
  userSearch:string = ""
constructor(private _userSerivce:UsersService){}
ngOnInit(): void {
  this.getUsers()
}
getUsers()
{
  this._userSerivce.getAllUsers().subscribe({
    next:(data)=>
    {
      this.users = data.data
      console.log(this.users);

    }
  })
}
}
