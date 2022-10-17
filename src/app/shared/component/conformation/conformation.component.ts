import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.scss']
})
export class ConformationComponent implements OnInit {

  @Input() name! : string;

  @Output() public confirm: EventEmitter<boolean>;

  @Output() public cancle: EventEmitter<boolean>;

  constructor() {
    this.confirm = new EventEmitter();
    this.cancle = new EventEmitter();
   }

  ngOnInit(): void {
  }

  public confirmData(): void{
    this.confirm.emit(true)
  }

  public cancleData(): void{
     this.cancle.emit(true)
  }
}
