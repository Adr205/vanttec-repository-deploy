"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1015],{1015:(P,l,i)=>{i.r(l),i.d(l,{Tab1PageModule:()=>b});var s=i(5056),p=i(9808),d=i(4182),c=i(8808),u=i(655),e=i(9863),h=i(8792),g=i(3071),f=i(264);const v=[{path:"",component:(()=>{class t{constructor(o,r){this.repositoryService=o,this.UserService=r,this.repositories=[]}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){yield this.getRepositories(),this.repositoryService.newRepository.subscribe(o=>{this.repositories.push(o)}),this.repositoryService.updatedRepository.subscribe(o=>{const r=this.repositories.findIndex(a=>a._id===o._id);this.repositories[r]=o}),this.repositoryService.deleteRepository.subscribe(o=>{this.repositories=this.repositories.filter(r=>r._id!==o._id),this.repositoryService.deleteFav(o)})})}getRepositories(){return(0,u.mG)(this,void 0,void 0,function*(){(yield this.repositoryService.getRepositories()).subscribe(o=>{!o.ok||(this.repositories=o.repositories)})})}handleRefresh(o){this.getRepositories(),o.target.complete()}logOut(){this.UserService.logout()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(h.b),e.Y36(g.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab1"]],decls:15,vars:3,consts:[[3,"translucent"],["slot","end"],["color","danger",3,"click"],[3,"fullscreen"],["collapse","condense"],["size","large"],["slot","fixed",3,"ionRefresh"],[3,"repositories"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," VantTec "),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-button",2),e.NdJ("click",function(){return r.logOut()}),e._uU(6,"Log Out"),e.qZA()()()(),e.TgZ(7,"ion-content",3)(8,"ion-header",4)(9,"ion-toolbar")(10,"ion-title",5),e._uU(11,"VantTec"),e.qZA()()(),e.TgZ(12,"ion-refresher",6),e.NdJ("ionRefresh",function(y){return r.handleRefresh(y)}),e._UZ(13,"ion-refresher-content"),e.qZA(),e._UZ(14,"app-repositories",7),e.qZA()),2&o&&(e.Q6J("translucent",!0),e.xp6(7),e.Q6J("fullscreen",!0),e.xp6(7),e.Q6J("repositories",r.repositories))},dependencies:[s.YG,s.Sm,s.W2,s.Gu,s.nJ,s.Wo,s.wd,s.sr,f.T]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(v),c.Bz]}),t})();var m=i(5642);let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Pc,p.ez,d.u5,T,m.K]}),t})()}}]);