import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CredentialModule } from './solucion/credential.module';
import { MaterialModule } from './wrapper/angular-material/material.module';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CredentialModule,
    MaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Credenciais de Usuário';
}
