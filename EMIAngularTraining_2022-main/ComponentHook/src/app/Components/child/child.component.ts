import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() emp: any;
@Input() counterNewValue: number;
// currentValue: number;
// previousValue: number;
// FirstChange: boolean;
  constructor() { 
    console.log("Constructor of Child Component!!");
  }

  ngOnInit(): void {
    console.log("2.ngOnInit Invoked of Child Component");
  }
ngDoCheck()
{
  console.log('1. DoCheck Executed!!!')
}

ngOnChanges()
{
  console.log("Something has Changed");
}
ngAfterContentChecked()
{
  console.log('4.ngAfterContentChecked=> Content Checked')
}

ngAfterContentInit()
{
  console.log('3.ngAfterContentInit=>After ContentInit');
}
ngAfterViewInit()
{
  console.log('5. get executed after ngAfterContentChecked=> AfterViewInit');

}
ngAfterViewChecked()
{
  console.log('6. get executed after ngAfterViewInit=> ngAfterViewChecked');

}

ngOnDestroy():void{
  console.log("Child component Destroyed!!");
}


}
