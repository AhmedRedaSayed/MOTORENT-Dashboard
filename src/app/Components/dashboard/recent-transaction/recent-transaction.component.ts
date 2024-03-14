import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RentalService } from '../../../Serivces/rental.service';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.css'
})
export class RecentTransactionComponent implements OnInit {
  rentCars!: any [];
  constructor(private rentalService:RentalService){


  }

ngOnInit(): void {
  this.getTopRented()
}
  getTopRented()
  {
    this.rentalService.getTop5RentedCars().subscribe({
      next:(data)=>
      {
        this.rentCars = data.data
        console.log(this.rentCars);
      }
    })
  }
}
