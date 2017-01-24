import {Component} from '@angular/core';
import {MessageService} from "./services/message.service";
import {messages} from "../entities/messages";
import {ActivatedRoute} from "@angular/router";



@Component({
    selector: 'message-detail',
    // styleUrls: ['./message-detail.component.css'],
    templateUrl: './message-detail.component.html',
    providers: [ ]
})

export class MessageDetailComponent{
    id: string;
    showDetails: string;

    constructor(
        private messageService: MessageService,
        route: ActivatedRoute) {

        route.params.subscribe(
            m => {
                this.id = m['id'];
                this.showDetails = m['showDetails'];
                this.load(this.id);
            }
        )

    }

    message: messages;
    msg: string;

    load(id: string): void {
        this
            .messageService
            .findById(id)
            .subscribe(
                message => {
                    this.message = message;
                    this.msg = "";
                },
                (err) => {
                    this.msg = "Fehler beim Speichern: " + err.text();
                }
            )
    }

}

