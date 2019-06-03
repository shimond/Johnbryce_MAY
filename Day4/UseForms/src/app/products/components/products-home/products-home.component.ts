import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { map } from 'rxjs/operators';
@Component({
    selector: 'app-products-home',
    templateUrl: './products-home.component.html',
    styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit {

    productsFromHomeComponent: Product[] = [];
    selectedProduct: Product;

    constructor(private productservice: ProductsService) {


    }

    ngOnInit() {
        this.refresh();
    }

    async refresh() {
        // this.productservice.getAll().subscribe(result => {
        //     this.productsFromHomeComponent = result;
        // });
        this.productsFromHomeComponent = await this.productservice.getAll().toPromise();
    }

    setSelectedProduct(p: Product) {
        this.selectedProduct = p;
    }

    async deleteProduct() {
        await this.productservice.delete(this.selectedProduct.id);
        this.selectedProduct = null;
        this.refresh();
    }

    async saveProduct(p: Product) {
        // this.productservice.update(p).subscribe(productFromServerAfterUpdate => {
        //     this.refresh();
        // }, error => {
        //     alert('Error');
        // });

        try {
            const productFromServerAfterUpdate: Product = await this.productservice.update(p);
            this.refresh();
        } catch (error) {
            alert('Error');
        }
    }

    async addProduct(p: Product) {
        try {
            const newProductFromServer: Product = await this.productservice.addNew(p);
            this.refresh();
        } catch (error) {
            alert('Error');
        }


    }


}
