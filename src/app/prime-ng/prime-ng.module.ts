import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import { TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [],
   exports:[
     MenubarModule,
     TableModule,
     CardModule,
     PaginatorModule
   ]  
})
export class PrimeNgModule { }
