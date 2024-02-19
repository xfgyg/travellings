import{_ as p,E as h,o as d,b as u,w as m,m as e,a5 as i,a6 as r,a7 as g,q as f,s as v,a,c as S,J as b}from"./chunks/framework.y2TkACM8.js";const l="t_preference_",E={data:()=>({settings:{tag:"",timeout:"",page:""}}),mounted(){for(let t in this.settings){const s=this.getSettings(t);s&&(this.settings[t]=s)}},watch:{settings:{handler(t){for(let s in t)t[s]?this.setSettings(s,t[s]):this.removeSettings(s)},deep:!0}},methods:{getSettings(t){return localStorage.getItem(l+t)},removeSettings(t){localStorage.removeItem(l+t)},setSettings(t,s){localStorage.setItem(l+t,s)}}},o=t=>(f("data-v-97361aa6"),t=t(),v(),t),B={class:"container"},I={class:"main"},$=o(()=>e("h2",null,"分类跳转",-1)),k=o(()=>e("div",null,[a(" 仅跳转到指定类型的网站（当前网站分类尚未完成，设置此项后可跳转的网站可能较少）"),e("br"),a(" 杂项网站指导航、论坛、个人主页、维基文档、在线游戏等不方便加以细分的成员网站，杂项网站与博客一样具有访问的价值。 ")],-1)),y=o(()=>e("option",{value:""},"不使用分类跳转",-1)),V=o(()=>e("option",{value:"blog"},"博客网站",-1)),w=o(()=>e("option",{value:"normal"},"杂项",-1)),C=o(()=>e("option",{value:"tech"},"技术类网站（博客或维基）",-1)),N=o(()=>e("option",{value:"site"},"网站分享类博客",-1)),O=o(()=>e("option",{value:"life"},"生活类博客",-1)),P=o(()=>e("option",{value:"hybrid"},"综合类博客",-1)),U=[y,V,w,C,N,O,P],x=o(()=>e("h2",null,"跳转延时",-1)),j=o(()=>e("div",null,"在跳转页的停留时间，单位：毫秒",-1)),A=o(()=>e("h2",null,"自定义跳转页",-1)),D=o(()=>e("div",null,[a(" 默认样式看腻了？可以在此选择使用其他样式的跳转页面（"),e("a",{href:"/docs/pages"},"跳转页面一览"),a("），您也可以"),e("a",{href:"/docs/join#%E5%8F%82%E4%B8%8E%E9%A1%B9%E7%9B%AE"},"制作新的跳转页")],-1)),J=o(()=>e("option",{value:""},"使用默认跳转页",-1)),M=o(()=>e("option",null,"plain.html",-1)),T=o(()=>e("option",null,"coder-1024.html",-1)),q=[J,M,T],F=o(()=>e("br",null,null,-1)),z=o(()=>e("a",{href:"/go.html",class:"go-travelling",target:"_self"},"设置好了，继续开往吧~",-1));function G(t,s,c,R,W,X){const _=h("ClientOnly");return d(),u(_,null,{default:m(()=>[e("div",B,[e("div",I,[$,k,i(e("select",{class:"form-control","onUpdate:modelValue":s[0]||(s[0]=n=>t.settings.tag=n)},U,512),[[r,t.settings.tag]]),x,j,i(e("input",{class:"form-control",type:"number","onUpdate:modelValue":s[1]||(s[1]=n=>t.settings.timeout=n),placeholder:"不填写则取默认值“1500”"},null,512),[[g,t.settings.timeout]]),A,D,i(e("select",{class:"form-control","onUpdate:modelValue":s[2]||(s[2]=n=>t.settings.page=n)},q,512),[[r,t.settings.page]]),F,z])])]),_:1})}const H=p(E,[["render",G],["__scopeId","data-v-97361aa6"]]),K=e("h1",{id:"偏好设置",tabindex:"-1"},[a("偏好设置 "),e("a",{class:"header-anchor",href:"#偏好设置","aria-label":'Permalink to "偏好设置"'},"​")],-1),L=e("p",null,"您可以在此页面进行设置项调整。设置仅在此设备生效。",-1),Z=JSON.parse('{"title":"偏好设置","description":"","frontmatter":{},"headers":[],"relativePath":"preference.md","filePath":"preference.md","lastUpdated":1708348167000}'),Q={name:"preference.md"},ee=Object.assign(Q,{setup(t){return(s,c)=>(d(),S("div",null,[K,L,b(H)]))}});export{Z as __pageData,ee as default};
