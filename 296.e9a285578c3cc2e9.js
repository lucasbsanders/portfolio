"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[296],{8296:(Ze,w,p)=>{p.r(w),p.d(w,{default:()=>ye});var d=p(6814),C=p(2296),v=p(6385),f=p(617),T=p(4748);const y={p2Pieces:[[0,6],[1,1],[1,3],[1,5],[1,7],[2,0],[3,3],[3,5],[5,3]],p1Pieces:[[5,1],[4,4],[5,5],[5,7],[6,0],[6,2],[6,4],[6,6],[7,1],[7,3],[7,5],[7,7]]},Z=new Map([[0,"8"],[1,"7"],[2,"6"],[3,"5"],[4,"4"],[5,"3"],[6,"2"],[7,"1"]]),A=new Map([[0,"a"],[1,"b"],[2,"c"],[3,"d"],[4,"e"],[5,"f"],[6,"g"],[7,"h"]]);var e=p(9212);let I=(()=>{class o{transform(t){return 2!==t.length||t.some(n=>"number"!=typeof n)?(console.error("boardSpaceName pipe - value must be [rowNumber, colNumber]"),""):`${A.get(t[0])}${Z.get(t[1])}`}static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275pipe=e.Yjl({name:"boardSpaceName",type:o,pure:!0,standalone:!0})}return o})();var O=p(2596),H=p(777);const E=["contentContainer"],J=["checkersBoard"],z=o=>({"left.px":o});function F(o,r){if(1&o&&(e.TgZ(0,"div",21),e._uU(1),e.qZA()),2&o){const t=r.$implicit,n=r.index,c=e.oxw();e.Q6J("ngStyle",e.VKq(2,z,n*c.spaceSize+c.checkerSize/2)),e.xp6(1),e.hij(" ",t," ")}}const Q=o=>({"top.px":o});function B(o,r){if(1&o&&(e.TgZ(0,"div",22),e._uU(1),e.qZA()),2&o){const t=r.$implicit,n=r.index,c=e.oxw();e.Q6J("ngStyle",e.VKq(2,Q,n*c.spaceSize+c.spaceSize/3)),e.xp6(1),e.hij(" ",t," ")}}function q(o,r){1&o&&e.GkF(0)}const N=o=>({checker:o});function R(o,r){if(1&o&&(e.ynx(0),e.YNc(1,q,1,0,"ng-container",23),e.BQk()),2&o){const t=r.$implicit;e.oxw();const n=e.MAs(29);e.xp6(1),e.Q6J("ngTemplateOutlet",n)("ngTemplateOutletContext",e.VKq(2,N,t))}}const k=(o,r,t,n)=>({"height.px":o,"width.px":r,"top.px":t,"left.px":n});function Y(o,r){if(1&o&&e._UZ(0,"span",26),2&o){const t=e.oxw().$implicit,n=e.oxw();e.Q6J("ngStyle",e.l5B(1,k,n.spaceSize,n.spaceSize,t.row*n.spaceSize,t.col*n.spaceSize))}}function U(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"span",27),e.NdJ("mousedown",function(c){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw();return e.KtG(s.clickChecker(c,i.checker.row,i.checker.col))})("touchstart",function(c){e.CHM(t);const i=e.oxw().$implicit,s=e.oxw();return e.KtG(s.clickChecker(c,i.checker.row,i.checker.col))}),e.qZA()}if(2&o){const t=e.oxw().$implicit,n=e.oxw();e.Q6J("ngStyle",e.l5B(1,k,n.checkerSize,n.checkerSize,t.checker.row*n.spaceSize+n.checkerSize*n.CHECKER_TOP_OFFSET,t.checker.col*n.spaceSize+n.checkerSize*n.CHECKER_TOP_OFFSET))}}function W(o,r){if(1&o&&(e.ynx(0),e.YNc(1,Y,1,6,"span",24)(2,U,1,6,"span",25),e.BQk()),2&o){const t=r.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",!n.selectedChecker||n.selectedChecker.id===t.checker.id),e.xp6(1),e.Q6J("ngIf",!n.selectedChecker||n.selectedChecker.id===t.checker.id)}}const K=(o,r,t,n)=>({"bg-slate-100 dark:bg-slate-800":o,"bg-white dark:bg-slate-900":r,"inset-hover-shadow":t,"outline outline-green-500 outline-2 -outline-offset-2":n});function L(o,r){if(1&o&&e._UZ(0,"div",30),2&o){const t=r.index,n=e.oxw().index,c=e.oxw();e.Q6J("id",n+","+t)("ngClass",e.l5B(2,K,(n+t)%2==0,(n+t)%2==1,(null==c.hoverSpace?null:c.hoverSpace.length)&&c.hoverSpace[0]===t&&c.hoverSpace[1]===n,null!==c.outlineSpace&&c.outlineSpace[0]===t&&c.outlineSpace[1]===n))}}function G(o,r){if(1&o&&(e.TgZ(0,"div",28),e.YNc(1,L,1,7,"div",29),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.BOARD_SIZE_ARR)}}function D(o,r){1&o&&(e.TgZ(0,"p",31),e._uU(1,"Captured pieces will be displayed here"),e.qZA())}const x=(o,r)=>[o,r];function $(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",37),e.NdJ("mouseenter",function(){const i=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.outlineSpace=[i.col,i.row])})("mouseleave",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.outlineSpace=null)}),e.ALo(1,"boardSpaceName"),e.qZA()}if(2&o){const t=r.$implicit;e.Q6J("matTooltip","Captured at "+e.lcZ(1,1,e.WLB(3,x,t.col,t.row)))}}function j(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",38),e.NdJ("mouseenter",function(){const i=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.outlineSpace=[i.col,i.row])})("mouseleave",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.outlineSpace=null)}),e.ALo(1,"boardSpaceName"),e.qZA()}if(2&o){const t=r.$implicit;e.Q6J("matTooltip","Captured at "+e.lcZ(1,1,e.WLB(3,x,t.col,t.row)))}}function X(o,r){if(1&o&&(e.TgZ(0,"div",32)(1,"span"),e._uU(2,"Player 1"),e.qZA(),e.TgZ(3,"span"),e._uU(4,"Player 2"),e.qZA()(),e.TgZ(5,"div",32)(6,"div",33),e.YNc(7,$,2,6,"div",34),e.qZA(),e.TgZ(8,"div",35),e.YNc(9,j,2,6,"div",36),e.qZA()()),2&o){const t=e.oxw();e.xp6(7),e.Q6J("ngForOf",t.board.p1PiecesCaptured),e.xp6(2),e.Q6J("ngForOf",t.board.p2PiecesCaptured)}}function V(o,r){1&o&&(e.TgZ(0,"p",31),e._uU(1,"When you start playing, your moves will be logged here"),e.qZA())}function ee(o,r){1&o&&e.GkF(0)}const P=(o,r)=>({turn:o,i:r});function te(o,r){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,ee,1,0,"ng-container",23),e.qZA()),2&o){const t=e.oxw(),n=t.$implicit,c=t.index;e.oxw(2);const i=e.MAs(31);e.Q6J("@expandCollapse",void 0),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.WLB(3,P,n,c))}}function oe(o,r){1&o&&e.GkF(0)}function ne(o,r){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,oe,1,0,"ng-container",23),e.qZA()),2&o){const t=e.oxw(),n=t.$implicit,c=t.index;e.oxw(2);const i=e.MAs(31);e.Q6J("@expandCollapse",void 0),e.xp6(1),e.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",e.WLB(3,P,n,c))}}function ce(o,r){if(1&o&&(e.TgZ(0,"div",41),e.YNc(1,te,2,6,"div",42)(2,ne,2,6,"div",42),e.qZA()),2&o){const t=r.index,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t<3),e.xp6(1),e.Q6J("ngIf",t>=3&&n.showAllTurnHistory)}}function re(o,r){if(1&o&&(e.TgZ(0,"div",39),e.YNc(1,ce,3,2,"div",40),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.board.turns)}}function ie(o,r){1&o&&(e._uU(0," See All Turns "),e._UZ(1,"mat-icon",45))}function se(o,r){1&o&&(e._uU(0," Collapse "),e._UZ(1,"mat-icon",46))}function le(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"button",43),e.NdJ("click",function(){e.CHM(t);const c=e.oxw();return e.KtG(c.showAllTurnHistory=!c.showAllTurnHistory)}),e.TgZ(1,"div",44),e.YNc(2,ie,2,0,"mat-icon",45)(3,se,2,0),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(2),e.um2(2,t.showAllTurnHistory?3:2)}}function ae(o,r){if(1&o&&e._UZ(0,"span",49),2&o){const t=r.$implicit,n=e.oxw(3);e.Q6J("ngStyle",e.l5B(1,k,n.spaceSize,n.spaceSize,t.row*n.spaceSize,t.col*n.spaceSize))}}function pe(o,r){if(1&o&&(e.ynx(0),e.YNc(1,ae,1,6,"span",48),e.BQk()),2&o){const t=e.oxw().checker;e.xp6(1),e.Q6J("ngForOf",t.eligibleSpaces)}}const de=(o,r,t)=>({"opacity-50":o,"checker-red":r,"checker-black":t}),S=(o,r)=>({"height.px":o,"width.px":r});function _e(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"span",47),e.NdJ("touchstart",function(c){const s=e.CHM(t).checker,h=e.oxw();return e.KtG(h.clickChecker(c,s.row,s.col))})("mousedown",function(c){const s=e.CHM(t).checker,h=e.oxw();return e.KtG(h.clickChecker(c,s.row,s.col))}),e._UZ(1,"span",6),e.qZA(),e.YNc(2,pe,2,1,"ng-container",42)}if(2&o){const t=r.checker,n=e.oxw();e.Q6J("ngStyle",e.l5B(4,k,n.checkerSize,n.checkerSize,t.row*n.spaceSize+n.checkerSize*n.CHECKER_BOTTOM_OFFSET,t.col*n.spaceSize+n.checkerSize*n.CHECKER_BOTTOM_OFFSET))("ngClass",e.kEZ(9,de,(null==n.selectedChecker?null:n.selectedChecker.id)===t.id,"p2"===t.playerId,"p1"===t.playerId)),e.xp6(1),e.Q6J("ngStyle",e.WLB(13,S,n.checkerSize,n.checkerSize)),e.xp6(1),e.Q6J("ngIf",!n.board.requiredMoves.length&&n.selectedChecker&&t.id===n.selectedChecker.id&&t.eligibleSpaces.length)}}function he(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"span",54),e.NdJ("mouseenter",function(){const i=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.outlineSpace=[i.col,i.row])})("mouseleave",function(){e.CHM(t);const c=e.oxw(2);return e.KtG(c.outlineSpace=null)}),e._uU(1),e.ALo(2,"boardSpaceName"),e.qZA()}if(2&o){const t=r.$implicit;e.xp6(1),e.hij(" ",e.lcZ(2,1,e.WLB(3,x,t.col,t.row))," ")}}const ue=(o,r)=>({"bg-red-700":o,"bg-gray-700":r});function me(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",57),e.NdJ("mouseenter",function(){const i=e.CHM(t).$implicit,s=e.oxw(3);return e.KtG(s.outlineSpace=[i.col,i.row])})("mouseleave",function(){e.CHM(t);const c=e.oxw(3);return e.KtG(c.outlineSpace=null)}),e.ALo(1,"boardSpaceName"),e.qZA()}if(2&o){const t=r.$implicit,n=e.oxw(2).turn;e.Q6J("ngClass",e.WLB(4,ue,"p1"===n.playerId,"p2"===n.playerId))("matTooltip","Captured at "+e.lcZ(1,2,e.WLB(7,x,t.col,t.row)))}}function ge(o,r){if(1&o&&(e.TgZ(0,"span",55),e._uU(1,"Captured:"),e.qZA(),e.YNc(2,me,2,10,"div",56)),2&o){const t=e.oxw().turn;e.xp6(2),e.Q6J("ngForOf",t.capturedCheckers)}}const M=(o,r)=>({"bg-red-600":o,"bg-gray-600":r});function Ce(o,r){if(1&o&&(e.TgZ(0,"div",50)(1,"span",51),e._uU(2),e.qZA(),e.TgZ(3,"span",52),e._uU(4),e.qZA(),e.YNc(5,he,3,6,"span",53)(6,ge,3,1),e.qZA()),2&o){const t=r.turn,n=r.i;e.xp6(2),e.Oqu(n+1),e.xp6(1),e.Q6J("ngClass",e.WLB(5,M,"p2"===t.playerId,"p1"===t.playerId)),e.xp6(1),e.hij(" ","p1"===t.playerId?"Player 1:":"Player 2:"," "),e.xp6(1),e.Q6J("ngForOf",t.spaces),e.xp6(1),e.um2(6,t.capturedCheckers?6:-1)}}const fe=(o,r,t,n)=>({"height.px":o,"width.px":r,"left.px":t,"top.px":n}),ke=(o,r,t)=>({"checker-black":o,"checker-red":r,hidden:t});let xe=(()=>{class o{onKeydownHandler(t){this.selectedChecker&&this._dropSelectedChecker()}get currentPlayerId(){return this.board.currentPlayerId}get spaceSize(){return this.boardSizePx/8}get checkerSize(){return this.spaceSize*this.CHECKER_RATIO}constructor(){this.BOARD_SIZE=8,this.BOARD_SIZE_ARR=new Array(this.BOARD_SIZE),this.CHECKER_TOP_OFFSET=.1,this.CHECKER_BOTTOM_OFFSET=.18,this.CHECKER_RATIO=.8,this.BOARD_COL_NAMES=Array.from(A.values()),this.BOARD_ROW_NAMES=Array.from(Z.values()),this.boardSizePx=0,this.offsetLeft=0,this.offsetTop=0,this.selectedCheckerX=0,this.selectedCheckerY=0,this.hoverSpace=[],this.outlineSpace=null,this.showAllTurnHistory=!1,this._elementWidth=0,this._resetBoard()}ngOnInit(){this._startNewGame()}ngAfterViewChecked(){this.contentContainerRef&&this._elementWidth!==this.contentContainerRef?.nativeElement.offsetWidth&&(this._elementWidth=this.contentContainerRef?.nativeElement.offsetWidth,setTimeout(()=>{this.boardSizePx=this._elementWidth<700?this._elementWidth:this._elementWidth/2}))}clickChecker(t,n,c){t.preventDefault();const i=this._getChecker(n,c);if(!this.checkersBoardRef||"EMPTY_SPACE"===i||this.currentPlayerId!==i.playerId)return;this.selectedChecker=i,this.offsetTop=this.checkersBoardRef.nativeElement.getBoundingClientRect().top,this.offsetLeft=this.checkersBoardRef.nativeElement.getBoundingClientRect().left,[this.selectedCheckerX,this.selectedCheckerY]=this._calculateCheckerCoords(t.clientX??t.touches[0]?.clientX,t.clientY??t.touches[0]?.clientY),this.hoverSpace=this._calculateSelectedCheckerHoverSpace();const s=m=>{[this.selectedCheckerX,this.selectedCheckerY]=this._calculateCheckerCoords(m.clientX??m.touches[0]?.clientX,m.clientY??m.touches[0]?.clientY),this.hoverSpace=this._calculateSelectedCheckerHoverSpace()};document.ontouchmove=s,document.onmousemove=s;const h=m=>{const a=this.board.requiredMoves.length>0?this.board.requiredMoves.find(l=>l.checker.id===i.id&&l.col===this.hoverSpace[0]&&l.row===this.hoverSpace[1]):i.eligibleSpaces.find(l=>l.col===this.hoverSpace[0]&&l.row===this.hoverSpace[1]);if(a){const l=a.capturedChecker,_=this.board.turns.length>0&&this.board.turns[this.board.turns.length-1].playerId===this.selectedChecker.playerId?this.board.turns[this.board.turns.length-1]:void 0;if(_?(_.spaces.push({row:a.row,col:a.col}),l&&_.capturedCheckers.push(l)):this.board.turns.push({playerId:this.selectedChecker.playerId,spaces:[{row:this.selectedChecker.row,col:this.selectedChecker.col},{row:a.row,col:a.col}],capturedCheckers:l?[l]:void 0}),this.selectedChecker.col=a.col,this.selectedChecker.row=a.row,l){this.board.checkers=this.board.checkers.filter(g=>l.id!==g.id),"p1"===l.playerId?this.board.p2PiecesCaptured.push(l):this.board.p1PiecesCaptured.push(l);const u=this._getEligibleSpaces({...i,row:a.row,col:a.col}).filter(g=>g.capturedChecker);if(u.length)return this.board.requiredMoves=u.map(g=>({...g,checker:this.selectedChecker})),void this._dropSelectedChecker()}this.board.currentPlayerId="p2"===this.selectedChecker.playerId?"p1":"p2",this._scanBoard()}this._dropSelectedChecker()};document.ontouchend=h,document.onmouseup=h}saveGameState(){}_resetBoard(){this.board={currentPlayerId:"p1",checkers:[],turns:[],p2PiecesCaptured:[],p1PiecesCaptured:[],requiredMoves:[]}}_dropSelectedChecker(){this.hoverSpace=[],this.selectedChecker=void 0,this.offsetLeft=0,this.offsetTop=0,document.ontouchmove=null,document.onmousemove=null,document.ontouchend=null,document.onmouseup=null}_getEligibleSpaces(t){const[n,c,i]=[t.playerId,t.row,t.col],s=[];return("p1"===n?[[-1,-1],[-1,1]]:[[1,-1],[1,1]]).forEach(a=>{const[l,_]=a,u=this._getChecker(c+l,i+_);u&&("EMPTY_SPACE"===u?s.push({row:c+l,col:i+_}):u.playerId!==n&&"EMPTY_SPACE"===this._getChecker(c+2*l,i+2*_)&&s.push({row:c+2*l,col:i+2*_,capturedChecker:u}))}),s}_startNewGame(){this._resetBoard();let t=1;y.p1Pieces.forEach(([n,c])=>{this.board.checkers.push({playerId:"p1",id:t++,row:n,col:c,eligibleSpaces:[]})}),y.p2Pieces.forEach(([n,c])=>{this.board.checkers.push({playerId:"p2",id:t++,row:n,col:c,eligibleSpaces:[]})}),this._scanBoard()}_getChecker(t,n){if(t<this.BOARD_SIZE&&t>=0&&n<this.BOARD_SIZE&&n>=0)return this.board.checkers.find(i=>i.row===t&&i.col===n)??"EMPTY_SPACE"}_scanBoard(){this.board.checkers.forEach(t=>t.eligibleSpaces=this.board.currentPlayerId===t.playerId?this._getEligibleSpaces(t):[]),this.board.requiredMoves=this.board.checkers.filter(t=>this.board.currentPlayerId===t.playerId&&t.eligibleSpaces.some(n=>n.capturedChecker)).flatMap(t=>t.eligibleSpaces.filter(n=>n.capturedChecker).map(n=>({...n,checker:t})))}_calculateCheckerCoords(t,n){return[Math.min(Math.max(t-this.offsetLeft-this.checkerSize/2,4),this.boardSizePx-this.checkerSize-4),Math.min(Math.max(n-this.offsetTop-this.checkerSize/2,4),this.boardSizePx-this.checkerSize-4)]}_calculateSelectedCheckerHoverSpace(){return[Math.floor((this.selectedCheckerX+this.checkerSize/2)/this.boardSizePx*this.BOARD_SIZE),Math.floor((this.selectedCheckerY+this.checkerSize/2)/this.boardSizePx*this.BOARD_SIZE)]}static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkers"]],viewQuery:function(n,c){if(1&n&&(e.Gf(E,5),e.Gf(J,5)),2&n){let i;e.iGM(i=e.CRH())&&(c.contentContainerRef=i.first),e.iGM(i=e.CRH())&&(c.checkersBoardRef=i.first)}},hostBindings:function(n,c){1&n&&e.NdJ("keydown.escape",function(s){return c.onKeydownHandler(s)},!1,e.evT)},standalone:!0,features:[e.jDz],decls:33,vars:33,consts:[[1,"w-full","max-w-screen","px-4","md:px-6"],[1,"flex","flex-col","md:flex-row","gap-4","mt-6","md:mt-8"],["contentContainer",""],[1,"mt-0.5","lg:mt-1","outline","outline-2","lg:outline-4","outline-gray-700","dark:outline-gray-100","flex","flex-col","relative",3,"ngStyle"],["checkersBoard",""],[1,"checker","z-20",3,"ngStyle","ngClass"],[1,"checker-top",3,"ngStyle"],["class","text-md md:text-xl uppercase absolute -top-6 md:-top-8",3,"ngStyle",4,"ngFor","ngForOf"],["class","text-md md:text-xl uppercase absolute -left-3 md:-left-5",3,"ngStyle",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["class","w-full grow flex flex-row",4,"ngFor","ngForOf"],[1,"grow","shrink"],[1,"p-4","mb-4","text-white","text-2xl","font-semibold",3,"ngClass"],[1,"rounded-md","py-2","px-4"],[1,"font-semibold","text-lg","mb-1"],["class",""],[1,"mx-4","my-4","border-black","dark:bg-white"],["type","button","mat-button","","color","primary","class","ml-10"],["checkerDisplay",""],["turnDisplay",""],[3,"previewMode"],[1,"text-md","md:text-xl","uppercase","absolute","-top-6","md:-top-8",3,"ngStyle"],[1,"text-md","md:text-xl","uppercase","absolute","-left-3","md:-left-5",3,"ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","absolute z-10 highlight",3,"ngStyle",4,"ngIf"],["class","absolute z-10 border-white border-2 rounded-full",3,"ngStyle","mousedown","touchstart",4,"ngIf"],[1,"absolute","z-10","highlight",3,"ngStyle"],[1,"absolute","z-10","border-white","border-2","rounded-full",3,"ngStyle","mousedown","touchstart"],[1,"w-full","grow","flex","flex-row"],["class","h-full grow relative",3,"id","ngClass",4,"ngFor","ngForOf"],[1,"h-full","grow","relative",3,"id","ngClass"],[1,""],[1,"flex","flex-row","justify-between","mt-2"],[1,"flex","flex-row","gap-1"],["class","bg-red-700 rounded-full h-4 w-4",3,"matTooltip","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"flex","flex-row-reverse","gap-1"],["class","bg-gray-700 rounded-full h-4 w-4",3,"matTooltip","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"bg-red-700","rounded-full","h-4","w-4",3,"matTooltip","mouseenter","mouseleave"],[1,"bg-gray-700","rounded-full","h-4","w-4",3,"matTooltip","mouseenter","mouseleave"],[1,"flex","flex-col","mt-4"],["class","flex flex-row items-start",4,"ngFor","ngForOf"],[1,"flex","flex-row","items-start"],[4,"ngIf"],["type","button","mat-button","","color","primary",1,"ml-10",3,"click"],[1,"flex","gap-2","items-center"],["svgIcon","heroicons_outline:chevron-down"],["svgIcon","heroicons_outline:chevron-up"],[1,"checker","z-10",3,"ngStyle","ngClass","touchstart","mousedown"],["class","z-10 highlight",3,"ngStyle",4,"ngFor","ngForOf"],[1,"z-10","highlight",3,"ngStyle"],[1,"w-full","flex","flex-row","gap-x-1","items-center","my-1","flex-wrap","md:flex-nowrap"],[1,"block","w-[3.5rem]"],[1,"block","w-[6rem]","text-white","mr-6","px-1",3,"ngClass"],["class","cursor-pointer hover:outline outline-green-500",3,"mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"cursor-pointer","hover:outline","outline-green-500",3,"mouseenter","mouseleave"],[1,"ml-8","mr-2"],["class","rounded-full h-4 w-4",3,"ngClass","matTooltip","mouseenter","mouseleave",4,"ngFor","ngForOf"],[1,"rounded-full","h-4","w-4",3,"ngClass","matTooltip","mouseenter","mouseleave"]],template:function(n,c){1&n&&(e.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3,4)(5,"span",5),e._UZ(6,"span",6),e.qZA(),e.YNc(7,F,2,4,"div",7)(8,B,2,4,"div",8)(9,R,2,4,"ng-container",9)(10,W,3,2,"ng-container",9)(11,G,2,1,"div",10),e.qZA(),e.TgZ(12,"div",11)(13,"h4",12),e._uU(14),e.qZA(),e.TgZ(15,"div",13)(16,"p",14),e._uU(17," Captured Pieces "),e.qZA(),e.YNc(18,D,2,0,"p",15)(19,X,10,2),e.qZA(),e._UZ(20,"mat-divider",16),e.TgZ(21,"div",13)(22,"p",14),e._uU(23," Turn History "),e.qZA(),e.YNc(24,V,2,0,"p",15)(25,re,2,1)(26,le,4,1,"button",17),e.qZA(),e._UZ(27,"mat-divider",16),e.qZA()(),e.YNc(28,_e,3,16,"ng-template",null,18,e.W1O)(30,Ce,7,8,"ng-template",null,19,e.W1O),e._UZ(32,"app-checkers-blog",20),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngStyle",e.WLB(15,S,c.boardSizePx,c.boardSizePx)),e.xp6(2),e.Q6J("ngStyle",e.l5B(18,fe,c.checkerSize,c.checkerSize,c.selectedCheckerX,c.selectedCheckerY))("ngClass",e.kEZ(23,ke,"p1"===c.currentPlayerId,"p2"===c.currentPlayerId,!c.selectedChecker)),e.xp6(1),e.Q6J("ngStyle",e.WLB(27,S,c.checkerSize,c.checkerSize)),e.xp6(1),e.Q6J("ngForOf",c.BOARD_COL_NAMES),e.xp6(1),e.Q6J("ngForOf",c.BOARD_ROW_NAMES),e.xp6(1),e.Q6J("ngForOf",c.board.checkers),e.xp6(1),e.Q6J("ngForOf",c.board.requiredMoves),e.xp6(1),e.Q6J("ngForOf",c.BOARD_SIZE_ARR),e.xp6(2),e.Q6J("ngClass",e.WLB(30,M,"p2"===c.currentPlayerId,"p1"===c.currentPlayerId)),e.xp6(1),e.hij(" ","p1"===c.currentPlayerId?"Player 1's turn":"Player 2's turn"," "),e.xp6(4),e.um2(18,null!=c.board.p2PiecesCaptured&&c.board.p2PiecesCaptured.length||c.board.p1PiecesCaptured.length?19:18),e.xp6(6),e.um2(24,null!=c.board.turns&&c.board.turns.length?25:24),e.xp6(2),e.um2(26,c.board.turns.length>3?26:-1),e.xp6(6),e.Q6J("previewMode",!0))},dependencies:[d.ez,d.mk,d.sg,d.O5,d.tP,d.PC,f.Ps,f.Hw,C.ot,C.lW,v.t,v.d,I,O.AV,O.gM,H.H],styles:['.checker[_ngcontent-%COMP%]{position:absolute;border-radius:9999px}.checker[_ngcontent-%COMP%]   .checker-top[_ngcontent-%COMP%]{position:relative;display:block}.checker[_ngcontent-%COMP%]   .checker-top[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-8% 0 0 -8%;height:100%;width:100%;border-radius:9999px}.checker.checker-red[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(153 27 27 / var(--tw-bg-opacity))}[_ngcontent-%COMP%]:is(.dark   .checker.checker-red)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(127 29 29 / var(--tw-bg-opacity))}.checker.checker-red[_ngcontent-%COMP%]   .checker-top[_ngcontent-%COMP%]:after{--tw-bg-opacity: 1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))}.checker.checker-black[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}[_ngcontent-%COMP%]:is(.dark   .checker.checker-black)[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(15 23 42 / var(--tw-bg-opacity))}.checker.checker-black[_ngcontent-%COMP%]   .checker-top[_ngcontent-%COMP%]:after{--tw-bg-opacity: 1;background-color:rgb(71 85 105 / var(--tw-bg-opacity))}.highlight[_ngcontent-%COMP%]{background:radial-gradient(circle,rgb(255,255,0),rgba(255,255,0,0));position:absolute;display:block;border-radius:9999px;opacity:.5}.inset-hover-shadow[_ngcontent-%COMP%]{background:radial-gradient(circle,rgba(255,255,0,0),rgb(255,255,0))}'],data:{animation:[T.L]}})}return o})();var ve=p(2082);const Se=["pageTitle"];function be(o,r){1&o&&(e.TgZ(0,"div",12)(1,"p"),e._uU(2," I'm a full-stack software engineer with a specialty in front-end development. "),e.qZA(),e.TgZ(3,"p",13),e._uU(4," My experience ranges from media and HR tech to finance and telecommunications. "),e.qZA()()),2&o&&e.Q6J("@expandCollapse",void 0)}function we(o,r){1&o&&(e.TgZ(0,"div",12)(1,"a",14)(2,"div",15)(3,"span"),e._uU(4,"Checkers"),e.qZA(),e._UZ(5,"mat-icon",16),e.qZA()()()),2&o&&(e.Q6J("@expandCollapse",void 0),e.xp6(1),e.Q6J("color","primary")("routerLink","/checkers"),e.xp6(4),e.Q6J("svgIcon","heroicons_mini:arrow-long-right"))}function Te(o,r){1&o&&(e.TgZ(0,"div",12)(1,"p",13),e._uU(2," None yet! "),e.qZA()()),2&o&&e.Q6J("@expandCollapse",void 0)}const b=o=>({"-rotate-90":o}),ye=[{path:"",component:(()=>{class o{set pageTitleHover(t){this._pageTitleHover=t,this._triggerPageTitleAnimation(t)}get pageTitleHover(){return this._pageTitleHover}constructor(t){this._renderer=t,this._pageTitleHover=!1,this._pageTitleStyles={fontWeight:100}}ngAfterViewInit(){this._updatePageTitleStyle()}clickSubSection(t){this.openSubSection=this.openSubSection===t?void 0:t}_updatePageTitleStyle(){this._renderer.setStyle(this.pageTitle.nativeElement,"font-weight",this._pageTitleStyles.fontWeight)}_triggerPageTitleAnimation(t){clearInterval(this._pageTitleAnimationInterval),this._pageTitleAnimationInterval=setInterval(()=>{this._updatePageTitleStyle(),t?this._pageTitleStyles.fontWeight>=900?clearInterval(this._pageTitleAnimationInterval):this._pageTitleStyles.fontWeight+=100:this._pageTitleStyles.fontWeight<=100?clearInterval(this._pageTitleAnimationInterval):this._pageTitleStyles.fontWeight-=100},40)}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(e.Qsj))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["home"]],viewQuery:function(n,c){if(1&n&&e.Gf(Se,5),2&n){let i;e.iGM(i=e.CRH())&&(c.pageTitle=i.first)}},standalone:!0,features:[e.jDz],decls:25,vars:12,consts:[[1,"w-full","flex","flex-col"],[1,"w-full","flex","justify-center","px-4","mb-16","mt-8","md:mt-16",3,"mouseenter","mouseleave","click"],[1,"w-full","max-w-3xl"],[1,"text-[5rem]","md:text-[10rem]","leading-[.9]","hover-text"],["pageTitle",""],[1,"w-full","flex","flex-col","items-center","py-10","px-4","bg-blue-200","dark:bg-sky-800"],[1,"w-full","max-w-3xl","prose","prose-lg","border","border-black","p-4","rounded-lg","mb-3","cursor-pointer","hover:shadow-2xl",3,"click"],[1,"flex","flex-row","justify-between","items-center"],[1,"my-0"],["svgIcon","heroicons_outline:chevron-down",1,"transition-all","duration-[225ms]",3,"ngClass"],["class","mt-8",4,"ngIf"],[1,"w-full","max-w-3xl","prose","prose-lg","border","border-black","p-4","rounded-lg","cursor-pointer","hover:shadow-2xl",3,"click"],[1,"mt-8"],[1,"mb-0"],["mat-flat-button","",1,"text-lg",3,"color","routerLink"],[1,"flex","flex-row","gap-2","items-center"],[1,"icon-size-5",3,"svgIcon"]],template:function(n,c){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("mouseenter",function(){return c.pageTitleHover=!0})("mouseleave",function(){return c.pageTitleHover=!1})("click",function(){return c.pageTitleHover=!c.pageTitleHover}),e.TgZ(2,"div",2)(3,"h1",3,4),e._uU(5," Lucas Sanders "),e.qZA()()(),e.TgZ(6,"div",5)(7,"div",6),e.NdJ("click",function(){return c.clickSubSection("about")}),e.TgZ(8,"div",7)(9,"h2",8),e._uU(10," About Me "),e.qZA(),e._UZ(11,"mat-icon",9),e.qZA(),e.YNc(12,be,5,1,"div",10),e.qZA(),e.TgZ(13,"div",6),e.NdJ("click",function(){return c.clickSubSection("projects")}),e.TgZ(14,"div",7)(15,"h2",8),e._uU(16," Projects "),e.qZA(),e._UZ(17,"mat-icon",9),e.qZA(),e.YNc(18,we,6,4,"div",10),e.qZA(),e.TgZ(19,"div",11),e.NdJ("click",function(){return c.clickSubSection("blogs")}),e.TgZ(20,"div",7)(21,"h2",8),e._uU(22," Blog Posts "),e.qZA(),e._UZ(23,"mat-icon",9),e.qZA(),e.YNc(24,Te,3,1,"div",10),e.qZA()()()),2&n&&(e.xp6(11),e.Q6J("ngClass",e.VKq(6,b,"about"!==c.openSubSection)),e.xp6(1),e.Q6J("ngIf","about"===c.openSubSection),e.xp6(5),e.Q6J("ngClass",e.VKq(8,b,"projects"!==c.openSubSection)),e.xp6(1),e.Q6J("ngIf","projects"===c.openSubSection),e.xp6(5),e.Q6J("ngClass",e.VKq(10,b,"blogs"!==c.openSubSection)),e.xp6(1),e.Q6J("ngIf","blogs"===c.openSubSection))},dependencies:[d.mk,C.ot,C.zs,ve.rH,v.t,f.Ps,f.Hw,d.O5],encapsulation:2,data:{animation:T.L}})}return o})()},{path:"checkers",component:xe}]}}]);