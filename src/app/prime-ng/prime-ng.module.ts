import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";

import {MenubarModule} from 'primeng/menubar';
import { TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';





@NgModule({
  declarations: [],
   exports:[
     MenubarModule,
     TableModule,
     CardModule,
     PaginatorModule,
     DialogModule,
     ButtonModule,
     FlexLayoutModule,
     InputTextModule,
     DropdownModule,
     InputNumberModule,
     ToastModule
   ],
})
export class PrimeNgModule { }
