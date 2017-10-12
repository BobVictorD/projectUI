import { IData } from './IData';
import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-listGroup',
  templateUrl: './listGroup.component.html'
})
// tslint:disable-next-line:component-class-suffix
export class ListGroupComponent implements ControlValueAccessor {

  private data: Array<IData>;
  private selectedObject: Object;

  onChange = (_) => {};
  onTouched = () => {};

  onSelect(event: any) {

  }

  /*implementation NgModel on component ***********************************/
  writeValue(array: Array<any>): void {
    this.data = array.map(obj => {
      return <IData>{label: obj.libelle, value: obj};
    });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  /*End********************************************************************/
}

