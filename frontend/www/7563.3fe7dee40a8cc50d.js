"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7563],{7563:(M,m,i)=>{i.r(m),i.d(m,{RegisterPageModule:()=>v});var u=i(9808),e=i(4182),r=i(5056),c=i(8808),d=i(655),t=i(9863),f=i(3071),p=i(9846);const P=[{path:"",component:(()=>{class n{constructor(o,a,g,l){this.fb=o,this.userService=a,this.uiService=g,this.navCtrl=l,this.loginForm=this.fb.group({firstName:["",e.kI.required],lastName:["",e.kI.required],email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required,e.kI.minLength(8)]],secretKey:["",[e.kI.required,e.kI.minLength(8)]]})}ngOnInit(){}onRegister(){return(0,d.mG)(this,void 0,void 0,function*(){const{firstName:o,lastName:a,email:g,password:l,secretKey:C}=this.loginForm.value;this.loginForm.valid?(yield this.userService.registerUser(o,a,g,l,C))?(this.uiService.showToast("Register Succesfull","success","top"),this.navCtrl.navigateRoot("/login",{animated:!0})):this.uiService.showToast("Register not successful","danger","top"):this.uiService.showToast(this.loginForm.controls.email.errors?"Enter a valid email":"Enter a valid password, it must have at leat 8 characters","danger","top")})}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(f.K),t.Y36(p.F),t.Y36(r.SH))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-register"]],decls:28,vars:2,consts:[[1,"form"],[1,"background"],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","firstName","autocomplete","firstName"],["type","text","formControlName","lastName","autocomplete","lastName"],["type","email","formControlName","email"],["type","password","formControlName","password"],["type","password","formControlName","secretKey"],["color","dark","ype","submit","expand","block",3,"disabled","click"],["routerLink","/login"]],template:function(o,a){1&o&&(t.TgZ(0,"ion-content")(1,"div",0),t._UZ(2,"div",1),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return a.onRegister()}),t.TgZ(4,"ion-item")(5,"ion-label",3),t._uU(6,"First Name"),t.qZA(),t._UZ(7,"ion-input",4),t.qZA(),t.TgZ(8,"ion-item")(9,"ion-label",3),t._uU(10,"Last Name"),t.qZA(),t._UZ(11,"ion-input",5),t.qZA(),t.TgZ(12,"ion-item")(13,"ion-label",3),t._uU(14,"Email"),t.qZA(),t._UZ(15,"ion-input",6),t.qZA(),t.TgZ(16,"ion-item")(17,"ion-label",3),t._uU(18,"Password"),t.qZA(),t._UZ(19,"ion-input",7),t.qZA(),t.TgZ(20,"ion-item")(21,"ion-label",3),t._uU(22,"Secret Key"),t.qZA(),t._UZ(23,"ion-input",8),t.qZA(),t.TgZ(24,"ion-button",9),t.NdJ("click",function(){return a.onRegister()}),t._uU(25,"Register"),t.qZA(),t.TgZ(26,"a",10),t._uU(27,"Already have an account? Sign In"),t.qZA()()()()),2&o&&(t.xp6(3),t.Q6J("formGroup",a.loginForm),t.xp6(21),t.Q6J("disabled",!a.loginForm.valid))},dependencies:[e._Y,e.JJ,e.JL,r.YG,r.W2,r.pK,r.Ie,r.Q$,r.j9,r.Fo,c.yS,e.sg,e.u],styles:["@font-face{font-family:Nasa;src:url(/assets/fonts/nasalization-rg.otf)}ion-content[_ngcontent-%COMP%]{--offset-bottom: auto!important;--overflow: hidden;overflow:auto}ion-content[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{background-color:var(--ion-color-background);margin:0;padding:0;height:100vh;width:100vw;flex:1;display:flex;justify-content:center;align-items:center;gap:20vw}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:30%;margin-top:0;padding-top:0}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{background-image:var(--ion-background-image);background-repeat:no-repeat;background-size:100% 100%;width:40%;height:70%;margin:0;padding:0}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Nasa;font-size:2.5rem;color:#fff;margin-bottom:1rem}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin:1rem;width:25vw;border:1px solid var(--ion-color-dark);border-radius:15px}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ion-color-dark);position:absolute;right:7vw;margin-top:1rem}@media screen and (max-width: 980px){ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{flex-direction:column;gap:0}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:70%}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%]{width:70%;height:50%;position:absolute;top:-15%}ion-content[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin:1rem;width:80vw}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(P),c.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,e.u5,r.Pc,h,e.UX]}),n})()}}]);