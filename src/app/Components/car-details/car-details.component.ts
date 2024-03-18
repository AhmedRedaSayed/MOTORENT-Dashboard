import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../Serivces/cars.service';
import { UsersService } from '../../Serivces/users.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  carId!: any;
  car!:any;
  carOwner!:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private carsSerivce:CarsService,private userSerive:UsersService,private router:Router ){}
  ngOnInit(): void {

    this.getId()
    this.getCar()
  }
  getId()
{
  this._ActivatedRoute.paramMap.subscribe((params)=>
  {
    this.carId = params.get('id')
  })
}

  getCar(){
    this.carsSerivce.getCarId(this.carId).subscribe({
      next:(data)=>
      {
        this.car = data.data
        console.log(this.car)
        this.userSerive.getUser(this.car.ownerId).subscribe({
          next:(data)=>
          {
            this.carOwner = data.data
            console.log(this.carOwner)
          }
        })
      }
    })
  }
deleteCar()
{
  this.carsSerivce.deleteCar(this.carId).subscribe({
    next:()=>
    {

      this.router.navigate(['/carsLayout'])
    }
  })
}
approveCar()
{
  this.carsSerivce.approveCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}
declineCar()
{
  this.carsSerivce.declineCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}
activeCar()
{
  this.carsSerivce.activeCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}
suspendCar()
{
  this.carsSerivce.suspendCar(this.carId).subscribe({
    next:(data)=>
    {
      this.car = data.data
      this.getCar()
    }
  })
}

}
