"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1884],{1884:(T,a,i)=>{i.r(a),i.d(a,{Tab3PageModule:()=>b});var n=i(5056),l=i(9808),p=i(4182),c=i(8808),u=i(655),e=i(9863),d=i(8792),v=i(3071),h=i(264);const g=[{path:"",component:(()=>{class t{constructor(o,s){this.repositoryService=o,this.UserService=s,this.repositories=[]}ngOnInit(){return(0,u.mG)(this,void 0,void 0,function*(){this.getRepositories(),this.repositoryService.newFavorite.subscribe(o=>{this.repositories.push(o)}),this.repositoryService.deleteFavorite.subscribe(o=>{this.repositories.find(s=>s._id===o._id)&&(this.repositories=this.repositories.filter(s=>s._id!==o._id))}),this.repositoryService.deleteRepository.subscribe(o=>{this.repositories=this.repositories.filter(s=>s._id!==o._id)})})}getRepositories(){return(0,u.mG)(this,void 0,void 0,function*(){(yield this.repositoryService.getFavoriteRepositories()).subscribe(o=>{!o.ok||(this.repositories=o.user.savedRepositories)})})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(d.b),e.Y36(v.K))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab3"]],decls:10,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"repositories"]],template:function(o,s){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," Favorites "),e.qZA()()(),e.TgZ(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),e._uU(8,"Favorites"),e.qZA()()(),e._UZ(9,"app-repositories",4),e.qZA()),2&o&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("repositories",s.repositories))},dependencies:[n.W2,n.Gu,n.wd,n.sr,h.T]}),t})()}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild(g),c.Bz]}),t})();var m=i(5642);let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[n.Pc,l.ez,p.u5,f,m.K]}),t})()}}]);