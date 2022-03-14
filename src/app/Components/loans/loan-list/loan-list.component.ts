import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ILoan } from 'src/app/models/ILoan';
import { BooksService } from 'src/app/Services/books.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class LoanListComponent implements OnInit {
  Loans:ILoan[]          =[];
  LoansCache:ILoan[]     =[];
  searchTerm:string ='';
  displayPosition: boolean = false;
  FilterType:string ='C';
  constructor(private bookService:BooksService,private confirmationService: ConfirmationService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getLoans();
  }
  getLoans(){
    this.bookService.getLoans().subscribe(res=>{
      console.log(res)
     this.Loans = res;
     this.Loans.map(x=>{
       if(x.returnDate==null){
         x.state=false;
       }else{
         x.state=true;
       }
       return x;
     })
     this.LoansCache = this.Loans;
     console.log(this.Loans)
   });
  }
  search(){
    this.Loans = this.LoansCache.filter(x=>(x.bookName?.toUpperCase().includes(this.searchTerm.toUpperCase())) || (x.userName?.toUpperCase().includes(this.searchTerm.toUpperCase())));
  }
  changeFilter(){
    (this.FilterType=='H')?this.FilterType='C':this.FilterType='H';
  }
  confirm1(loan : ILoan) {
    this.confirmationService.confirm({
        message: 'Book return process, are you sure to continue?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          console.log(loan);
          this.bookService.returnLoan(loan).subscribe(res=>{
              this.messageService.add({severity:'info', summary:'Confirmed', detail:'loan returned!'});
              this.getLoans();      
            })
        },
        reject: (type:any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });
}
}
