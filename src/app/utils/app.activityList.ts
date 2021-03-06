// app.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Activite } from '../../Model/Activite';
/*class MyActivity {
  id: number;
  name: string;
}
const ACTIVITIES: MyActivity[] = [
  { id: 11, name: 'Roller' },
  { id: 12, name: 'Voile' },
  { id: 13, name: 'Surf' },
  { id: 14, name: 'Marche à pied' },
  { id: 15, name: 'Cross' },
  { id: 16, name: 'VTT' }
];*/
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'activityList',
  template: `
    <div class="app">
      <table class="activities">
        <tr><td><ul>
          <li *ngFor="let activity of activities" [class.selected]="activity === selectedActivity" (click)="onSelect(activity)">
            {{activity.libelle}}
          </li></ul></td>
          <td>
            Details de l'activité.
            <br>
            <!--{{selectedActivity.libelle}}-->
          </td>
        </tr>
      </table>
    </div>
  `
})

export class activityList implements OnInit {
  message: String = 'Hello world!';
  @Input() activities: Activite[];
  selectedActivity: Activite;

  onSelect(act: Activite): void {
    this.selectedActivity = act;
  }

  ngOnInit() {
    console.log('ngOnInit :' + this.activities);
  }
}
