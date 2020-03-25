import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-newsstream',
  templateUrl: './newsstream.component.html',
  styleUrls: ['./newsstream.component.scss']
})
export class NewsstreamComponent implements OnInit {
   source;
  constructor( private getData: GetDataService) { }

  ngOnInit(): void {
    this.displayData();
  }

  displayData(){
    this.getData.postNews()
    .subscribe(data=>{
      this.source = data;
      console.log(this.source);
      })

  }
}
