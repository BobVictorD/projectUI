import { Niveau } from '../../Model/Niveau';
import { Component, OnInit, Provider, forwardRef, Input, } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NiveauComponent),
    multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-niveau',
  templateUrl: './niveau.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
// tslint:disable-next-line:component-class-suffix
export class NiveauComponent implements ControlValueAccessor {
    @Input() disabled: Boolean = false;
    temperatureRange: number[];
    ventRange: number[];
    vagueRange: number[];

    private niveau: Niveau = new Niveau();

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    writeValue(obj: Niveau): void {
        if (obj == null) {
            this.niveau = this.createNiveau();
            this.onChange(this.niveau);
        }else {
            this.niveau = obj;
        }
        this.niveauToComp();
    }

    setDisabledState?(isDisabled: boolean): void {
    }


    sliderChange() {
        this.compToNiveau();
        this.onChange(this.niveau);
    }

    createNiveau(): Niveau {
        // tslint:disable-next-line:prefer-const
        let niv = new Niveau();
        niv.precipitation = 0;
        niv.tempMax = 40;
        niv.tempsMin = -5;
        niv.vagueMax = 5;
        niv.vagueMin = 0;
        niv.ventMax = 50;
        niv.ventMin = 0;
        return niv;
    }

    niveauToComp() {
        this.temperatureRange = [this.niveau.tempsMin, this.niveau.tempMax];
        this.vagueRange = [this.niveau.vagueMin * 10, this.niveau.vagueMax * 10];
        this.ventRange = [this.niveau.ventMin, this.niveau.ventMax];
    }

    compToNiveau() {
        this.niveau.tempMax = this.temperatureRange[1];
        this.niveau.tempsMin = this.temperatureRange[0];
        this.niveau.vagueMax = this.vagueRange[1] / 10;
        this.niveau.vagueMin = this.vagueRange[0] / 10;
        this.niveau.ventMax = this.ventRange[1];
        this.niveau.ventMin = this.ventRange[0];
    }
}
