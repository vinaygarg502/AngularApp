import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', 
    loadChildren: () => import('./count-timer/count-timer.module').then(m => m.CountTimerModule)
  },
  { path: 'timer', 
    loadChildren: () => import('./count-timer/count-timer.module').then(m => m.CountTimerModule)
  },
  { path: 'banner', 
    loadChildren: () => import('./banner-animation/banner-animation.module').then(m=> m.BannerAnimationModule)
  },
  { path: 'category', 
    loadChildren: () => import('./category-list/category-list.module').then(m=> m.CategoryListModule)
  },
  { path: 'dynamic', 
    loadChildren: () => import('./dynamic-html/dynamic-html.module').then(m=> m.DynamicHtmlModule)
  },
  { path: 'students', 
    loadChildren: () => import('./student-list/student-listing.module').then(m=> m.StudentListingModule)
  },
  { path: 'timerservice', 
    loadChildren: () => import('./timer-service/timer-service.module').then(m=> m.TimerServiceModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
