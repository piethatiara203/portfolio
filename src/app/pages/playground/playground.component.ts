import { Component } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent {
  title = 'ng-batch-four';

  name = 'Pietha';
  age = 20;
  status = false;

  showData = false;

  nomor = 1;

  person = {
    title: 'Test A',
    name: 'jeff',
    age: 0,
    status: true,
  };

  personList = [
    {
      title: 'Test A',
      name: 'Jeff',
      age: 4,
      status: true,
    },
    {
      title: 'Test B',
      name: 'Kylo',
      age: 2,
      status: true,
    },
  ];

  datas = [1, 2, 3];
  // datas = new Array(10); //array kosong, ga ada valuenya

  constructor() {
    this.name = 'Robocop';
  }

  onCallBack(ev: any) {
    console.log(ev);
    this.personList.push(ev.data);
  }
}
