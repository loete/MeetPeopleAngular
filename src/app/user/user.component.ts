import {Component} from '@angular/core';
import {UserService} from "./services/user.service";


@Component({
    selector: 'user',
    styleUrls: ['./user.component.css'],
    templateUrl: './user.component.html',
    providers: [ ]
})

export class UserComponent {

    public category: string;

    constructor(private userService: UserService) {
    }

    search(): void {
        this.userService
            .find(this.category)
    }
}