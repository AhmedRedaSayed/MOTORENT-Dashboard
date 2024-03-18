import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CarsService } from '../../../Serivces/cars.service';
import { CarsSearchPipe } from '../../../Pipes/cars-search.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [RouterLink,CurrencyPipe,MatIcon,CarsSearchPipe,FormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
cars!: any [];
carSearch:string = ""
selectedStatus: string = '';


constructor(private carsSerivce:CarsService){

}

ngOnInit(): void {
this.getCars()
}
getCars(status?:string)
{
  this.carsSerivce.getCars(status).subscribe({
    next:(data)=>
    {
      this.cars = data.data
      console.log(this.cars);

    }
  })
}
}
