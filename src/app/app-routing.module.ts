import { MainguardService } from "./services/mainguard.service";
import { AuthguardService } from "./services/authguard.service";
import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
 { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
//  orig
//  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule", canActivate: [AuthguardService] },
//  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
 { path: "member", loadChildren: "./member/member.module#MemberPageModule" },
  { path: 'splash-modal', loadChildren: './splash-modal/splash-modal.module#SplashModalPageModule' },
  { path: 'sample', loadChildren: './sample/sample.module#SamplePageModule' },
  { path: 'third', loadChildren: './third/third.module#ThirdPageModule' },
  { path: 'page4', loadChildren: './page4/page4.module#Page4PageModule' },
  { path: 'page5', loadChildren: './page5/page5.module#Page5PageModule' }
];
// const routes: Routes = [
//   { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule", canActivate: [AuthguardService] },
//   { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
//   { path: "member", loadChildren: "./member/member.module#MemberPageModule" },
//    { path: 'splash-modal', loadChildren: './splash-modal/splash-modal.module#SplashModalPageModule' }
//  ];
@NgModule({
 imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
 exports: [RouterModule]
})
export class AppRoutingModule {}
