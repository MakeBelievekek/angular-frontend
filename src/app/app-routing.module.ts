import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NettoFeeComponent } from './components/netto-fee/netto-fee.component';


const routes: Routes = [
  {path: 'nettoFee', component: NettoFeeComponent},
  {path: '', redirectTo: 'nettoFee', pathMatch: 'full'},
  {path: '**', component: NettoFeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
