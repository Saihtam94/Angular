import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import { UnServiceService } from '../un-service.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChaptersComponent implements OnInit {

  chapters:JSON
  @Output() onChapter = new EventEmitter<number>()
  messages: Subscription;

  constructor(private http: HttpClient, private service:UnServiceService) { }

  ngOnInit() {
      this.http.get('./assets/chapters.json', {responseType:'json'}).subscribe(data => {
          this.chapters = data['Chapters'];
      });
      this.messages = this.service.messages.subscribe(message => {
          //on consomme le message
      });
  }

  onSelect(chapter){
      this.service.post(parseInt(chapter.pos))
  }

}
