import {Component, Input} from "@angular/core";
import {Messages} from "../entities/messages";

@Component({
  templateUrl: './message-card.component.html',
  selector: 'message-card'
})

export class MessageCardComponent {

  @Input() item: Messages;

}
