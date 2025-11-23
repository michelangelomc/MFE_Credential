import { NgModule } from "@angular/core";
import { BottonsLoginComponent } from "./bottons-login/bottons-login.component";
import { CredentialErrorComponent } from "./credential-error/credential-error.component";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { DirectiveModule } from "../wrapper/directivas/directive.molule";
import { MaterialModule } from "../wrapper/angular-material/material.module";

@NgModule({
  declarations: [
    BottonsLoginComponent,
    CredentialErrorComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    DirectiveModule,
    MaterialModule
  ],
  exports: [
    BottonsLoginComponent,
    CredentialErrorComponent,
    LoginComponent,
    LogoutComponent,
  ],
})
export class CredentialModule {}