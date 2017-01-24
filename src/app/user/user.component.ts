import {Component} from '@angular/core';
import {UserService} from "./services/user.service";
import {categories} from "../entities/categories";



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

     public get users(): Array<categories> {
        return this.userService.users;
     }

    search(): void {
        this.userService
            .find(this.category)
    }
}
