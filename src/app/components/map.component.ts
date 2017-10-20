import { Spot } from '../../Model/Spot';
import { Component, OnInit, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MapComponent),
    multi: true
};

declare var google: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comp-map',
  template: `<p-gmap [options]="options" [overlays]="_overlays" [style]="{'width':'100%','height':'320px'}" ></p-gmap>`,
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
// tslint:disable-next-line:component-class-suffix
export class MapComponent implements ControlValueAccessor, OnInit {

    _overlays;
    options: any;

    onChange = (_) => {};
    onTouched = () => {};

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    writeValue(obj: Array<Spot>): void {

    }

    setDisabledState?(isDisabled: boolean): void {
    }

    ngOnInit() {
        this.options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };

        this._overlays = [
            new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title: 'test1'}),
            new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title: 'test2'}),
            new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title: 'test3'}),
        ];
    }

}
