import { Component, OnInit,OnDestroy } from '@angular/core';
import { UnServiceService } from '../un-service.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-un',
  templateUrl: './un.component.html',
  styleUrls: ['./un.component.css']
})
export class UnComponent implements OnInit {

    messages: Subscription;

  constructor(private service:UnServiceService) { }

  ngOnInit() {
      this.messages = this.service.messages.subscribe(
          message => {
              //on consomme le message
          }
      )
  }

  ngOnDestroy(){
      this.messages.unsubscribe();
  }

}
