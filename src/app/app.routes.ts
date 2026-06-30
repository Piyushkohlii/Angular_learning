import { Routes } from '@angular/router';
import { A18RoutingHome } from './a18-routing-home/a18-routing-home';
import { A18RoutingAbout } from './a18-routing-about/a18-routing-about';
import { A18RoutingContact } from './a18-routing-contact/a18-routing-contact';
import { A19NestedRouting } from './a19-nested-routing/a19-nested-routing';
import { Profile } from './a19-nested-routing/profile/profile';
import { Settings } from './a19-nested-routing/settings/settings';
import { A20LazyloadingHome } from './a20-lazyloading-home/a20-lazyloading-home';
import { A21RouteGuardLogin } from './a21-route-guard-login/a21-route-guard-login';
import { A21RouteGuardDashboard } from './a21-route-guard-dashboard/a21-route-guard-dashboard';
import { authGuard } from './auth-guard';
import { A21RouteGuardProfile } from './a21-route-guard-profile/a21-route-guard-profile';
import { canDeactivateGuard } from './can-deactivate-guard';
import { A22RouteParams } from './a22-route-params/a22-route-params';
import { A22QueryParams } from './a22-query-params/a22-query-params';
import { A23NavigationAPILogin } from './a23-navigation-apilogin/a23-navigation-apilogin';
import { A23NavigationAPIdashboard } from './a23-navigation-apidashboard/a23-navigation-apidashboard';
import { A23NavigationAPIproduct } from './a23-navigation-apiproduct/a23-navigation-apiproduct';
import { A24SignalRouting } from './a24-signal-routing/a24-signal-routing';

export const routes: Routes = [
    // {path :'',component : A18RoutingHome},
    // {path :'about',component : A18RoutingAbout},
    // {path :'contact',component : A18RoutingContact}

    // {
    //     path:'dashboard',
    //     component:A19NestedRouting,
    //     children:[
    //         {path:'profile',component:Profile},
    //         {path:'settings',component:Settings}
    //     ]
    // },
    // {path:'',redirectTo:'dashboard',pathMatch:'full'}

    // {path :'home',component:A20LazyloadingHome},
    // {
    //     path:'admin',
    //     loadComponent:()=>import('./a20-lazyloading-admin/a20-lazyloading-admin').then(m=>m.A20LazyloadingAdmin)
    // }
    // {path : '**',component : 404Error}, this is for page not foung page

    // {path:'login',component:A21RouteGuardLogin},
    // {path:'dashboard',component:A21RouteGuardDashboard,canActivate:[authGuard]},
    // {path:'profile',component :A21RouteGuardProfile, canDeactivate:[canDeactivateGuard]},
    // {path:'',redirectTo:'login',pathMatch:'full'}

    // {path:'product/:id',component:A22RouteParams},
    // {path:'products',component:A22QueryParams}

    // {path:'login',component:A23NavigationAPILogin},
    // {path:'dashboard',component : A23NavigationAPIdashboard},
    // {path:'product/:id',component:A23NavigationAPIproduct},
    // {path:'',redirectTo:'login',pathMatch:'full'}

    {path:'products',component:A24SignalRouting}

];
