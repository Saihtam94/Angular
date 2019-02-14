import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})
export class UnServiceService {

    private channel = new Subject<number>();
    messages = this.channel.asObservable();

    constructor() { }

    post(message:number) {
        this.channel.next(message)
    }
}
