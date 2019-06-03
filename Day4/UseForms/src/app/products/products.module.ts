import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsHomeComponent } from './components/products-home/products-home.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProductListComponent, ProductsHomeComponent, ProductsEditComponent],
    exports: [ProductsHomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule { }
