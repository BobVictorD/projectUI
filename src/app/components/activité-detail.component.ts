import { ActiviteService } from '../services/modelService/activite.service';
import { Activite } from '../../Model/Activite';
import { FaireService } from '../services/modelService/faire.service';
import { Faire } from '../../Model/Faire';
import { Component, OnInit, forwardRef, Input, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ActiviteDetailComponent),
  multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-activiteDetail',
  templateUrl: './activite-detail.component.html',
  providers : [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
// tslint:disable-next-line:component-class-suffix
export class ActiviteDetailComponent implements ControlValueAccessor {

  model: Faire;
  @Input() disabled: Boolean = false;
  @Input() editable: Boolean = false;
  @Input() deleted: Boolean = false;
  @Output() isDelete: EventEmitter<null> = new EventEmitter();
  @Output() update: EventEmitter<null> = new EventEmitter();

  allActivity: Array<SelectItem> = [];

  writeValue(obj: Faire): void {
    if (obj != null) {
      this.model = obj;
    } else {
      this.model = new Faire();
      this.onChange(this.model);
    }
  }

  onChange = (_) => {};
  onTouched = () => {};

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState?(isDisabled: boolean): void {
  }

  constructor(private spotService: FaireService,
            private activiteService: ActiviteService) {
        this.activiteService.getAll().subscribe(p => {
            p.forEach(item => {
                this.allActivity.push({label: item.libelle.toString(), value: item});
            });
            });
    }

  edit() {
    this.disabled = false;
  }

  save() {
    this.disabled = true;
    this.update.emit(null);
  }

  delete() {
    this.isDelete.emit(null);
  }
}
