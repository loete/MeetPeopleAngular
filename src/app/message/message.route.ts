import {RouterModule, Routes} from "@angular/router";
import {MessageComponent} from "./message.component";
import {MessageEditComponent} from "./message-edit.component";

const MESSAGE_ROUTES: Routes = [
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'message-edit/:id',
    component: MessageEditComponent
  }
];

export const MessageRouterModule = RouterModule.forChild(MESSAGE_ROUTES);
