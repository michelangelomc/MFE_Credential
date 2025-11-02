import { NgModule } from "@angular/core";
import { BottonsLoginComponent } from "./bottons-login/bottons-login.component";
import { CredentialErrorComponent } from "./credential-error/credential-error.component";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: 
  [
    BottonsLoginComponent,
    CredentialErrorComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [],
  exports: [
    BottonsLoginComponent,
    CredentialErrorComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class CredentialModule {

}