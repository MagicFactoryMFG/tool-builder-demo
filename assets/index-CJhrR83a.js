(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();function Me(e){const t=(e||"").toLowerCase();return t==="probe"?null:t.includes("mill")?"endmill":t.includes("tap")?"tap":t.includes("drill")?"drill":"endmill"}function be(e,t){const i=Array.isArray(e?.data)?e.data:[],o=[];for(const s of i){const a=Me(s?.type);if(!a)continue;const n=s?.geometry??{},d=n.DC,h=n.LB;if(typeof d!="number"||typeof h!="number"||d<=0||h<=0)continue;const g=s?.unit==="millimeters"?1:25.4,f=m=>typeof m=="number"?+(m*g).toFixed(3):void 0,r=s?.holder,l=r?.unit==="millimeters"?1:25.4,p=r?{description:typeof r.description=="string"?r.description:void 0,vendor:typeof r.vendor=="string"?r.vendor:void 0,gaugeLengthMm:typeof r.gaugeLength=="number"?+(r.gaugeLength*l).toFixed(3):void 0,segments:Array.isArray(r.segments)?r.segments.filter(m=>typeof m?.height=="number").map(m=>({heightMm:m.height*l,lowerDiaMm:(m["lower-diameter"]??0)*l,upperDiaMm:(m["upper-diameter"]??0)*l})):[]}:void 0,y=n.profile;let w=Array.isArray(y)?y.filter(m=>Array.isArray(m?.end)&&m.end.length===2).map(m=>[m.end[0]*g,m.end[1]*g]):void 0;if(w&&w.length>=3){const m=2*Math.max(...w.map(D=>D[0])),x=Math.max(d,n["shoulder-diameter"]??0,n.SFDM??0)*g;m>x*1.6&&(w=void 0)}else w=void 0;const c=s?.shaft,$=c&&Array.isArray(c.segments)?{segments:c.segments.filter(m=>typeof m?.height=="number").map(m=>({heightMm:m.height*g,lowerDiaMm:(m["lower-diameter"]??0)*g,upperDiaMm:(m["upper-diameter"]??0)*g}))}:void 0;o.push({id:s.guid??`${a}-${o.length}`,number:typeof s?.["post-process"]?.number=="number"?s["post-process"].number:void 0,type:a,fusionType:typeof s.type=="string"?s.type:void 0,diameterMm:+(d*g).toFixed(3),reachMm:+(h*g).toFixed(3),fluteMm:f(n.LCF),shankMm:f(n.SFDM),oalMm:f(n.OAL),cornerRadiusMm:f(n.RE),tipDiaMm:f(n["tip-diameter"]),taperDeg:typeof n.TA=="number"?n.TA:void 0,profileRadiusMm:f(n["profile-radius"]),upperRadiusMm:f(n["upper-radius"]),lowerRadiusMm:f(n["lower-radius"]),shoulderLenMm:f(n["shoulder-length"]),shoulderDiaMm:f(n["shoulder-diameter"]),flutes:typeof n.NOF=="number"?n.NOF:void 0,vendor:typeof s.vendor=="string"?s.vendor:void 0,material:typeof s.BMC=="string"?s.BMC:void 0,unit:s?.unit==="millimeters"?"millimeters":"inches",description:typeof s.description=="string"?s.description:void 0,holder:p,shaft:$,profileMm:w})}return{name:t,tools:o}}const ne="url(#mfSteel)",we="#4d6f93",T="url(#mfShank)",G="#6e747b",re="url(#mfShoulder)",ie="#2a2e33",C="url(#mfCut)",_="#9c6310",Le=`<defs>
  <linearGradient id="mfSteel" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5b7ea6"/><stop offset="0.4" stop-color="#bed9f2"/>
    <stop offset="0.6" stop-color="#8fb2d4"/><stop offset="1" stop-color="#52769c"/>
  </linearGradient>
  <linearGradient id="mfShank" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#9197a0"/><stop offset="0.4" stop-color="#dde1e6"/>
    <stop offset="0.6" stop-color="#b2b8bf"/><stop offset="1" stop-color="#7f868e"/>
  </linearGradient>
  <linearGradient id="mfShoulder" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3a3e44"/><stop offset="0.4" stop-color="#71767d"/>
    <stop offset="0.6" stop-color="#4b4f55"/><stop offset="1" stop-color="#2e3237"/>
  </linearGradient>
  <linearGradient id="mfCut" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#c47f18"/><stop offset="0.4" stop-color="#ffc657"/>
    <stop offset="0.6" stop-color="#f3a525"/><stop offset="1" stop-color="#b3720d"/>
  </linearGradient>
</defs>`;function ae(e,t,i,o,s){const a=(e.fusionType??"").toLowerCase(),n=i(e.diameterMm),d=t-n/2,h=o+s;if(e.type==="drill"){const r=Math.max(s-n*.6,0);return`<rect x="${d}" y="${o}" width="${n}" height="${r}" fill="${C}" stroke="${_}" stroke-width="0.4"/><polygon points="${d},${o+r} ${d+n},${o+r} ${t},${h}" fill="${C}" stroke="${_}" stroke-width="0.4"/>`}if(a.includes("ball")){const r=n/2;return`<path d="M ${d} ${o} h ${n} v ${Math.max(s-r,0)} a ${r} ${r} 0 0 1 ${-n} 0 z" fill="${C}" stroke="${_}" stroke-width="0.4"/>`}if(a.includes("chamfer")||a.includes("engrav")){const r=i(Math.max(e.tipDiaMm??0,0)),l=e.taperDeg??0,p=l>0&&l<90?Math.min((n-r)/2/Math.tan(l*Math.PI/180),s):s,y=h-p;return`${y>o+.1?`<rect x="${d}" y="${o}" width="${n}" height="${y-o}" fill="${C}" stroke="${_}" stroke-width="0.4"/>`:""}<polygon points="${d},${y} ${d+n},${y} ${t+r/2},${h} ${t-r/2},${h}" fill="${C}" stroke="${_}" stroke-width="0.4"/>`}if(a.includes("face")){const r=i(Math.max(e.shoulderDiaMm??e.diameterMm,e.diameterMm));return`<polygon points="${t-r/2},${o} ${t+r/2},${o} ${d+n},${h} ${d},${h}" fill="${C}" stroke="${_}" stroke-width="0.4"/>`}const g=`fill="${C}" stroke="${_}" stroke-width="0.4"`;if(a.includes("lollipop")){const r=n/2;return`<circle cx="${t}" cy="${h-r}" r="${r}" ${g}/>`}if(a.includes("dovetail")){const r=(e.taperDeg??0)*Math.PI/180,l=Math.max(n/2-s*Math.tan(r),n*.12);return`<polygon points="${t-l},${o} ${t+l},${o} ${d+n},${h} ${d},${h}" ${g}/>`}if(a.includes("circle segment")||a.includes("barrel")){const r=n/2,l=i(e.profileRadiusMm??e.diameterMm*3);if(a.includes("barrel")){const y=s/2,w=l-Math.sqrt(Math.max(l*l-y*y,0)),c=Math.max(r-w,n*.1),$=o+y;return`<path d="M ${t-c} ${o} A ${l} ${l} 0 0 0 ${t-r} ${$} A ${l} ${l} 0 0 0 ${t-c} ${h} L ${t+c} ${h} A ${l} ${l} 0 0 1 ${t+r} ${$} A ${l} ${l} 0 0 1 ${t+c} ${o} Z" ${g}/>`}const p=i((e.tipDiaMm??0)/2);return`<path d="M ${t-r} ${o} L ${t+r} ${o} A ${l} ${l} 0 0 1 ${t+p} ${h} L ${t-p} ${h} A ${l} ${l} 0 0 1 ${t-r} ${o} Z" ${g}/>`}if(a.includes("radius")){const r=i(e.cornerRadiusMm??0),l=n/2,p=l+r,y=h-r;return`<path d="M ${t-p} ${o} L ${t+p} ${o} L ${t+p} ${y} A ${r} ${r} 0 0 0 ${t+l} ${h} L ${t-l} ${h} A ${r} ${r} 0 0 0 ${t-p} ${y} Z" ${g}/>`}if(a.includes("thread")){const r=Math.min(n*.18,s*.45),l=`M ${d} ${o} h ${n} v ${s-r} l ${-r} ${r} h ${-(n-2*r)} l ${-r} ${-r} z`,p="mfThread",y=Math.max(2,Math.min(8,Math.round(s/3))),w=s/y;let c="";for(let $=0;$<=y+1;$++){const m=o+$*w;c+=`<line x1="${d}" y1="${m}" x2="${d+n}" y2="${m-w}" stroke="${_}" stroke-width="0.5"/>`}return`<clipPath id="${p}"><path d="${l}"/></clipPath><path d="${l}" fill="${C}" stroke="${_}" stroke-width="0.4"/><g clip-path="url(#${p})">${c}</g>`}const f=Math.min(i(e.cornerRadiusMm??0),s*.5,n*.5);return`<path d="M ${d} ${o} h ${n} v ${s-f} a ${f} ${f} 0 0 1 ${-f} ${f} h ${-(n-2*f)} a ${f} ${f} 0 0 1 ${-f} ${-f} z" fill="${C}" stroke="${_}" stroke-width="0.4"/>`}function pe(e,t=200,i=420){const s=e.holder?.segments??[],a=s.length?s.reduce((u,L)=>u+L.heightMm,0):Math.max(e.reachMm*.25,5),n=e.reachMm,d=Math.min(e.fluteMm??n,n),h=Math.min(e.shoulderLenMm??d,n),g=e.shaft?.segments??[],f=g.reduce((u,L)=>u+L.heightMm,0),r=e.profileMm,l=r?n:g.length?Math.max(d+f,n):n,p=a+l,y=Math.max(e.diameterMm,e.shankMm??0,...s.map(u=>Math.max(u.lowerDiaMm,u.upperDiaMm)),...g.map(u=>Math.max(u.lowerDiaMm,u.upperDiaMm)),...r?r.map(u=>u[0]*2):[]),w=Math.min((i-16*2)/p,(t-16*2)/Math.max(y,.1)),c=u=>u*w,$=t/2,m=p*w+16*2,x=[];let D=16;if(s.length)for(const u of[...s].reverse()){const L=c(u.upperDiaMm),M=c(u.lowerDiaMm),b=c(u.heightMm);x.push(`<polygon points="${$-L/2},${D} ${$+L/2},${D} ${$+M/2},${D+b} ${$-M/2},${D+b}" fill="${ne}" stroke="${we}" stroke-width="0.4"/>`),D+=b}else{const u=c((e.shankMm??e.diameterMm)*2.2);x.push(`<rect x="${$-u/2}" y="${D}" width="${u}" height="${c(a)}" rx="2" fill="${ne}"/>`),D+=c(a)}const J=D+c(l),F=u=>J-c(u);if(r){const u=[];for(let M=0;M<r.length;M++){const[b,k]=r[M];if(k<=n+1e-6)u.push([b,Math.min(k,n)]);else{const[A,S]=r[M-1]??[b,k];S<n&&u.push([A+(b-A)*((n-S)/(k-S)),n]);break}}const L=u.map(([M,b])=>`${$+c(M)},${F(b)}`).join(" ")+" "+[...u].reverse().map(([M,b])=>`${$-c(M)},${F(b)}`).join(" ");x.push(`<polygon points="${L}" fill="${T}" stroke="${G}" stroke-width="0.4"/>`),x.push(`<clipPath id="mfFluteClip"><rect x="0" y="${F(d)}" width="${t}" height="${J-F(d)}"/></clipPath><polygon points="${L}" fill="${C}" stroke="${_}" stroke-width="0.4" clip-path="url(#mfFluteClip)"/>`)}else if(g.length){const u=Math.max(n-(d+f),0);if(u>0){const M=c(g[g.length-1].upperDiaMm),b=F(d+f),k=F(d+f+u);x.push(`<rect x="${$-M/2}" y="${k}" width="${M}" height="${b-k}" fill="${T}" stroke="${G}" stroke-width="0.4"/>`)}let L=d;for(const M of g){const b=L+M.heightMm,k=S=>M.lowerDiaMm+(M.upperDiaMm-M.lowerDiaMm)*(S-L)/(M.heightMm||1),A=[L,b];h>L+1e-6&&h<b-1e-6&&A.splice(1,0,h);for(let S=0;S<A.length-1;S++){const B=A[S],X=A[S+1],Q=c(k(B)),ee=c(k(X)),te=F(B),se=F(X),oe=(B+X)/2<h-1e-6,ve=oe?re:T,ye=oe?ie:G;x.push(`<polygon points="${$-ee/2},${se} ${$+ee/2},${se} ${$+Q/2},${te} ${$-Q/2},${te}" fill="${ve}" stroke="${ye}" stroke-width="0.4"/>`)}L=b}x.push(ae(e,$,c,F(d),c(d)))}else{const u=(e.fusionType??"").toLowerCase(),L=(e.shankMm??e.diameterMm)<e.diameterMm*.9,M=/circle segment|barrel|lollipop|dovetail|lens|oval/.test(u),b=c(e.diameterMm),k=L||M?0:Math.max(h-d,0),A=Math.max(n-d-k,0),S=c(e.shankMm??e.diameterMm);let B=D;A>0&&(x.push(`<rect x="${$-S/2}" y="${B}" width="${S}" height="${c(A)}" fill="${T}" stroke="${G}" stroke-width="0.4"/>`),B+=c(A)),k>0&&(x.push(`<rect x="${$-b/2}" y="${B}" width="${b}" height="${c(k)}" fill="${re}" stroke="${ie}" stroke-width="0.4"/>`),B+=c(k)),x.push(ae(e,$,c,B,c(d)))}return`<svg width="${t}" height="${m}" viewBox="0 0 ${t} ${m}">${Le}${x.join("")}</svg>`}const ue="Helical H35AL-3 — 3 Flute Ball 35° Helix",P=e=>typeof e=="number"?`${+(e/25.4).toFixed(4)} in`:"—",ke=await fetch("./library.tools"),Y=await ke.json(),W=be(Y,ue),O=new Map;for(const e of Y.data??[])O.set(e.guid,e);const Ee=["Milling","Hole making","Turning","Cutting","Probe","Holders","Depositing"],xe=()=>"Milling",v={selected:W.tools[0]?.id??null,search:"",category:"Milling",cdSearch:"",tab:"Info"},Se=document.getElementById("app");Se.innerHTML=`
  <div class="titlebar">Tool Library <span class="brandchip">Tool Builder · Magic Factory</span></div>
  <div class="leftpane">
    <div class="toolbar">
      <div class="spacer"></div>
      <button class="clear" id="clearBtn">Clear filters</button>
    </div>
    <div class="list-wrap"><table class="tl">
      <thead><tr><th class="gear"></th><th class="col-name">Name ▲</th><th class="cr">Corner radius</th></tr></thead>
      <tbody id="listBody"></tbody>
    </table></div>
    <div class="cutting">
      <div class="ch"><b>Cutting data</b>
        <input class="cd-search" id="cdSearch" placeholder="Filter by search" />
      </div>
      <div class="cd-wrap" id="cdWrap"></div>
    </div>
  </div>
  <div class="rightpane">
    <div class="tabs">
      <div class="tab" data-tab="Filters">Filters</div>
      <div class="tab" data-tab="Info">Info</div>
    </div>
    <div class="tabbody" id="tabBody"></div>
  </div>`;const Z=document.getElementById("listBody"),z=document.getElementById("cdWrap"),K=document.getElementById("tabBody");function fe(){const e=v.search.trim().toLowerCase();return W.tools.filter(t=>!(v.category&&xe()!==v.category||e&&!(t.description??t.id).toLowerCase().includes(e)))}function N(){const e=fe(),t=e.map(i=>{const o=O.get(i.id),s=`⌀${(i.diameterMm/25.4).toFixed(3)}" (HELICAL · ${o?.["product-id"]??""} · ${(i.description??"").replace(/^.*?"\s*/,"")})`;return`<tr class="tool ${i.id===v.selected?"sel":""}" data-id="${i.id}">
        <td class="icon">${pe(i,20,46)}</td>
        <td class="col-name" title="${(i.description??"").replace(/"/g,"&quot;")}">${s}</td>
        <td class="cr">${P(i.cornerRadiusMm)}</td>
      </tr>`}).join("");Z.innerHTML=`<tr class="grouprow"><td colspan="3">${ue} (${e.length})</td></tr>`+(t||'<tr><td colspan="3" class="cd-empty">No tools match.</td></tr>')}let U=[];function V(){const t=((v.selected?O.get(v.selected):null)?.["start-values"]?.presets??[]).filter(i=>i.name.toLowerCase().includes(v.cdSearch.trim().toLowerCase()));if(U=t,!v.selected){z.innerHTML='<div class="cd-empty">Select a tool</div>';return}if(!t.length){z.innerHTML='<div class="cd-empty">No cutting data.</div>';return}z.innerHTML=`<div class="cd-hint">Click a preset name to see its full parameters.</div>
    <table class="cd">
    <thead><tr><th>Name</th><th>Spindle speed</th><th>Cutting feedrate</th><th>Feed/tooth</th><th>Ramp spindle</th></tr></thead>
    <tbody>${t.map((i,o)=>`<tr>
      <td class="pname" data-pi="${o}">${i.name}</td>
      <td>${Math.round(i.n)} rpm</td>
      <td>${R(i.v_f)}</td>
      <td>${H(i.f_z,5)}</td>
      <td>${Math.round(i.n_ramp)} rpm</td>
    </tr>`).join("")}</tbody></table>`}const le=e=>typeof e=="number"?`${Math.round(e)} rpm`:"—",R=e=>typeof e=="number"?`${+e.toFixed(3)} in/min`:"—",H=(e,t=4)=>typeof e=="number"?`${+e.toFixed(t)} in`:"—",I=document.getElementById("pe-overlay"),de=e=>e.replace(/"/g,"&quot;");function he(e,t){return t?`<div class="pe-control driven" data-val="${de(e)}" data-expr="${de(t)}"><div class="pe-vwrap"><div class="val">${e}</div></div><span class="fx">𝑓ₓ</span></div>`:`<div class="pe-control"><div class="pe-vwrap"><div class="val">${e}</div></div></div>`}function E(e,t,i){return`<div class="pe-row"><label>${e}</label>${he(t,i)}</div>`}function ce(e,t,i,o){return`<div class="pe-row"><label>${e}</label><input type="checkbox" class="chk" ${t?"checked":""} disabled/>${he(t?i:"—",t?o:void 0)}</div>`}function $e(e){const t=v.selected?O.get(v.selected):null,i=(e.description??"").length>0,o=e.expressions??{},s=!!o.tool_spindleSpeed,a=typeof e.v_f_plunge=="number"&&e.n?e.v_f_plunge/e.n:void 0,n=typeof e.v_c=="number"?`${Math.round(e.v_c)} ft/min`:"—";I.innerHTML=`<div class="pe-card">
    <div class="pe-head">
      <div><div class="pe-title">${e.name}</div><div class="pe-sub">${t?.description??""}</div></div>
      <button class="pe-close" id="peClose">&times;</button>
    </div>
    <div class="pe-body">
      <div class="pe-hint">Click a value to see its expression. 𝑓ₓ marks values driven by a formula.</div>
      <div class="pe-group"><h4>Speed</h4>
        ${E("Spindle speed",le(e.n),s?void 0:"tool_surfaceSpeed × 12 ÷ (π × tool_diameter)")}
        ${E("Surface speed",n,s?"tool_spindleSpeed × π × tool_diameter ÷ 12":void 0)}
        ${E("Ramp spindle speed",le(e.n_ramp))}
      </div>
      <div class="pe-group"><h4>Feedrates</h4>
        ${E("Cutting feedrate",R(e.v_f),"tool_spindleSpeed × tool_feedPerTooth × flutes")}
        ${E("Feed per tooth",H(e.f_z,5),o.tool_feedPerTooth)}
        ${E("Lead-in feedrate",R(e.v_f_leadIn),o.tool_feedEntry)}
        ${E("Lead-out feedrate",R(e.v_f_leadOut),o.tool_feedExit)}
        ${E("Transition feedrate",R(e.v_f_transition),o.tool_feedTransition)}
        ${E("Ramp feedrate",R(e.v_f_ramp),o.tool_feedRamp)}
        ${E("Ramp angle",typeof e["ramp-angle"]=="number"?`${e["ramp-angle"]} degrees`:"—")}
      </div>
      <div class="pe-group"><h4>Vertical feedrates</h4>
        ${E("Plunge feedrate",R(e.v_f_plunge))}
        ${E("Plunge feed per revolution",H(a,4),"tool_feedPlunge ÷ tool_spindleSpeed")}
        ${E("Retract feedrate",R(e.v_f_retract))}
      </div>
      <div class="pe-group"><h4>Passes and linking</h4>
        ${ce("Use stepdown (ADOC)",!!e["use-stepdown"],H(e.stepdown),o.tool_stepdown)}
        ${ce("Use stepover (RDOC)",!!e["use-stepover"],H(e.stepover),o.tool_stepover)}
      </div>
      <div class="pe-group"><h4>Coolant</h4>
        ${E("Coolant",e["tool-coolant"]??"—")}
      </div>
      ${i?`<div class="pe-note">⚠ ${e.description}</div>`:""}
    </div></div>`,I.style.display="flex"}function me(){I.style.display="none",I.innerHTML=""}function j(){document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.dataset.tab===v.tab)),K.innerHTML=v.tab==="Info"?De():Ae(),v.tab==="Info"&&_e()}function De(){const e=v.selected?W.tools.find(s=>s.id===v.selected):null,t=v.selected?O.get(v.selected):null;if(!e||!t)return'<div class="info-empty">Select a tool to see its preview and geometry.</div>';const i=t.geometry??{},o=(s,a)=>`<tr><td class="k">${s}</td><td class="v">${a}</td></tr>`;return`
    <div class="breadcrumb">Tool Builder › Helical › <b>${Y.version?"H35AL-3":""}</b></div>
    <div class="info-title">${t.description??e.id}</div>
    <div class="preview" id="preview">
      <span class="axis az">+Z</span><span class="axis ax">+X</span>
      <span class="scalebar">drag to pan · scroll to zoom · dbl-click reset</span>
      ${pe(e,200,420)}
    </div>
    <table class="props">
      ${o("Description",t.description??"—")}
      ${o("Vendor",t.vendor??"—")}
      ${o("Product id",String(t["product-id"]??"—"))}
      ${o("Product link",t["product-link"]?`<a href="${t["product-link"]}" target="_blank">${t["product-link"]}</a>`:"—")}
      ${o("Diameter",P(e.diameterMm))}
      ${o("Shaft diameter",P(e.shankMm))}
      ${o("Overall length",P(e.oalMm))}
      ${o("Length below holder",P(e.reachMm))}
      ${o("Shoulder length",P(e.shoulderLenMm))}
      ${o("Flute length",P(e.fluteMm))}
      ${o("Corner radius",P(e.cornerRadiusMm))}
      ${o("Number of flutes",String(e.flutes??i.NOF??"—"))}
      ${o("Type",t.type??"—")}
      ${o("Unit",t.unit??"—")}
      ${o("Clockwise spindle",i.HAND?"true":"false")}
    </table>`}function Ae(){const e=Ee.map(t=>{const i=t==="Milling"?W.tools.length:0,o=i===0;return`<label class="filter-row ${o?"disabled":""}">
      <input type="radio" name="cat" value="${t}" ${v.category===t?"checked":""} ${o?"disabled":""}/>
      ${t}<span class="count">${i}</span></label>`}).join("");return`
    <input class="filter-search" id="filterSearch" placeholder="Search tools…" value="${v.search}" />
    <div class="filter-group"><h4>Tool category</h4>${e}</div>`}function _e(){const e=document.getElementById("preview"),t=e?.querySelector("svg");if(!e||!t)return;const i=parseFloat(t.getAttribute("width")||"200"),o=parseFloat(t.getAttribute("height")||"420");let s=1,a=0,n=0;const d=()=>t.style.transform=`translate(${a}px,${n}px) scale(${s})`,h=()=>{const p=e.getBoundingClientRect();s=Math.min(p.width/i,p.height/o)*.9,a=(p.width-i*s)/2,n=(p.height-o*s)/2,d()};t.style.transformOrigin="0 0",h(),e.addEventListener("wheel",p=>{p.preventDefault();const y=e.getBoundingClientRect(),w=p.clientX-y.left,c=p.clientY-y.top,$=Math.min(Math.max(s*(p.deltaY<0?1.12:1/1.12),.2),12);a=w-(w-a)/s*$,n=c-(c-n)/s*$,s=$,d()},{passive:!1});let g=!1,f=0,r=0;e.addEventListener("pointerdown",p=>{g=!0,f=p.clientX,r=p.clientY,e.classList.add("grabbing"),e.setPointerCapture(p.pointerId)}),e.addEventListener("pointermove",p=>{g&&(a+=p.clientX-f,n+=p.clientY-r,f=p.clientX,r=p.clientY,d())});const l=()=>{g=!1,e.classList.remove("grabbing")};e.addEventListener("pointerup",l),e.addEventListener("pointercancel",l),e.addEventListener("dblclick",h)}function ge(e,t=!1){v.selected=e,N(),V(),j(),t&&Z.querySelector("tr.tool.sel")?.scrollIntoView({block:"nearest"})}function q(e){const t=fe();if(!t.length)return;const i=t.findIndex(s=>s.id===v.selected),o=i<0?0:Math.min(Math.max(i+e,0),t.length-1);ge(t[o].id,!0)}Z.addEventListener("click",e=>{const t=e.target.closest("tr.tool");t&&ge(t.getAttribute("data-id"))});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&I.style.display==="flex"){me();return}const t=document.activeElement;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||(e.key==="ArrowDown"?(e.preventDefault(),q(1)):e.key==="ArrowUp"?(e.preventDefault(),q(-1)):e.key==="Home"?(e.preventDefault(),q(-9999)):e.key==="End"&&(e.preventDefault(),q(9999)))});document.getElementById("cdSearch").addEventListener("input",e=>{v.cdSearch=e.target.value,V()});z.addEventListener("click",e=>{const t=e.target.closest("td.pname");if(!t)return;const i=U[Number(t.dataset.pi)];i&&$e(i)});I.addEventListener("click",e=>{const t=e.target;if(t.id==="pe-overlay"||t.closest(".pe-close")){me();return}const i=t.closest(".pe-control.driven");if(i){const o=i.classList.contains("show-expr");if(I.querySelectorAll(".pe-control.driven.show-expr").forEach(s=>{s.classList.remove("show-expr");const a=s.querySelector(".val");a.textContent=s.getAttribute("data-val"),a.classList.remove("is-expr")}),!o){i.classList.add("show-expr");const s=i.querySelector(".val");s.textContent=i.getAttribute("data-expr"),s.classList.add("is-expr")}}});document.querySelector(".tabs").addEventListener("click",e=>{const t=e.target.closest(".tab");t&&(v.tab=t.dataset.tab,j())});document.getElementById("clearBtn").addEventListener("click",()=>{v.search="",v.category="Milling",N(),j()});K.addEventListener("input",e=>{const t=e.target;t.id==="filterSearch"&&(v.search=t.value,N())});K.addEventListener("change",e=>{const t=e.target;t.name==="cat"&&(v.category=t.value,N())});N();V();j();location.hash==="#preset"&&U[0]&&$e(U[0]);
