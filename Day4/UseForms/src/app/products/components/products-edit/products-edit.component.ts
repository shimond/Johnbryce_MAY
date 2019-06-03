import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, ControlValueAccessor } from '@angular/forms';
import { filter, debounceTime } from 'rxjs/operators';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
    selector: 'app-products-edit',
    templateUrl: './products-edit.component.html',
    styleUrls: ['./products-edit.component.scss']
})
export class ProductsEditComponent implements OnInit, OnChanges, ControlValueAccessor {

    productForm: FormGroup;
    @Input() product: Product;
    @Output() productSaveRequested = new EventEmitter<Product>();
    stringKey = 'aaa';
    constructor(private formBuilder: FormBuilder) {

    }


    ngOnInit() {
    }

    onSave() {
        this.product = this.productForm.value;
        this.productSaveRequested.emit(this.product);
    }

    myCustomValidationField(control: AbstractControl): ValidationErrors | null {
        const str: string = control.value;
        if (str.indexOf(this.stringKey) !== -1) {
            // hakol sababa!
            return null;
        }
        return {
            includeAAA: { yourString: str }
        };

    }
    myCustomValidationGroup(group: FormGroup): ValidationErrors | null {
        const current: Product = group.value;
        if (current.price > 100 && current.name[0] === 'B') {
            return { formPriceName: { price: current.price, name: current.name } };
        }

        return null;

    }
    setForm(p: Product) {
        this.productForm = this.formBuilder.group(
            {
                // [defaultValue, Validators]
                id: [p.id],
                name: [p.name, Validators.compose([Validators.required,
                (controlToValidate) => this.myCustomValidationField(controlToValidate)])],
                imgUrl: [p.imgUrl],
                price: [p.price, Validators.compose([Validators.min(0), Validators.max(1000)])],
            }, { updateOn: 'change', validators: [this.myCustomValidationGroup] }
        );
        //Auto save :
        // this.productForm.valueChanges.pipe(
        //     filter(o => this.productForm.valid),
        //     debounceTime(100)).subscribe(value => {
        //         this.onSave();

        //     });
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.product) {
            this.setForm(this.product);
        } else {
            this.setForm({ id: null, name: '', price: null, imgUrl: '' });
        }
    }

}
