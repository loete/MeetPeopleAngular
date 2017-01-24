
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MessageComponent} from "./message.component";
import {MessageService} from "./services/message.service";
import {MessageDetailComponent} from "./message-detail.component";
import {MessageRouterModule} from "./message.route";
import {MessageEditComponent} from "./message-edit.component";
import {MessageCardComponent} from "./message-card.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MessageRouterModule
        //  ShareModule
    ],
    declarations: [
        MessageComponent,
        MessageDetailComponent,
        MessageEditComponent,
        MessageCardComponent
    ],
    providers: [
        MessageService
    ]
})

export class MessageModule {

}