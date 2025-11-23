import { Directive, Host, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appChangeButtonColor]',
    standalone: false,
})
export class ChangeButtonColorDirective {
    @Input() appChangeButtonColor: string = '';
    @HostBinding('style.background-image') bgColor: string = '';

    @HostListener('mouseover') onOver(): void {
        this.bgColor = 'linear-gradient(180deg, #062853b2, #062853b2)';
    }

    @HostListener('mouseleave') onLeave(): void {
        this.bgColor = 'linear-gradient(180deg, #1e88e5, #1565c0)';    }
}