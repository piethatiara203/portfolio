import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-calculate-gasoline',
  templateUrl: './calculate-gasoline.component.html',
  styleUrls: ['./calculate-gasoline.component.scss'],
})
export class CalculateGasolineComponent {
  testClass = 'alert alert-success';

  // constructor(private dataService: DataService) {
  //   this.harga = this.dataService.baseHarga;
  // }

  @Input() jumlahLiter = 0;
  @Input() jumlahBayar = 0;

  @Output() dataCallBack = new EventEmitter();

  kembalian = 0;
  name = '';
  harga = 0;

  hitung() {
    if (this.harga === 10000) {
      this.testClass = 'alert alert-success';
    } else {
      this.testClass = 'alert alert-danger';
    }
  }

  doClick(bensin: any) {
    this.name = bensin;
    if (bensin == 'Pertamax') {
      this.harga = 10000;
      this.name = 'Pertamax';
      this.hitung();
    } else if (bensin == 'Pertalite') {
      this.harga = 12000;
      this.name = 'Pertalite';
      this.hitung();
    } else if (bensin == 'Solar') {
      this.harga = 16000;
      this.name = 'Solar';
      this.hitung();
    } else {
      this.harga = 20000;
      this.name = 'Pertamax Plus';
      this.hitung();
    }
  }

  doHitung() {
    if (this.name == 'Pertamax') {
      this.kembalian = this.jumlahBayar - this.jumlahLiter * this.harga;
    } else if (this.name == 'Pertalite') {
      this.kembalian = this.jumlahBayar - this.jumlahLiter * this.harga;
    } else if (this.name == 'Solar') {
      this.kembalian = this.jumlahBayar - this.jumlahLiter * this.harga;
    } else {
      this.kembalian = this.jumlahBayar - this.jumlahLiter * this.harga;
    }
  }
}
