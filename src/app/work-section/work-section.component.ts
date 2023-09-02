import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-work-section',
  templateUrl: './work-section.component.html',
  styleUrls: ['./work-section.component.scss'],
})
export class WorkSectionComponent {
  currentButton = 'All';

  @ViewChild('pollo', { static: true }) pollo!: ElementRef;
  @ViewChild('join', { static: true }) join!: ElementRef;
  @ViewChild('random1', { static: true }) random1!: ElementRef;
  @ViewChild('random2', { static: true }) random2!: ElementRef;

  
  showAll() {
    this.currentButton = 'All';
    this.showDivs();
  }
  
  showAngular() {
    this.currentButton = 'Angular';
    this.showDivs();
  }
  
  showJavaScript() {
    this.currentButton = 'JavaScript';
    this.showDivs();
  }
  
  showDivs() {
    // Hide all divs
    this.pollo.nativeElement.style.display = 'none';
    this.join.nativeElement.style.display = 'none';
    this.random1.nativeElement.style.display = 'none';
    this.random2.nativeElement.style.display = 'none';
  
    // Show divs based on the current button
    if (this.currentButton === 'All') {
      this.pollo.nativeElement.style.display = 'flex';
      this.join.nativeElement.style.display = 'flex';
      this.random1.nativeElement.style.display = 'flex';
      this.random2.nativeElement.style.display = 'flex';
    } else if (this.currentButton === 'Angular') {
      this.pollo.nativeElement.style.display = 'flex';
    } else if (this.currentButton === 'JavaScript') {
      this.join.nativeElement.style.display = 'flex';
      this.random1.nativeElement.style.display = 'flex';
      this.random2.nativeElement.style.display = 'flex';
    }
  }
}
