"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[1163],{1163:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});n(4114);var a=n(6768),o=n(144),s=n(4232),c=n(1397),i=n(4373),l=n(5438);const r={key:0},u={class:"contest-row"},d=["src","alt","onClick"],v={class:"contest-scheduled"},k={class:"contest-content"},p={class:"content-title body1-medium"},g={class:"content-info"},h={class:"info-name regular-12"},m={class:"info-date caption-medium"};var f=(0,a.pM)({__name:"ContestCard",props:{alt:{},imageStyle:{}},setup(t){const e=(0,o.KR)(null),n=(0,l.Ri)("Authorization"),f=async()=>{try{const t=await i.A.get("http://jejugudgo.xyz:8080/api/v1/event?query=ALL",{headers:{Authorization:`Bearer ${n}`}}),a=t.data.content.reduce(((t,e)=>{const n=e.organization;return t[n]||(t[n]=[]),t[n].push(e),t}),{});e.value=Object.values(a).slice(0,5).map((t=>t[0])),console.log(e.value)}catch(t){console.error("Error fetching event:",t)}},C=t=>{t&&window.open(t,"_blank")};return(0,a.sV)(f),(t,n)=>e.value&&e.value.length?((0,a.uX)(),(0,a.CE)("div",r,[(0,a.Lk)("div",u,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.value,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.eventId,class:"contest-container"},[(0,a.Lk)("img",{src:e.imageUrl||"https://via.placeholder.com/220x182",alt:e.title||t.alt,class:"contest-image",onClick:t=>C(e.informationUrl)},null,8,d),(0,a.Lk)("div",v,[(0,a.bF)((0,o.R1)(c.C4),{status:"ongoing"})]),(0,a.Lk)("div",k,[(0,a.Lk)("div",p,(0,s.v_)(e.title),1),(0,a.Lk)("div",g,[(0,a.Lk)("div",h,(0,s.v_)(e.organization),1),(0,a.Lk)("div",m,(0,s.v_)(e.startDate),1)])])])))),128))])])):(0,a.Q3)("",!0)}}),C=n(1241);const L=(0,C.A)(f,[["__scopeId","data-v-39757557"]]);var y=L}}]);
//# sourceMappingURL=1163.965117f5.js.map