import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[hideDropdown]'
})
export class HideDropdownDirective {

  constructor(private elRef: ElementRef) { }

  @Output() hideDropdown = new EventEmitter<MouseEvent>();

  @HostListener("document:click", ["$event", "$event.target"])
  onClick(event: MouseEvent, target: HTMLElement) {

   const isToggleButton = target.id === "dropdown-toggle";
   const isInsideToggle = target.parentElement && target.parentElement.id === "dropdown-toggle"

    if (!target || isToggleButton || isInsideToggle) return;

    const clickedInside = this.elRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.hideDropdown.emit(event);
    }
  }
}
