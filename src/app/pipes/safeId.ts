import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'safeId'})
export class SafeId implements PipeTransform {
  constructor(){}

  transform(value) {
    return value ? value.replace(/ /g, "_").replace(/(&reg;)/g, "") : value;
  }
}