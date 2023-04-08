import { IDeal } from './../../Models/i-deal';
import { Component,OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DealService } from 'src/app/Services/deal.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDrag } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {
  deals: IDeal[] =[];
  filteredDeals: IDeal[] =[]
  searchTerm:string=""
  potenialValue: any = [];
  focus: any = [];
  contactMade: any = [];
  offerSent: any = [];
  gettingReady: any = [];
  
  constructor(private dealservice:DealService) {  }
  ngOnInit(): void {
    this.dealservice.getDeals().subscribe({
      next:(data:IDeal[])=>{
        this.deals = data;
        // console.log(this.deals);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  


  searchDeals(searchTerm: string) {
    this.filteredDeals = this.deals.filter(contact => {
      return (
        contact.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || // First name
        contact.last_name.toLowerCase().includes(searchTerm.toLowerCase()) || // Last name
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())    // Email
      );
    });
  }}

