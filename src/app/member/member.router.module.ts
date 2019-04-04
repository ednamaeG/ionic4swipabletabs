import { MemberPage } from "./member.page";

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
 {
  path: "test",
  component: MemberPage,
  children: [
   { path: "tab1", loadChildren: "../dashboard/dashboard.module#DashboardPageModule" },
   { path: "tab2", loadChildren: "../posts/posts.module#PostsPageModule" },
   {path:"tab3", loadChildren:"../third/third.module#ThirdPageModule"},
   {path:"tab4", loadChildren:"../page4/page4.module#Page4PageModule"},
   {path:"tab5", loadChildren:"../page5/page5.module#Page5PageModule"}
  ],
//   canActivate:[AuthguardService]
 },
 {
  path: "",
  redirectTo: "test/tab1"
 }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class MemberRoutingModule {}
