import {Component,OnInit} from '@angular/core';
import {UserService} from "./services/user.service";
import {Categories} from "../entities/categories";



@Component({
    selector: 'user',
    styleUrls: ['./user.component.css'],
    templateUrl: './user.component.html',
    providers: [ ]
})

export class UserComponent implements OnInit{

    public category: string;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
      this.userService.findAll(this.category);
    }

    public get users(): Array<Categories> {
     return this.userService.users;
     }

    public get allUsers(): Array<Categories> {
        return this.userService.allUsers;
    }

    search(): void {
        this.userService
            .find(this.category);
    }
}
