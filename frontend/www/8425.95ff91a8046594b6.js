"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8425],{8425:(P,l,s)=>{s.r(l),s.d(l,{RepositoryInfoPageModule:()=>h});var c=s(9808),d=s(4182),e=s(5056),a=s(8808),g=s(655),o=s(9863),u=s(8792);function f(n,r){if(1&n&&(o.TgZ(0,"ion-chip",6)(1,"ion-label"),o._uU(2),o.qZA()()),2&n){const t=r.$implicit;o.Q6J("ngClass",t),o.xp6(2),o.Oqu(t)}}const y=[{path:"",component:(()=>{class n{constructor(t,i,p){this.route=t,this.repositoryService=i,this.loadCtrl=p,this.repository={_id:"",title:"",description:"",url:"",tags:[],user:"",saved:!1,userID:""}}ngOnInit(){return(0,g.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadCtrl.create({message:"Loading..."}),yield this.loading.present();const t=this.route.snapshot.paramMap.get("id");yield this.getRepositoryInfo(t)})}getRepositoryInfo(t){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.repositoryService.getRepository(t)).subscribe(i=>{!i.ok||(this.repository=i.repository,this.loading.dismiss())})})}goToSite(t){console.log(t),t.includes("https")||(t="https://"+t),window.open(t,"_system")}openMenu(){}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(a.gz),o.Y36(u.b),o.Y36(e.HT))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-repository-info"]],decls:17,vars:4,consts:[["slot","start"],["defaultHref","/"],[1,"ion-padding","container"],[1,"info"],["expand","block","fill","outline","color","dark",3,"click"],["color","primary","mode","ios","outline","true",3,"ngClass",4,"ngFor","ngForOf"],["color","primary","mode","ios","outline","true",3,"ngClass"]],template:function(t,i){1&t&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o._UZ(3,"ion-back-button",1),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"VantTec"),o.qZA()()(),o.TgZ(6,"ion-content",2)(7,"h1"),o._uU(8),o.qZA(),o.TgZ(9,"div",3)(10,"h5"),o._uU(11),o.qZA(),o.TgZ(12,"ion-button",4),o.NdJ("click",function(){return i.goToSite(i.repository.url)}),o._uU(13,"Link"),o.qZA()(),o.TgZ(14,"p"),o._uU(15),o.qZA(),o.YNc(16,f,3,2,"ion-chip",5),o.qZA()),2&t&&(o.xp6(8),o.Oqu(i.repository.title),o.xp6(3),o.Oqu(i.repository.user),o.xp6(4),o.Oqu(i.repository.description),o.xp6(1),o.Q6J("ngForOf",i.repository.tags))},dependencies:[c.mk,c.sg,e.oU,e.YG,e.Sm,e.hM,e.W2,e.Gu,e.Q$,e.wd,e.sr,e.cs],styles:[".container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:row;gap:2rem;align-items:center}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:500;opacity:.6}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:.8rem}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;font-weight:600}.RoboBoat[_ngcontent-%COMP%]{color:#d00}.RoboSub[_ngcontent-%COMP%]{color:#0d0}.SDV[_ngcontent-%COMP%]{color:#00d}.UAV[_ngcontent-%COMP%]{color:#dd0}.Tutorial[_ngcontent-%COMP%]{color:#0dd}.Research[_ngcontent-%COMP%]{color:#d0d}.Perception[_ngcontent-%COMP%]{color:#a0d}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[a.Bz.forChild(y),a.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[c.ez,d.u5,e.Pc,m]}),n})()}}]);