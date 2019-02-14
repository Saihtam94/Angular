import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UnServiceService } from '../un-service.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  url_mp4 = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream_512kb.mp4"
  url_ogg = "https://archive.org/download/Route_66_-_an_American_badDream/Route_66_-_an_American_badDream.ogv"
  time = 0;
  messages: Subscription;
  constructor(private service:UnServiceService) { }
/*
  onTimeUpdate(player) {
      console.log(player.currentTime)
  }
  */
  ngOnInit() {
      this.messages = this.service.messages.subscribe(message => {
          this.time = message
      });

  }
/*
  onChapterChange(pos:number) {
      this.time = pos;
  }
  */

}
