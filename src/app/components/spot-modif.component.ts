import { Spot } from '../../Model/Spot';
import { SpotService } from '../services/modelService/spot.service';
import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SpotModifComponent),
  multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-spotModif',
  templateUrl: './spot-modif.component.html',
  providers : [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
// tslint:disable-next-line:component-class-suffix
export class SpotModifComponent implements OnInit, ControlValueAccessor {

  availableSpot: Array<Spot> = [];
  selectedSpot: Array<Spot> = [];


  writeValue(obj: Array<Spot>): void {
    if (obj != null) {
      this.selectedSpot = obj;
    } else {
      this.selectedSpot = [];
      this.onChange(this.selectedSpot);
    }
    this.majAvaibleSpot();
  }

  onChange = (_) => {};
  onTouched = () => {};

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {
  }


  constructor(private spotService: SpotService) {

  }

  ngOnInit(): void {
    this.spotService.getAll().subscribe(p => {
      this.availableSpot = p;
    });
  }

  majAvaibleSpot() {
    this.availableSpot = this.availableSpot.filter(p => !this.selectedSpot.includes(p));
  }

}
