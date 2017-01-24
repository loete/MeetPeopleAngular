
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageComponent} from "./message.component";
import {MessageService} from "./services/message.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        //  ShareModule
    ],
    declarations: [
        MessageComponent,
        // MessageEditComponent
    ],
    providers: [
        MessageService
    ]
})

export class MessageModule {

}