import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    @Input() products: Product[];
    @Input() selectedProduct: Product;
    @Output() selectProductRequested = new EventEmitter<Product>();

    selectProduct(p: Product) {
        this.selectProductRequested.emit(p);
    }
    constructor() { }

    ngOnInit() {
    }

}
