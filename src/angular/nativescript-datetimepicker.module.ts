import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { DatePickerField } from "../ui/date-picker-field";
import { TimePickerField } from "../ui/time-picker-field";

import { DIRECTIVES } from "./nativescript-datetimepicker.directives";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class NativeScriptDateTimePickerModule { }

registerElement("DatePickerField", () => DatePickerField);
registerElement("TimePickerField", () => TimePickerField);