import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'article', component: ArticleComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
