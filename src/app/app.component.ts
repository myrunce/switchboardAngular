import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  off: boolean = true
  on: boolean = false
  temp: boolean;
  power: string = "Off";
  switch(index){
    this.switches[index].temp = this.switches[index].on;
    this.switches[index].on = this.switches[index].off;
    this.switches[index].off = this.switches[index].temp;
    if (this.switches[index].off === true){
      this.switches[index].power = "Off";
    }
    else{
      this.switches[index].power = "On";
    }
  }
  switches: any[] = [{on: false, off: true, temp: '', power: "Off"}, {on: false, off: true, temp: '', power: "Off"}, {on: false, off: true, temp: '', power: "Off"}, 
    {on: false, off: true, temp: '', power: "Off"}, {on: false, off: true, temp: '', power: "Off"}, {on: false, off: true, temp: '', power: "Off"}, {on: false, off: true, temp: '', power: "Off"}, 
    {on: false, off: true, temp: '', power: "Off"}, {on: false, off: true, temp: '', power: "Off"}, {on: false, off: true, temp: '', power: "Off"}];
}
