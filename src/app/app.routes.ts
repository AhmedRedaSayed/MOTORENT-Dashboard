import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CarsComponent } from './Components/dashboard/cars/cars.component';
import { UsersComponent } from './Components/dashboard/users/users.component';
import { authGuard } from './Guard/auth.guard';
import { InboxComponent } from './Components/dashboard/inbox/inbox.component';
import { TransactionDetailsComponent } from './Components/transaction-details/transaction-details.component';
import { AllRecentTransactionComponent } from './Components/all-recent-transaction/all-recent-transaction.component';
import { CarsLayoutComponent } from './Components/cars-layout/cars-layout.component';
import { UserLayoutComponent } from './Components/user-layout/user-layout.component';
import { reverseGuard } from './Guard/reverse.guard';
import { CarDetailsComponent } from './Components/car-details/car-details.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';

export const routes: Routes = [
  {path:'',canActivate:[reverseGuard],component:LoginComponent},
  {path:'dashboard', canActivate:[authGuard], component:DashboardComponent,children:[
   {path:'user',component:UsersComponent},
    {path:'',component:AllRecentTransactionComponent},
    {path:'transactionDetails/:id',component:TransactionDetailsComponent},
    {path:'inbox',component:InboxComponent},

  ]},
  {path:'carsLayout', canActivate:[authGuard], component:CarsLayoutComponent,children:[
  {path:"",component:CarsComponent},
  {path:"carDetails/:id",component:CarDetailsComponent}
  ]},
  {path:'userLayout', canActivate:[authGuard], component:UserLayoutComponent,children:[
  {path:"",component:UsersComponent},
  {path:'userDetails/:id',component:UserDetailsComponent},

  ]}

];
