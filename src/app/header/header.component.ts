import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
/**
 *
 */

title: string = "Name";
constructor() {

}
  ngOnInit(): void {
    
  }
}
