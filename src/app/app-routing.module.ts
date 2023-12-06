import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsideComponent } from './clientside/clientside.component';
import { AdminComponent } from './admin/admin.component';
import { AdminItemsComponent } from './admin-items/admin-items.component';
import { BuycomponentComponent } from './buycomponent/buycomponent.component';

const routes: Routes = [{path:'',component:ClientsideComponent},{path:'admin',component:AdminComponent},{path:'buy',component:BuycomponentComponent},{path:'adminlogin',component:AdminItemsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
