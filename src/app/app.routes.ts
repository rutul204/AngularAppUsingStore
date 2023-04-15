import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
    { path: 'home', component: WelcomePageComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}