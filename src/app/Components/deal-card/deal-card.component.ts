import { DealService } from 'src/app/Services/deal.service';
import { IDeal } from './../../Models/i-deal';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {
  deals: IDeal[] =[];
  potenialValue: any = [];
  focus: any = [];
  contactMade: any = [];
  offerSent: any = [];
  gettingReady: any = [];
  constructor (private dealservice:DealService) {}
  
  ngOnInit(): void {
    this.dealservice.getDeals().subscribe({
      next:(data:IDeal[])=>{
        this.deals = data;
        console.log(this.deals);
        for (let i = 0; i < this.deals.length; i++) {
          const element = this.deals[i];
 
          switch (element.status) {
            case 'Potential Value':
              this.potenialValue.push(element)
              break;
 
            case 'Focus':
              this.focus.push(element)
              break;
 
            case 'Contact Made':
              this.contactMade.push(element)
              break;
 
            case 'Offer Sent':
              this.offerSent.push(element)
              break;
 
            case 'Getting Ready':
              this.gettingReady.push(element)
              break;
 
            default:
              break;
          }}
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  onDrop(event: CdkDragDrop<any[]>): void {
    moveItemInArray(this.deals, event.previousIndex, event.currentIndex);
  }
  

}
