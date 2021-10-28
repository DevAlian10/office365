import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent } from './pages/finish/finish.component';
import { LoginComponent } from './pages/login/login.component';
import { OfficeComponent } from './pages/office/office.component';

const routes: Routes = [
    {
        path: '', component: OfficeComponent, pathMatch: 'full'
    },
    {
        path: 'office', component: OfficeComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'success', component: FinishComponent
    },
    {
        path: '**', redirectTo: 'office'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
