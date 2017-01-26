import {Component, OnInit} from '@angular/core';
import {MessageService} from "./services/message.service";
import {messages} from "../entities/messages";
import {users} from "../entities/users";



@Component({
    selector: 'message',
   // styleUrls: ['./message.component.css'],
    templateUrl: './message.component.html',
    providers: [ ]
})

export class MessageComponent implements OnInit{

    public title: string;
    public selectedMessage: messages;

    constructor(private messageService: MessageService) {
    }

    public get messages(): Array<messages> {
        return this.messageService.messages;
    }

    public get users(): Array<users> {
        return this.messageService.correspondingUsers;
    }

    ngOnInit(): void {
       this.messageService.findByTitle("");
    }

    search(): void {
        this.messageService
            .findByTitle(this.title)
    }

    select(message: messages): void {
        this.selectedMessage = message;
    }
}
