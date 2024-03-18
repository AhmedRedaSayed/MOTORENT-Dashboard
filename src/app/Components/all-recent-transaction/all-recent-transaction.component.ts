import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RentalService } from '../../Serivces/rental.service';
import { BrandsService } from '../../Serivces/brands.service';

@Component({
  selector: 'app-all-recent-transaction',
  standalone: true,
  imports: [CurrencyPipe,RouterLink,DatePipe],
  templateUrl: './all-recent-transaction.component.html',
  styleUrl: './all-recent-transaction.component.css'
})
export class AllRecentTransactionComponent implements OnInit {
  recentRentedCars!: any[]
  brands!:any[];
constructor(private rentalService:RentalService,private brandService:BrandsService){}

ngOnInit(): void {
  this.getAllrentals()
  this.getAllBrands()
}
getAllrentals() {
  this.rentalService.getAllRentals().subscribe({
    next:(data)=>
    {
      this.recentRentedCars = data.data
      console.log(this.recentRentedCars)
    }
  })
}
getAllBrands()
{
  this.brandService.getAllBrands().subscribe({
    next:(data)=>
    {
      this.brands = data.data


    }
  })
}
}
