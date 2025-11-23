import { NgModule } from "@angular/core";
import { ChangeButtonColorDirective } from "./change-button-color.directive";

@NgModule({
    declarations: [
        ChangeButtonColorDirective
    ],
    exports: [
        ChangeButtonColorDirective
    ]
})
export class DirectiveModule { }