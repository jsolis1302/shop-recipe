import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
    declarations:[
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        DropdownDirective
    ],
    imports: [CommonModule],
    exports: [
        LoadingSpinnerComponent,
        PlaceholderDirective,
        AlertComponent,
        DropdownDirective,
        CommonModule
    ],
    entryComponents:[AlertComponent]
})
export class SharedModule{}