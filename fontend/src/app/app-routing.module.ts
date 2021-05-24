import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNumberComponent } from './add-number/add-number.component';
import { AdminComponent } from './admin/admin.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NumberListComponent } from './number-list/number-list.component';
import { IssueComponent } from './issue/issue.component'

const routes: Routes = [
  { path: 'add-number', component: AddNumberComponent },
  { path: '', component: AdminComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'number-list', component: NumberListComponent },
  { path: 'issue', component: IssueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }