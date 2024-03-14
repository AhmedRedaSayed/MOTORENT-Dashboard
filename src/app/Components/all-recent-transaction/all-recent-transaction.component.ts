import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RentalService } from '../../Serivces/rental.service';

@Component({
  selector: 'app-all-recent-transaction',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,DatePipe],
  templateUrl: './all-recent-transaction.component.html',
  styleUrl: './all-recent-transaction.component.css'
})
export class AllRecentTransactionComponent implements OnInit {
  recentRentedCars!: any[]
constructor(private rentalService:RentalService){

}

ngOnInit(): void {
  this.getAllrentals()
}
getAllrentals() {
  this.rentalService.getAllRentals().subscribe({
    next:(data)=>
    {
      console.log(data.data)
      this.recentRentedCars = data.data
      console.log(this.recentRentedCars);

    }
  })
}
}
