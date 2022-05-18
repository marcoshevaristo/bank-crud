import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit {
  @Input()
  public control: FormControl;
  @Input()
  public mask: string;
  @Input()
  public label: string;
  @Input()
  public style: string;
  @Input()
  public currency: boolean;
  @Output()
  public onBlur = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
