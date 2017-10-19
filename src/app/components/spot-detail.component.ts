import { Spot } from '../../Model/Spot';
import { SpotService } from '../services/modelService/spot.service';
import { Component, OnInit, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SpotDetailComponent),
  multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-spotDetail',
  templateUrl: './spot-detail.component.html',
  providers : [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
// tslint:disable-next-line:component-class-suffix
export class SpotDetailComponent implements ControlValueAccessor {

  model: Spot;
  @Input() disabled: Boolean = false;
  @Input() editable: Boolean = false;
  @Input() deleted: Boolean = false;
  @Output() isDelete: EventEmitter<null> = new EventEmitter();

  writeValue(obj: Spot): void {
    if (obj != null) {
      this.model = obj;
    } else {
      this.model = new Spot();
      this.onChange(this.model);
    }
  }

  onChange = (_) => {};
  onTouched = () => {};

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {
  }

  constructor(private spotService: SpotService) {

  }

  edit() {
    this.disabled = false;
  }

  save() {
    this.disabled = true;
    this.spotService.update(this.model).subscribe();
  }

  delete() {
    this.isDelete.emit(null);
  }
}
