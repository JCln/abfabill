(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{flHg:function(n,t,e){"use strict";e.r(t),e.d(t,"GenerateBillModule",(function(){return d}));var o=e("ofXK"),i=e("tyNb"),c=e("zD6u"),r=e("fXoL");const s=function(){return["/ph"]},g=function(n){return[n]},_=[{path:"",component:(()=>{class n{constructor(n){this.interactionService=n,this.timeLeft=10,this.billId=""}ngOnInit(){this.unSubBillId=this.interactionService.billId$.subscribe(n=>{n&&(this.billId=n,console.log(this.billId))})}ngOnDestroy(){this.unSubBillId.unsubscribe()}}return n.\u0275fac=function(t){return new(t||n)(r.Kb(c.a))},n.\u0275cmp=r.Eb({type:n,selectors:[["app-generate-bill"]],decls:14,vars:5,consts:[[1,"test"],[1,"side_view"],[1,"message"],[1,"sign"],[1,"fa","fa-check"],[1,"back_to_insert_id"],[3,"routerLink"],[1,"_special",3,"routerLink"]],template:function(n,t){1&n&&(r.Pb(0,"section"),r.Pb(1,"div",0),r.Lb(2,"div",1),r.Ob(),r.Pb(3,"main"),r.Pb(4,"div",2),r.Pb(5,"div",3),r.Lb(6,"i",4),r.Ob(),r.Pb(7,"h1"),r.vc(8,"\u0642\u0628\u0636 \u0645\u06cc\u0627\u0646\u062f\u0648\u0631\u0647 \u0635\u0627\u062f\u0631 \u0634\u062f"),r.Ob(),r.Pb(9,"div",5),r.Pb(10,"button",6),r.vc(11,"\u0628\u0627\u0632\u06af\u0634\u062a \u0628\u0647 \u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"),r.Ob(),r.Pb(12,"button",7),r.vc(13,"\u0645\u0634\u0627\u0647\u062f\u0647 \u0622\u062e\u0631\u06cc\u0646 \u0642\u0628\u0636"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&n&&(r.zb(10),r.cc("routerLink",r.gc(2,s)),r.zb(2),r.cc("routerLink",r.hc(3,g,"/"+t.billId+"/bill?checked=1")))},directives:[i.d],styles:["section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .back_to_insert_id[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;font-size:1.4rem;line-height:1.5;font-weight:700;font-family:inherit;padding:.375rem .75rem;height:3rem;min-width:20rem;width:93%;outline:none;border-radius:30px;background-color:#116fff;box-shadow:0 0 10px rgba(17,111,255,.5);margin-bottom:.9rem;cursor:pointer;display:flex;place-items:center;align-items:center;justify-content:center;place-content:space-evenly}@media screen and (max-width:414px){section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .back_to_insert_id[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1.3rem}}.hr_1[_ngcontent-%COMP%]{margin-bottom:1.5rem;height:.4rem}.hr_1[_ngcontent-%COMP%], .hr_2[_ngcontent-%COMP%]{width:70%;border-radius:30px;background:#eee}.hr_2[_ngcontent-%COMP%]{opacity:.7;margin:2.5rem auto;height:.2rem}a[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover{outline:none}section[_ngcontent-%COMP%]{background-color:#00368c;height:100vh;min-height:100%;position:relative;display:flex;justify-content:center;align-items:center}section[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .side_view[_ngcontent-%COMP%]{position:absolute;background-color:rgba(0,78,204,.5);width:70%;height:85%;border-radius:30% 0 0 30%;top:50%;bottom:50%;right:0;margin:auto}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{display:flex;justify-content:center;position:absolute;flex-direction:column;align-items:center;background-color:#fff;width:90%;min-height:13rem;border-top:.5rem solid #61e786;border-bottom:.5rem solid #61e786;border-radius:13px}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%]{background-color:#61e786;width:5rem;height:5rem;border-radius:50%;top:50%;transform:translateY(-50%);margin:auto}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .sign[_ngcontent-%COMP%]   .fa-check[_ngcontent-%COMP%]{place-items:center;height:100%;width:100%;display:grid;font-size:3rem;color:#fff}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{width:80%;padding:0 1rem}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .__pay_info[_ngcontent-%COMP%]{margin:2rem 0}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .__pay_info[_ngcontent-%COMP%]   .___desc[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:.3rem;font-weight:600}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .__pay_info[_ngcontent-%COMP%]   .___desc[_ngcontent-%COMP%]   .____des_size[_ngcontent-%COMP%]{font-size:1.2rem}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .__pay_info[_ngcontent-%COMP%]   .___desc[_ngcontent-%COMP%]   .____size[_ngcontent-%COMP%]{font-size:1.2rem;color:#a9a9a9}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-top:-1.5rem;color:#2dc227}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .back_to_insert_id[_ngcontent-%COMP%]{display:contents;justify-content:center}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .back_to_insert_id[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:transparent;border:1px solid;color:#7d83ff;font-size:1rem;min-width:10rem;width:100%}section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .back_to_insert_id[_ngcontent-%COMP%]   ._special[_ngcontent-%COMP%]{border:none;color:#064608;background:#61e786}@media (min-width:550px){section[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .back_to_insert_id[_ngcontent-%COMP%]{display:flex;justify-content:center}}"]}),n})()}];let a=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(t){return new(t||n)},imports:[[i.f.forChild(_)],i.f]}),n})(),d=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(t){return new(t||n)},imports:[[o.b,a]]}),n})()}}]);