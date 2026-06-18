import"./modulepreload-polyfill-B5Qt9EMX.js";function Me(e){const t=(e||"").toLowerCase();return t==="probe"?null:t.includes("mill")?"endmill":t.includes("tap")?"tap":t.includes("drill")?"drill":"endmill"}function be(e,t){const r=Array.isArray(e?.data)?e.data:[],s=[];for(const n of r){const p=Me(n?.type);if(!p)continue;const o=n?.geometry??{},l=o.DC,h=o.LB;if(typeof l!="number"||typeof h!="number"||l<=0||h<=0)continue;const v=n?.unit==="millimeters"?1:25.4,$=m=>typeof m=="number"?+(m*v).toFixed(3):void 0,i=n?.holder,a=i?.unit==="millimeters"?1:25.4,c=i?{description:typeof i.description=="string"?i.description:void 0,vendor:typeof i.vendor=="string"?i.vendor:void 0,gaugeLengthMm:typeof i.gaugeLength=="number"?+(i.gaugeLength*a).toFixed(3):void 0,segments:Array.isArray(i.segments)?i.segments.filter(m=>typeof m?.height=="number").map(m=>({heightMm:m.height*a,lowerDiaMm:(m["lower-diameter"]??0)*a,upperDiaMm:(m["upper-diameter"]??0)*a})):[]}:void 0,y=o.profile;let w=Array.isArray(y)?y.filter(m=>Array.isArray(m?.end)&&m.end.length===2).map(m=>[m.end[0]*v,m.end[1]*v]):void 0;if(w&&w.length>=3){const m=2*Math.max(...w.map(D=>D[0])),E=Math.max(l,o["shoulder-diameter"]??0,o.SFDM??0)*v;m>E*1.6&&(w=void 0)}else w=void 0;const d=n?.shaft,f=d&&Array.isArray(d.segments)?{segments:d.segments.filter(m=>typeof m?.height=="number").map(m=>({heightMm:m.height*v,lowerDiaMm:(m["lower-diameter"]??0)*v,upperDiaMm:(m["upper-diameter"]??0)*v}))}:void 0;s.push({id:n.guid??`${p}-${s.length}`,number:typeof n?.["post-process"]?.number=="number"?n["post-process"].number:void 0,type:p,fusionType:typeof n.type=="string"?n.type:void 0,diameterMm:+(l*v).toFixed(3),reachMm:+(h*v).toFixed(3),fluteMm:$(o.LCF),shankMm:$(o.SFDM),oalMm:$(o.OAL),cornerRadiusMm:$(o.RE),tipDiaMm:$(o["tip-diameter"]),taperDeg:typeof o.TA=="number"?o.TA:void 0,profileRadiusMm:$(o["profile-radius"]),upperRadiusMm:$(o["upper-radius"]),lowerRadiusMm:$(o["lower-radius"]),shoulderLenMm:$(o["shoulder-length"]),shoulderDiaMm:$(o["shoulder-diameter"]),flutes:typeof o.NOF=="number"?o.NOF:void 0,vendor:typeof n.vendor=="string"?n.vendor:void 0,material:typeof n.BMC=="string"?n.BMC:void 0,unit:n?.unit==="millimeters"?"millimeters":"inches",description:typeof n.description=="string"?n.description:void 0,holder:c,shaft:f,profileMm:w})}return{name:t,tools:s}}const ne="url(#mfSteel)",we="#4d6f93",O="url(#mfShank)",G="#6e747b",ie="url(#mfShoulder)",re="#2a2e33",C="url(#mfCut)",A="#9c6310",ke=`<defs>
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
</defs>`;function ae(e,t,r,s,n){const p=(e.fusionType??"").toLowerCase(),o=r(e.diameterMm),l=t-o/2,h=s+n;if(e.type==="drill"){const i=Math.max(n-o*.6,0);return`<rect x="${l}" y="${s}" width="${o}" height="${i}" fill="${C}" stroke="${A}" stroke-width="0.4"/><polygon points="${l},${s+i} ${l+o},${s+i} ${t},${h}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}if(p.includes("ball")){const i=o/2;return`<path d="M ${l} ${s} h ${o} v ${Math.max(n-i,0)} a ${i} ${i} 0 0 1 ${-o} 0 z" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}if(p.includes("chamfer")||p.includes("engrav")){const i=r(Math.max(e.tipDiaMm??0,0)),a=e.taperDeg??0,c=a>0&&a<90?Math.min((o-i)/2/Math.tan(a*Math.PI/180),n):n,y=h-c;return`${y>s+.1?`<rect x="${l}" y="${s}" width="${o}" height="${y-s}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`:""}<polygon points="${l},${y} ${l+o},${y} ${t+i/2},${h} ${t-i/2},${h}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}if(p.includes("face")){const i=r(Math.max(e.shoulderDiaMm??e.diameterMm,e.diameterMm));return`<polygon points="${t-i/2},${s} ${t+i/2},${s} ${l+o},${h} ${l},${h}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}const v=`fill="${C}" stroke="${A}" stroke-width="0.4"`;if(p.includes("lollipop")){const i=o/2;return`<circle cx="${t}" cy="${h-i}" r="${i}" ${v}/>`}if(p.includes("dovetail")){const i=(e.taperDeg??0)*Math.PI/180,a=Math.max(o/2-n*Math.tan(i),o*.12);return`<polygon points="${t-a},${s} ${t+a},${s} ${l+o},${h} ${l},${h}" ${v}/>`}if(p.includes("circle segment")||p.includes("barrel")){const i=o/2,a=r(e.profileRadiusMm??e.diameterMm*3);if(p.includes("barrel")){const y=n/2,w=a-Math.sqrt(Math.max(a*a-y*y,0)),d=Math.max(i-w,o*.1),f=s+y;return`<path d="M ${t-d} ${s} A ${a} ${a} 0 0 0 ${t-i} ${f} A ${a} ${a} 0 0 0 ${t-d} ${h} L ${t+d} ${h} A ${a} ${a} 0 0 1 ${t+i} ${f} A ${a} ${a} 0 0 1 ${t+d} ${s} Z" ${v}/>`}const c=r((e.tipDiaMm??0)/2);return`<path d="M ${t-i} ${s} L ${t+i} ${s} A ${a} ${a} 0 0 1 ${t+c} ${h} L ${t-c} ${h} A ${a} ${a} 0 0 1 ${t-i} ${s} Z" ${v}/>`}if(p.includes("radius")){const i=r(e.cornerRadiusMm??0),a=o/2,c=a+i,y=h-i;return`<path d="M ${t-c} ${s} L ${t+c} ${s} L ${t+c} ${y} A ${i} ${i} 0 0 0 ${t+a} ${h} L ${t-a} ${h} A ${i} ${i} 0 0 0 ${t-c} ${y} Z" ${v}/>`}if(p.includes("thread")){const i=Math.min(o*.18,n*.45),a=`M ${l} ${s} h ${o} v ${n-i} l ${-i} ${i} h ${-(o-2*i)} l ${-i} ${-i} z`,c="mfThread",y=Math.max(2,Math.min(8,Math.round(n/3))),w=n/y;let d="";for(let f=0;f<=y+1;f++){const m=s+f*w;d+=`<line x1="${l}" y1="${m}" x2="${l+o}" y2="${m-w}" stroke="${A}" stroke-width="0.5"/>`}return`<clipPath id="${c}"><path d="${a}"/></clipPath><path d="${a}" fill="${C}" stroke="${A}" stroke-width="0.4"/><g clip-path="url(#${c})">${d}</g>`}const $=Math.min(r(e.cornerRadiusMm??0),n*.5,o*.5);return`<path d="M ${l} ${s} h ${o} v ${n-$} a ${$} ${$} 0 0 1 ${-$} ${$} h ${-(o-2*$)} a ${$} ${$} 0 0 1 ${-$} ${-$} z" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}function pe(e,t=200,r=420){const n=e.holder?.segments??[],p=n.length?n.reduce((u,k)=>u+k.heightMm,0):Math.max(e.reachMm*.25,5),o=e.reachMm,l=Math.min(e.fluteMm??o,o),h=Math.min(e.shoulderLenMm??l,o),v=e.shaft?.segments??[],$=v.reduce((u,k)=>u+k.heightMm,0),i=e.profileMm,a=i?o:v.length?Math.max(l+$,o):o,c=p+a,y=Math.max(e.diameterMm,e.shankMm??0,...n.map(u=>Math.max(u.lowerDiaMm,u.upperDiaMm)),...v.map(u=>Math.max(u.lowerDiaMm,u.upperDiaMm)),...i?i.map(u=>u[0]*2):[]),w=Math.min((r-16*2)/c,(t-16*2)/Math.max(y,.1)),d=u=>u*w,f=t/2,m=c*w+16*2,E=[];let D=16;if(n.length)for(const u of[...n].reverse()){const k=d(u.upperDiaMm),M=d(u.lowerDiaMm),b=d(u.heightMm);E.push(`<polygon points="${f-k/2},${D} ${f+k/2},${D} ${f+M/2},${D+b} ${f-M/2},${D+b}" fill="${ne}" stroke="${we}" stroke-width="0.4"/>`),D+=b}else{const u=d((e.shankMm??e.diameterMm)*2.2);E.push(`<rect x="${f-u/2}" y="${D}" width="${u}" height="${d(p)}" rx="2" fill="${ne}"/>`),D+=d(p)}const J=D+d(a),B=u=>J-d(u);if(i){const u=[];for(let M=0;M<i.length;M++){const[b,L]=i[M];if(L<=o+1e-6)u.push([b,Math.min(L,o)]);else{const[_,S]=i[M-1]??[b,L];S<o&&u.push([_+(b-_)*((o-S)/(L-S)),o]);break}}const k=u.map(([M,b])=>`${f+d(M)},${B(b)}`).join(" ")+" "+[...u].reverse().map(([M,b])=>`${f-d(M)},${B(b)}`).join(" ");E.push(`<polygon points="${k}" fill="${O}" stroke="${G}" stroke-width="0.4"/>`),E.push(`<clipPath id="mfFluteClip"><rect x="0" y="${B(l)}" width="${t}" height="${J-B(l)}"/></clipPath><polygon points="${k}" fill="${C}" stroke="${A}" stroke-width="0.4" clip-path="url(#mfFluteClip)"/>`)}else if(v.length){const u=Math.max(o-(l+$),0);if(u>0){const M=d(v[v.length-1].upperDiaMm),b=B(l+$),L=B(l+$+u);E.push(`<rect x="${f-M/2}" y="${L}" width="${M}" height="${b-L}" fill="${O}" stroke="${G}" stroke-width="0.4"/>`)}let k=l;for(const M of v){const b=k+M.heightMm,L=S=>M.lowerDiaMm+(M.upperDiaMm-M.lowerDiaMm)*(S-k)/(M.heightMm||1),_=[k,b];h>k+1e-6&&h<b-1e-6&&_.splice(1,0,h);for(let S=0;S<_.length-1;S++){const F=_[S],X=_[S+1],Q=d(L(F)),ee=d(L(X)),te=B(F),se=B(X),oe=(F+X)/2<h-1e-6,ge=oe?ie:O,ye=oe?re:G;E.push(`<polygon points="${f-ee/2},${se} ${f+ee/2},${se} ${f+Q/2},${te} ${f-Q/2},${te}" fill="${ge}" stroke="${ye}" stroke-width="0.4"/>`)}k=b}E.push(ae(e,f,d,B(l),d(l)))}else{const u=(e.fusionType??"").toLowerCase(),k=(e.shankMm??e.diameterMm)<e.diameterMm*.9,M=/circle segment|barrel|lollipop|dovetail|lens|oval/.test(u),b=d(e.diameterMm),L=k||M?0:Math.max(h-l,0),_=Math.max(o-l-L,0),S=d(e.shankMm??e.diameterMm);let F=D;_>0&&(E.push(`<rect x="${f-S/2}" y="${F}" width="${S}" height="${d(_)}" fill="${O}" stroke="${G}" stroke-width="0.4"/>`),F+=d(_)),L>0&&(E.push(`<rect x="${f-b/2}" y="${F}" width="${b}" height="${d(L)}" fill="${ie}" stroke="${re}" stroke-width="0.4"/>`),F+=d(L)),E.push(ae(e,f,d,F,d(l)))}return`<svg width="${t}" height="${m}" viewBox="0 0 ${t} ${m}">${ke}${E.join("")}</svg>`}const ue="Helical H35AL-3 — 3 Flute Ball 35° Helix",R=e=>typeof e=="number"?`${+(e/25.4).toFixed(4)} in`:"—",Le=await fetch("./library.tools"),Y=await Le.json(),W=be(Y,ue),N=new Map;for(const e of Y.data??[])N.set(e.guid,e);const xe=["Milling","Hole making","Turning","Cutting","Probe","Holders","Depositing"],Ee=()=>"Milling",g={selected:W.tools[0]?.id??null,search:"",category:"Milling",cdSearch:"",tab:"Info"},Se=document.getElementById("app");Se.innerHTML=`
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
  </div>`;const Z=document.getElementById("listBody"),z=document.getElementById("cdWrap"),V=document.getElementById("tabBody");function $e(){const e=g.search.trim().toLowerCase();return W.tools.filter(t=>!(g.category&&Ee()!==g.category||e&&!(t.description??t.id).toLowerCase().includes(e)))}function T(){const e=$e(),t=e.map(r=>{const s=N.get(r.id),n=`⌀${(r.diameterMm/25.4).toFixed(3)}" (HELICAL · ${s?.["product-id"]??""} · ${(r.description??"").replace(/^.*?"\s*/,"")})`;return`<tr class="tool ${r.id===g.selected?"sel":""}" data-id="${r.id}">
        <td class="icon">${pe(r,20,46)}</td>
        <td class="col-name" title="${(r.description??"").replace(/"/g,"&quot;")}">${n}</td>
        <td class="cr">${R(r.cornerRadiusMm)}</td>
      </tr>`}).join("");Z.innerHTML=`<tr class="grouprow"><td colspan="3">${ue} (${e.length})</td></tr>`+(t||'<tr><td colspan="3" class="cd-empty">No tools match.</td></tr>')}let U=[];function K(){const t=((g.selected?N.get(g.selected):null)?.["start-values"]?.presets??[]).filter(r=>r.name.toLowerCase().includes(g.cdSearch.trim().toLowerCase()));if(U=t,!g.selected){z.innerHTML='<div class="cd-empty">Select a tool</div>';return}if(!t.length){z.innerHTML='<div class="cd-empty">No cutting data.</div>';return}z.innerHTML=`<div class="cd-hint">Click a preset name to see its full parameters.</div>
    <table class="cd">
    <thead><tr><th>Name</th><th>Spindle speed</th><th>Cutting feedrate</th><th>Feed/tooth</th><th>Ramp spindle</th></tr></thead>
    <tbody>${t.map((r,s)=>`<tr>
      <td class="pname" data-pi="${s}">${r.name}</td>
      <td>${Math.round(r.n)} rpm</td>
      <td>${I(r.v_f)}</td>
      <td>${P(r.f_z,5)}</td>
      <td>${Math.round(r.n_ramp)} rpm</td>
    </tr>`).join("")}</tbody></table>`}const le=e=>typeof e=="number"?`${Math.round(e)} rpm`:"—",I=e=>typeof e=="number"?`${+e.toFixed(3)} in/min`:"—",P=(e,t=4)=>typeof e=="number"?`${+e.toFixed(t)} in`:"—",H=document.getElementById("pe-overlay"),de=e=>e.replace(/"/g,"&quot;");function he(e,t){return t?`<div class="pe-control driven" data-val="${de(e)}" data-expr="${de(t)}"><div class="pe-vwrap"><div class="val">${e}</div></div><span class="fx">𝑓ₓ</span></div>`:`<div class="pe-control"><div class="pe-vwrap"><div class="val">${e}</div></div></div>`}function x(e,t,r){return`<div class="pe-row"><label>${e}</label>${he(t,r)}</div>`}function ce(e,t,r,s){return`<div class="pe-row"><label>${e}</label><input type="checkbox" class="chk" ${t?"checked":""} disabled/>${he(t?r:"—",t?s:void 0)}</div>`}function fe(e){const t=g.selected?N.get(g.selected):null,r=(e.description??"").length>0,s=e.expressions??{},n=!!s.tool_spindleSpeed,p=typeof e.v_f_plunge=="number"&&e.n?e.v_f_plunge/e.n:void 0,o=typeof e.v_c=="number"?`${Math.round(e.v_c)} ft/min`:"—";H.innerHTML=`<div class="pe-card">
    <div class="pe-head">
      <div><div class="pe-title">${e.name}</div><div class="pe-sub">${t?.description??""}</div></div>
      <button class="pe-close" id="peClose">&times;</button>
    </div>
    <div class="pe-body">
      <div class="pe-hint">Click a value to see its expression. 𝑓ₓ marks values driven by a formula.</div>
      <div class="pe-group"><h4>Speed</h4>
        ${x("Spindle speed",le(e.n),n?void 0:"tool_surfaceSpeed × 12 ÷ (π × tool_diameter)")}
        ${x("Surface speed",o,n?"tool_spindleSpeed × π × tool_diameter ÷ 12":void 0)}
        ${x("Ramp spindle speed",le(e.n_ramp))}
      </div>
      <div class="pe-group"><h4>Feedrates</h4>
        ${x("Cutting feedrate",I(e.v_f),"tool_spindleSpeed × tool_feedPerTooth × flutes")}
        ${x("Feed per tooth",P(e.f_z,5),s.tool_feedPerTooth)}
        ${x("Lead-in feedrate",I(e.v_f_leadIn),s.tool_feedEntry)}
        ${x("Lead-out feedrate",I(e.v_f_leadOut),s.tool_feedExit)}
        ${x("Transition feedrate",I(e.v_f_transition),s.tool_feedTransition)}
        ${x("Ramp feedrate",I(e.v_f_ramp),s.tool_feedRamp)}
        ${x("Ramp angle",typeof e["ramp-angle"]=="number"?`${e["ramp-angle"]} degrees`:"—")}
      </div>
      <div class="pe-group"><h4>Vertical feedrates</h4>
        ${x("Plunge feedrate",I(e.v_f_plunge))}
        ${x("Plunge feed per revolution",P(p,4),"tool_feedPlunge ÷ tool_spindleSpeed")}
        ${x("Retract feedrate",I(e.v_f_retract))}
      </div>
      <div class="pe-group"><h4>Passes and linking</h4>
        ${ce("Use stepdown (ADOC)",!!e["use-stepdown"],P(e.stepdown),s.tool_stepdown)}
        ${ce("Use stepover (RDOC)",!!e["use-stepover"],P(e.stepover),s.tool_stepover)}
      </div>
      <div class="pe-group"><h4>Coolant</h4>
        ${x("Coolant",e["tool-coolant"]??"—")}
      </div>
      ${r?`<div class="pe-note">⚠ ${e.description}</div>`:""}
    </div></div>`,H.style.display="flex"}function me(){H.style.display="none",H.innerHTML=""}function j(){document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.dataset.tab===g.tab)),V.innerHTML=g.tab==="Info"?De():_e(),g.tab==="Info"&&Ae()}function De(){const e=g.selected?W.tools.find(n=>n.id===g.selected):null,t=g.selected?N.get(g.selected):null;if(!e||!t)return'<div class="info-empty">Select a tool to see its preview and geometry.</div>';const r=t.geometry??{},s=(n,p)=>`<tr><td class="k">${n}</td><td class="v">${p}</td></tr>`;return`
    <div class="breadcrumb">Tool Builder › Helical › <b>${Y.version?"H35AL-3":""}</b></div>
    <div class="info-title">${t.description??e.id}</div>
    <div class="preview" id="preview">
      <span class="axis az">+Z</span><span class="axis ax">+X</span>
      <span class="scalebar">drag to pan · scroll to zoom · dbl-click reset</span>
      ${pe(e,200,420)}
    </div>
    <table class="props">
      ${s("Description",t.description??"—")}
      ${s("Vendor",t.vendor??"—")}
      ${s("Product id",String(t["product-id"]??"—"))}
      ${s("Product link",t["product-link"]?`<a href="${t["product-link"]}" target="_blank">${t["product-link"]}</a>`:"—")}
      ${s("Diameter",R(e.diameterMm))}
      ${s("Shaft diameter",R(e.shankMm))}
      ${s("Overall length",R(e.oalMm))}
      ${s("Length below holder",R(e.reachMm))}
      ${s("Shoulder length",R(e.shoulderLenMm))}
      ${s("Flute length",R(e.fluteMm))}
      ${s("Corner radius",R(e.cornerRadiusMm))}
      ${s("Number of flutes",String(e.flutes??r.NOF??"—"))}
      ${s("Type",t.type??"—")}
      ${s("Unit",t.unit??"—")}
      ${s("Clockwise spindle",r.HAND?"true":"false")}
    </table>`}function _e(){const e=xe.map(t=>{const r=t==="Milling"?W.tools.length:0,s=r===0;return`<label class="filter-row ${s?"disabled":""}">
      <input type="radio" name="cat" value="${t}" ${g.category===t?"checked":""} ${s?"disabled":""}/>
      ${t}<span class="count">${r}</span></label>`}).join("");return`
    <input class="filter-search" id="filterSearch" placeholder="Search tools…" value="${g.search}" />
    <div class="filter-group"><h4>Tool category</h4>${e}</div>`}function Ae(){const e=document.getElementById("preview"),t=e?.querySelector("svg");if(!e||!t)return;const r=parseFloat(t.getAttribute("width")||"200"),s=parseFloat(t.getAttribute("height")||"420");let n=1,p=0,o=0;const l=()=>t.style.transform=`translate(${p}px,${o}px) scale(${n})`,h=()=>{const c=e.getBoundingClientRect();n=Math.min(c.width/r,c.height/s)*.9,p=(c.width-r*n)/2,o=(c.height-s*n)/2,l()};t.style.transformOrigin="0 0",h(),e.addEventListener("wheel",c=>{c.preventDefault();const y=e.getBoundingClientRect(),w=c.clientX-y.left,d=c.clientY-y.top,f=Math.min(Math.max(n*(c.deltaY<0?1.12:1/1.12),.2),12);p=w-(w-p)/n*f,o=d-(d-o)/n*f,n=f,l()},{passive:!1});let v=!1,$=0,i=0;e.addEventListener("pointerdown",c=>{v=!0,$=c.clientX,i=c.clientY,e.classList.add("grabbing"),e.setPointerCapture(c.pointerId)}),e.addEventListener("pointermove",c=>{v&&(p+=c.clientX-$,o+=c.clientY-i,$=c.clientX,i=c.clientY,l())});const a=()=>{v=!1,e.classList.remove("grabbing")};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.addEventListener("dblclick",h)}function ve(e,t=!1){g.selected=e,T(),K(),j(),t&&Z.querySelector("tr.tool.sel")?.scrollIntoView({block:"nearest"})}function q(e){const t=$e();if(!t.length)return;const r=t.findIndex(n=>n.id===g.selected),s=r<0?0:Math.min(Math.max(r+e,0),t.length-1);ve(t[s].id,!0)}Z.addEventListener("click",e=>{const t=e.target.closest("tr.tool");t&&ve(t.getAttribute("data-id"))});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&H.style.display==="flex"){me();return}const t=document.activeElement;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||(e.key==="ArrowDown"?(e.preventDefault(),q(1)):e.key==="ArrowUp"?(e.preventDefault(),q(-1)):e.key==="Home"?(e.preventDefault(),q(-9999)):e.key==="End"&&(e.preventDefault(),q(9999)))});document.getElementById("cdSearch").addEventListener("input",e=>{g.cdSearch=e.target.value,K()});z.addEventListener("click",e=>{const t=e.target.closest("td.pname");if(!t)return;const r=U[Number(t.dataset.pi)];r&&fe(r)});H.addEventListener("click",e=>{const t=e.target;if(t.id==="pe-overlay"||t.closest(".pe-close")){me();return}const r=t.closest(".pe-control.driven");if(r){const s=r.classList.contains("show-expr");if(H.querySelectorAll(".pe-control.driven.show-expr").forEach(n=>{n.classList.remove("show-expr");const p=n.querySelector(".val");p.textContent=n.getAttribute("data-val"),p.classList.remove("is-expr")}),!s){r.classList.add("show-expr");const n=r.querySelector(".val");n.textContent=r.getAttribute("data-expr"),n.classList.add("is-expr")}}});document.querySelector(".tabs").addEventListener("click",e=>{const t=e.target.closest(".tab");t&&(g.tab=t.dataset.tab,j())});document.getElementById("clearBtn").addEventListener("click",()=>{g.search="",g.category="Milling",T(),j()});V.addEventListener("input",e=>{const t=e.target;t.id==="filterSearch"&&(g.search=t.value,T())});V.addEventListener("change",e=>{const t=e.target;t.name==="cat"&&(g.category=t.value,T())});T();K();j();location.hash==="#preset"&&U[0]&&fe(U[0]);
