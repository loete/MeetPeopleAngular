import {Injectable, Inject} from "@angular/core";
import {BASE_URL} from "../../app.token";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {messages} from "../../entities/messages";
import {Observable} from "rxjs";

@Injectable()
export class MessageService {

    messages: Array<messages> = [];
    suffix: string = 'messageses';

    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private http: Http)
    {
    }

    public findById(id:string): Observable<messages> {

      let url = this.baseUrl+this.suffix;

      let search = new URLSearchParams();
      search.set('id', id);

      let headers = new Headers();
      headers.set('Accept','application/json');

      return this
        .http
        .get(url, {headers, search})
        .map(resp => resp.json())
    }

    public save(message:messages): Observable<messages> {

      let url = this.baseUrl+this.suffix;

      let headers = new Headers();
      headers.set('Accept', 'application/json');

      return this
        .http
        .post(url, message,{headers})
        .map(resp => resp.json())
    }

    public findAll(id: string) {

        let url = this.baseUrl+this.suffix;

        let search = new URLSearchParams();
        search.set('id', id);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (messages) => {
                    this.messages = messages._embedded.messages;
                },
                (err) => {
                    console.error('Fehler beim Laden', err)
                }
            )
    }

    public findByTitle(title: string) {

        let url = this.baseUrl+this.suffix;

        let search = new URLSearchParams();
        search.set('title', title);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this
            .http
            .get(url, {headers, search})
            .map(resp => resp.json())
            .subscribe(
                (messages) => {
                    this.messages = messages._embedded.messageses;
                },
                (err) => {
                    console.error('Fehler beim Laden', err)
                }
            )
    }
}
