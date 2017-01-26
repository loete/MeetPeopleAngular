import {Component, OnInit} from '@angular/core';
import {MessageService} from "./services/message.service";
import {Messages} from "../entities/messages";
import {User} from "../entities/users";



@Component({
    selector: 'message',
   // styleUrls: ['./message.component.css'],
    templateUrl: './message.component.html',
    providers: [ ]
})

export class MessageComponent implements OnInit{

    public title: string;
    public selectedMessage: Messages;

    constructor(private messageService: MessageService) {
    }

    public get messages(): Array<Messages> {
        return this.messageService.messages;
    }

    public get users(): Array<User> {
        return this.messageService.correspondingUsers;
    }

    ngOnInit(): void {
       this.messageService.findByTitle("");
    }

    search(): void {
        this.messageService
            .findByTitle(this.title)
    }

    select(message: Messages): void {
        this.selectedMessage = message;
    }
}
