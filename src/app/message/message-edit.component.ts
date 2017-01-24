import {Component} from "@angular/core";
import {MessageService} from "./services/message.service";
import {ActivatedRoute} from "@angular/router";
import {messages} from "../entities/messages";

@Component({
  templateUrl: './message-edit.component.html',
  selector: 'message-edit'
})

export class MessageEditComponent {
  id: string;

  constructor(private messageService: MessageService, route: ActivatedRoute) {
    route.params.subscribe(
      p => {
        this.id = p['id'];
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
          this.msg = "Fehler beim Laden: "+ err.text();
        }
      )
  }

  save(): void {
    this
      .messageService
      .save(this.message)
      .subscribe(
        message => {
          this.message = message;
          this.msg = "";
        },
        (err) => {
          this.msg = "Fehler beim Speichern: "+ err.text();
        }
      )
  }
}
