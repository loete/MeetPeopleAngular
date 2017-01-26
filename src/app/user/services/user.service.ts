
import {Injectable, Inject} from "@angular/core";
import {User} from "../../entities/users";
import {BASE_URL} from "../../app.token";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Categories} from "../../entities/categories";

@Injectable()
    export class UserService {

    users: Array<Categories> = [];
    allUsers: Array<Categories> = [];
    suffix: string = 'categorieses';

    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private http: Http)
    {
    }

    public find(categoryName: string) {

        this.users = [];

        let url = this.baseUrl+this.suffix;

        let search = new URLSearchParams();
        search.set('categoryName', categoryName);

        let headers = new Headers();
        headers.set('Accept', 'application/json')

        this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (users) => {
                    this.users = users._embedded.categorieses;
                },
                (err) => {
                    console.error('Fehler beim Laden', err)
                }
            )
    }

    public findAll(categoryName: string) {

        let url = this.baseUrl+this.suffix;

        let search = new URLSearchParams();
        search.set('categoryName', categoryName);

        let headers = new Headers();
        headers.set('Accept', 'application/json')

        return this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (allUsers) => {
                    this.allUsers = allUsers._embedded.categorieses;
                },
                (err) => {
                    console.error('Fehler beim Laden', err)
                }
            )
    }
}
