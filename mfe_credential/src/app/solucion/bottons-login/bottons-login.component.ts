import { Component } from '@angular/core';
import { DirectiveModule } from '../../wrapper/directivas/directive.molule';

@Component({
  selector: 'app-bottons-login',
  standalone: false,
  templateUrl: './bottons-login.component.html',
  styleUrl: './bottons-login.component.scss'
})
export class BottonsLoginComponent {
  textBtnLogin: string = 'Login';
  textBtnNew: string = 'Novo';
}
