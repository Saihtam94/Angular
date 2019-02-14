import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { UnServiceService } from '../un-service.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  lat: number;
  lng: number;
  zoom:4;
  waypoints: waypoint[] = []// retains the list of waypoints
  messages: Subscription;
  constructor(private http: HttpClient, private service:UnServiceService) { }

  ngOnInit() {
      this.http.get('./assets/chapters.json', {responseType:'json'}).subscribe(data => {
          data['Waypoints'].map(
              waypoint => this.waypoints.push({
                  lat: Number(waypoint.lat),
                  lng: Number(waypoint.lng),
                  label: String(waypoint.label),
                  timestamp: Number(waypoint.timestamp)
              })
          )
          this.lat = this.waypoints[0].lat;
          this.lng = this.waypoints[0].lng;
      });
      this.messages = this.service.messages.subscribe(message => {
          //console.log(message)
      });
  }

}

interface waypoint {
    lat: number;
    lng: number;
    label: string;
    timestamp: number;
}
