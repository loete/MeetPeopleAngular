import {Injectable, Inject} from "@angular/core";
import {BASE_URL} from "../../app.token";
import {Http, URLSearchParams, Headers} from "@angular/http";
import {Messages} from "../../entities/messages";
import {Observable} from "rxjs";
import {User} from "../../entities/users";

@Injectable()
export class MessageService {

    messages: Array<Messages> = [];
    correspondingUsers: Array<User> = [];

    suffix: string = 'messageses';

    constructor(
        @Inject(BASE_URL) private baseUrl: string,
        private http: Http)
    {
    }

    public findById(id:string): Observable<Messages> {

      let url = this.baseUrl+this.suffix+"/"+id

      let search = new URLSearchParams();
      search.set('id', id);

      let headers = new Headers();
      headers.set('Accept','application/json');

      return this
        .http
        .get(url, {headers, search})
        .map(resp => resp.json())
    }

    public save(message:Messages): Observable<Messages> {

      let url = this.baseUrl+this.suffix;

      let headers = new Headers();
      headers.set('Accept', 'application/json');

      return this
        .http
        .put(url, message,{headers})
        .map(resp => resp.json())
    }

    public findByTitle(title: string) {

        let url = this.baseUrl+this.suffix

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
                    this.messages = messages._embedded.messageses; //get all Messages
                    this.messages.reverse() //latest data first
                    for(let m of this.messages) {
                      if (title == m.title) { // get only those, where searched title is appropriate
                        this.messages = [];
                        this.messages.push(m)
                      }
                      for(let m of this.messages) {
                        this.correspondingUsers = [];
                        this.http.get(this.baseUrl+this.suffix+'/'+m.id, {headers}).map(resp => resp.json())
                          .subscribe((users) => {
                            this.correspondingUsers = users; }//get corresponding user data
                            //this.correspondingUsers.reverse()                           }
                          )
                      }
                    }
                },
                (err) => {
                    console.error('Fehler beim Laden', err)
                }
            )
    }
}
