import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
    providedIn: 'root'
})
export class UnServiceService {

    private channelVideo = new Subject<number>();
    messages = this.channelVideo.asObservable();

    private channelMap = new Subject<number>();

    constructor() { }

    postToVideo(message:number) {
        this.channelVideo.next(message)
    }
    postToMap(message:number) {
        this.channelMap.next(message)
    }
}
