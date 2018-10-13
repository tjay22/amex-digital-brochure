import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'splitText'})
export class SplitText implements PipeTransform {
  constructor(){}

  transform(value: string) {
    return value.split(' ').map(word => {
        return '<div class="hl-word-mask"><div class="hl-word">'+word+'</div></div>';
    }).join(' ');
  }
}