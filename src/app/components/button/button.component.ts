import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() textButton: string = "Login";
  @Input() size: string = 'auto';

  // constructor() {
  //   console.log('Conponete construido');
  // }

  // ngOnChanges() {
  //   console.log('Conponete change');
  // }

  // ngOnInit() {
  //   console.log('Conponete Init');
  //   this.teste()
  // }

  // ngDoCheck() {
  //   console.log('Conponete check');
  // }

  // ngAfterViewInit() {
  //   console.log('Conponete View Init');
  // }

  // ngOnDestroy() {
  //   console.log('Conponete ngOnDestroy');
  // }

  // teste() {
  //   console.log('Conponete teste');
  // }
}
