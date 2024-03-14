import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../Serivces/rental.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-transaction-details',
  standalone: true,
  imports: [CurrencyPipe,DatePipe],
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.css'
})
export class TransactionDetailsComponent implements OnInit {
  rentalDetails:any
  rentId:any;
  constructor(private rentalSerivce:RentalService,private _ActivatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.getId()
    this.getRentalDetails()
  }

  getId()
{
  this._ActivatedRoute.paramMap.subscribe((params)=>
  {
    this.rentId = params.get('id')
  })
}
getRentalDetails()
{
  this.rentalSerivce.getRentalById(this.rentId).subscribe({
    next:(data)=>
    {
      this.rentalDetails = data.data
      console.log(data)
    }
  })
}

}
