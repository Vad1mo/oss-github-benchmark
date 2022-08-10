import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisualizationComponent } from './visualization/visualization.component';
import { ListComponent } from './metric/list/list.component';
import { ExploreItemComponent } from './explore-item/explore-item.component';
import { ExploreComponent } from './explore/explore.component';
import { RankingComponent } from './ranking/ranking.component';
import { RepositoriesRankingComponent } from './repositories-ranking/repositories-ranking.component';
import { RepositoryDetailViewComponent } from './repository-detail-view/repository-detail-view.component';
import { UserRankingComponent } from './user-ranking/user-ranking.component';

const routes: Routes = [
  // {
  //   path: 'explore',
  //   component: ExploreComponent,
  // },
  // {
  //   path: 'visualization',
  //   component: VisualizationComponent,
  // },
  // {
  //   path: 'visualization/:institution',
  //   component: VisualizationComponent,
  // },
  // {
  //   path: 'metrics',
  //   component: ListComponent,
  // },
  {
    path: 'institutions',
    component: RankingComponent,
  },
  {
    path: 'institutions/:institution',
    component: RankingComponent,
  },
  {
    path: 'repositories',
    component: RepositoriesRankingComponent,
  },
  {
    path: 'repositories/:institution/:repository',
    component: RepositoriesRankingComponent,
  },
  {
    path: 'people',
    component: UserRankingComponent,
  },
  // {
  //   path: 'explore/item/:itemName',
  //   component: ExploreItemComponent,
  // },
  { path: '', redirectTo: '/institutions', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    relativeLinkResolution: 'legacy'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
