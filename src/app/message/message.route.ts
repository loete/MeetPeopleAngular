import {RouterModule, Routes} from "@angular/router";
import {MessageComponent} from "./message.component";
import {MessageEditComponent} from "./message-edit.component";
import {MessageDetailComponent} from "./message-detail.component";

const MESSAGE_ROUTES: Routes = [
  {
    path: 'message',
    component: MessageComponent
  },
  {
    path: 'message-edit/:user_id',
    component: MessageEditComponent
  },
    {
        path: 'message-detail/:user_id',
        component: MessageDetailComponent
    }
];

export const MessageRouterModule = RouterModule.forChild(MESSAGE_ROUTES);
