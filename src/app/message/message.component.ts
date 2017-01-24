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

    public all: string = "";

    constructor(private messageService: MessageService) {
    }

    public get messages(): Array<messages> {
        return this.messageService.messages;
    }

    ngOnInit() {
        this.messageService
            .findAll(this.all)
    }

    search(): void {
        this.messageService
            .findAll(this.all)
    }
}
