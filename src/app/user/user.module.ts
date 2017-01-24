
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {UserComponent} from "./user.component";
import {UserService} from "./services/user.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
      //  ShareModule
    ],
    declarations: [
        UserComponent,
       // UserEditComponent
    ],
    providers: [
        UserService
    ]
})

export class UserModule {

}