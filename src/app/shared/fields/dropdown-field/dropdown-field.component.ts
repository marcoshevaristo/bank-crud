import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownItem } from 'src/app/models/dropdown-item.model';

@Component({
  selector: 'app-dropdown-field',
  templateUrl: './dropdown-field.component.html',
  styleUrls: ['./dropdown-field.component.scss'],
})
export class DropdownFieldComponent implements OnInit {
  @Input()
  public control: FormControl;
  @Input()
  public label: string;
  @Input()
  public style: string;
  @Input()
  public options: DropdownItem[];

  constructor() {}

  ngOnInit(): void {}
}
