import {Component, OnInit} from '@angular/core';
import {MessageService} from "./services/message.service";
import {messages} from "../entities/messages";



@Component({
    selector: 'message',
   // styleUrls: ['./message.component.css'],
    templateUrl: './message.component.html',
    providers: [ ]
})

export class MessageComponent implements OnInit{

    public message: string;
    public selectedMessage: messages;

    constructor(private messageService: MessageService) {
    }

    public get messages(): Array<messages> {
        return this.messageService.messages;
    }

    ngOnInit(): void {
       // this.messageService.findAll(this.message);

    }

    search(): void {
        this.messageService
            .findByTitle(this.message)
    }

    select(message: messages): void {
        this.selectedMessage = message;
    }
}
