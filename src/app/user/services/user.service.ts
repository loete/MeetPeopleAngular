
import {Injectable, Inject} from "@angular/core";
import {users} from "../../entities/users";
import {BASE_URL} from "../../app.token";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {categories} from "../../entities/categories";
import {Observable} from "rxjs";

@Injectable()
    export class UserService {

    users: Array<categories> = [];
    suffix: string = 'categorieses';

    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private http: Http)
    {
    }

    public find(categoryName: string) {

        let url = this.baseUrl+this.suffix;

        let search = new URLSearchParams();
        search.set('categoryName', categoryName);

        let headers = new Headers();
        headers.set('Accept', 'application/json')//headers.set('Authorization',"");

        let test = this.http
            .get(url, {headers, search})
            .map(resp => resp.json())
        console.log('bin drinnen im find');
        console.log(test);
        return this
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
}
