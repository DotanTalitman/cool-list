import { DataService } from './data.service';
import { Component, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cool-list',
  templateUrl: './cool-list.component.html',
  styleUrls: ['./cool-list.component.css']
})

export class CoolListComponent {
  array = [];
  items = 1;
  page = 1;
  throttle = 300;
  rowSize = 100;//  height in px
  scrollDistance = 2;
  extraRows = 2;
  top = 0;
  @ViewChild('coolListEl') coolListEl;

  constructor(private dataService: DataService) {
  }

  getItemsAmount(): number {
    this.items = Math.ceil((window.innerHeight - this.top) / this.rowSize);
    return this.items;
  }


  ngOnInit(): void {
    // Calculate  Viewport - Element's top position 
    this.top = this.coolListEl.nativeElement.getBoundingClientRect().top;
  }

  ngAfterContentInit(): void {
    this.initData();
  }

  initData() {
    this.page = 1;
    this.array = this.dataService
      .getData(this.getItemsAmount() + this.extraRows, this.page);
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.initData();
    window.scroll({
      top: this.top,
      left: 0,
      behavior: 'smooth'
    });

  }
  onScrollDown() {

    this.array = [...this.array, ...this.getDataFromDataService(this.items)]
  }

  getDataFromDataService(size) {
    return this.dataService.getData(size + this.extraRows, ++this.page);

  }

}
