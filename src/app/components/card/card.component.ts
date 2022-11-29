import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = 'ng-batch-four';
  @Input() name = 'Astrid';
  @Input() age = 26;
  @Input() status = true;

  @Output() dataCallBack = new EventEmitter();

  doClick() {
    this.dataCallBack.emit({
      data: { name: this.name, age: this.age, status: this.status },
    });
  }
}
