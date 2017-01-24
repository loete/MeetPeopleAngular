
import {Injectable, Inject} from "@angular/core";
import {users} from "../../entities/users";
import {BASE_URL} from "../../app.token";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {categories} from "../../entities/categories";
import {Observable} from "rxjs";

@Injectable()
    export class UserService {

    users: Array<categories> = [];

    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private http: Http)
    {

    }

    public find(category: string): void {

        let url = this.baseUrl;

        let search = new URLSearchParams();
        search.set('category', category);

        let headers = new Headers();
        headers.set('Accept', 'application/json');
        headers.set('Authorization',"");


        this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (users) => {
                    this.users = users;
                },
                (err) => {
                    console.error('Fehler beim Laden', err)
                }
            );
    }
}
