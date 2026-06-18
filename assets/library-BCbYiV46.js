import"./modulepreload-polyfill-B5Qt9EMX.js";function we(e){const t=(e||"").toLowerCase();return t==="probe"?null:t.includes("mill")?"endmill":t.includes("tap")?"tap":t.includes("drill")?"drill":"endmill"}function ke(e,t){const r=Array.isArray(e?.data)?e.data:[],s=[];for(const n of r){const p=we(n?.type);if(!p)continue;const o=n?.geometry??{},l=o.DC,$=o.LB;if(typeof l!="number"||typeof $!="number"||l<=0||$<=0)continue;const g=n?.unit==="millimeters"?1:25.4,h=m=>typeof m=="number"?+(m*g).toFixed(3):void 0,i=n?.holder,a=i?.unit==="millimeters"?1:25.4,c=i?{description:typeof i.description=="string"?i.description:void 0,vendor:typeof i.vendor=="string"?i.vendor:void 0,gaugeLengthMm:typeof i.gaugeLength=="number"?+(i.gaugeLength*a).toFixed(3):void 0,segments:Array.isArray(i.segments)?i.segments.filter(m=>typeof m?.height=="number").map(m=>({heightMm:m.height*a,lowerDiaMm:(m["lower-diameter"]??0)*a,upperDiaMm:(m["upper-diameter"]??0)*a})):[]}:void 0,y=o.profile;let w=Array.isArray(y)?y.filter(m=>Array.isArray(m?.end)&&m.end.length===2).map(m=>[m.end[0]*g,m.end[1]*g]):void 0;if(w&&w.length>=3){const m=2*Math.max(...w.map(D=>D[0])),S=Math.max(l,o["shoulder-diameter"]??0,o.SFDM??0)*g;m>S*1.6&&(w=void 0)}else w=void 0;const d=n?.shaft,f=d&&Array.isArray(d.segments)?{segments:d.segments.filter(m=>typeof m?.height=="number").map(m=>({heightMm:m.height*g,lowerDiaMm:(m["lower-diameter"]??0)*g,upperDiaMm:(m["upper-diameter"]??0)*g}))}:void 0;s.push({id:n.guid??`${p}-${s.length}`,number:typeof n?.["post-process"]?.number=="number"?n["post-process"].number:void 0,type:p,fusionType:typeof n.type=="string"?n.type:void 0,diameterMm:+(l*g).toFixed(3),reachMm:+($*g).toFixed(3),fluteMm:h(o.LCF),shankMm:h(o.SFDM),oalMm:h(o.OAL),cornerRadiusMm:h(o.RE),tipDiaMm:h(o["tip-diameter"]),taperDeg:typeof o.TA=="number"?o.TA:void 0,profileRadiusMm:h(o["profile-radius"]),upperRadiusMm:h(o["upper-radius"]),lowerRadiusMm:h(o["lower-radius"]),shoulderLenMm:h(o["shoulder-length"]),shoulderDiaMm:h(o["shoulder-diameter"]),flutes:typeof o.NOF=="number"?o.NOF:void 0,vendor:typeof n.vendor=="string"?n.vendor:void 0,material:typeof n.BMC=="string"?n.BMC:void 0,unit:n?.unit==="millimeters"?"millimeters":"inches",description:typeof n.description=="string"?n.description:void 0,holder:c,shaft:f,profileMm:w})}return{name:t,tools:s}}const ie="url(#mfSteel)",Le="#4d6f93",O="url(#mfShank)",G="#6e747b",re="url(#mfShoulder)",ae="#2a2e33",C="url(#mfCut)",A="#9c6310",xe=`<defs>
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
</defs>`;function le(e,t,r,s,n){const p=(e.fusionType??"").toLowerCase(),o=r(e.diameterMm),l=t-o/2,$=s+n;if(e.type==="drill"){const i=Math.max(n-o*.6,0);return`<rect x="${l}" y="${s}" width="${o}" height="${i}" fill="${C}" stroke="${A}" stroke-width="0.4"/><polygon points="${l},${s+i} ${l+o},${s+i} ${t},${$}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}if(p.includes("ball")){const i=o/2;return`<path d="M ${l} ${s} h ${o} v ${Math.max(n-i,0)} a ${i} ${i} 0 0 1 ${-o} 0 z" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}if(p.includes("chamfer")||p.includes("engrav")){const i=r(Math.max(e.tipDiaMm??0,0)),a=e.taperDeg??0,c=a>0&&a<90?Math.min((o-i)/2/Math.tan(a*Math.PI/180),n):n,y=$-c;return`${y>s+.1?`<rect x="${l}" y="${s}" width="${o}" height="${y-s}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`:""}<polygon points="${l},${y} ${l+o},${y} ${t+i/2},${$} ${t-i/2},${$}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}if(p.includes("face")){const i=r(Math.max(e.shoulderDiaMm??e.diameterMm,e.diameterMm));return`<polygon points="${t-i/2},${s} ${t+i/2},${s} ${l+o},${$} ${l},${$}" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}const g=`fill="${C}" stroke="${A}" stroke-width="0.4"`;if(p.includes("lollipop")){const i=o/2;return`<circle cx="${t}" cy="${$-i}" r="${i}" ${g}/>`}if(p.includes("dovetail")){const i=(e.taperDeg??0)*Math.PI/180,a=Math.max(o/2-n*Math.tan(i),o*.12);return`<polygon points="${t-a},${s} ${t+a},${s} ${l+o},${$} ${l},${$}" ${g}/>`}if(p.includes("circle segment")||p.includes("barrel")){const i=o/2,a=r(e.profileRadiusMm??e.diameterMm*3);if(p.includes("barrel")){const y=n/2,w=a-Math.sqrt(Math.max(a*a-y*y,0)),d=Math.max(i-w,o*.1),f=s+y;return`<path d="M ${t-d} ${s} A ${a} ${a} 0 0 0 ${t-i} ${f} A ${a} ${a} 0 0 0 ${t-d} ${$} L ${t+d} ${$} A ${a} ${a} 0 0 1 ${t+i} ${f} A ${a} ${a} 0 0 1 ${t+d} ${s} Z" ${g}/>`}const c=r((e.tipDiaMm??0)/2);return`<path d="M ${t-i} ${s} L ${t+i} ${s} A ${a} ${a} 0 0 1 ${t+c} ${$} L ${t-c} ${$} A ${a} ${a} 0 0 1 ${t-i} ${s} Z" ${g}/>`}if(p.includes("radius")){const i=r(e.cornerRadiusMm??0),a=o/2,c=a+i,y=$-i;return`<path d="M ${t-c} ${s} L ${t+c} ${s} L ${t+c} ${y} A ${i} ${i} 0 0 0 ${t+a} ${$} L ${t-a} ${$} A ${i} ${i} 0 0 0 ${t-c} ${y} Z" ${g}/>`}if(p.includes("thread")){const i=Math.min(o*.18,n*.45),a=`M ${l} ${s} h ${o} v ${n-i} l ${-i} ${i} h ${-(o-2*i)} l ${-i} ${-i} z`,c="mfThread",y=Math.max(2,Math.min(8,Math.round(n/3))),w=n/y;let d="";for(let f=0;f<=y+1;f++){const m=s+f*w;d+=`<line x1="${l}" y1="${m}" x2="${l+o}" y2="${m-w}" stroke="${A}" stroke-width="0.5"/>`}return`<clipPath id="${c}"><path d="${a}"/></clipPath><path d="${a}" fill="${C}" stroke="${A}" stroke-width="0.4"/><g clip-path="url(#${c})">${d}</g>`}const h=Math.min(r(e.cornerRadiusMm??0),n*.5,o*.5);return`<path d="M ${l} ${s} h ${o} v ${n-h} a ${h} ${h} 0 0 1 ${-h} ${h} h ${-(o-2*h)} a ${h} ${h} 0 0 1 ${-h} ${-h} z" fill="${C}" stroke="${A}" stroke-width="0.4"/>`}function ue(e,t=200,r=420){const n=e.holder?.segments??[],p=n.length?n.reduce((u,k)=>u+k.heightMm,0):Math.max(e.reachMm*.25,5),o=e.reachMm,l=Math.min(e.fluteMm??o,o),$=Math.min(e.shoulderLenMm??l,o),g=e.shaft?.segments??[],h=g.reduce((u,k)=>u+k.heightMm,0),i=e.profileMm,a=i?o:g.length?Math.max(l+h,o):o,c=p+a,y=Math.max(e.diameterMm,e.shankMm??0,...n.map(u=>Math.max(u.lowerDiaMm,u.upperDiaMm)),...g.map(u=>Math.max(u.lowerDiaMm,u.upperDiaMm)),...i?i.map(u=>u[0]*2):[]),w=Math.min((r-16*2)/c,(t-16*2)/Math.max(y,.1)),d=u=>u*w,f=t/2,m=c*w+16*2,S=[];let D=16;if(n.length)for(const u of[...n].reverse()){const k=d(u.upperDiaMm),M=d(u.lowerDiaMm),b=d(u.heightMm);S.push(`<polygon points="${f-k/2},${D} ${f+k/2},${D} ${f+M/2},${D+b} ${f-M/2},${D+b}" fill="${ie}" stroke="${Le}" stroke-width="0.4"/>`),D+=b}else{const u=d((e.shankMm??e.diameterMm)*2.2);S.push(`<rect x="${f-u/2}" y="${D}" width="${u}" height="${d(p)}" rx="2" fill="${ie}"/>`),D+=d(p)}const Q=D+d(a),B=u=>Q-d(u);if(i){const u=[];for(let M=0;M<i.length;M++){const[b,L]=i[M];if(L<=o+1e-6)u.push([b,Math.min(L,o)]);else{const[_,E]=i[M-1]??[b,L];E<o&&u.push([_+(b-_)*((o-E)/(L-E)),o]);break}}const k=u.map(([M,b])=>`${f+d(M)},${B(b)}`).join(" ")+" "+[...u].reverse().map(([M,b])=>`${f-d(M)},${B(b)}`).join(" ");S.push(`<polygon points="${k}" fill="${O}" stroke="${G}" stroke-width="0.4"/>`),S.push(`<clipPath id="mfFluteClip"><rect x="0" y="${B(l)}" width="${t}" height="${Q-B(l)}"/></clipPath><polygon points="${k}" fill="${C}" stroke="${A}" stroke-width="0.4" clip-path="url(#mfFluteClip)"/>`)}else if(g.length){const u=Math.max(o-(l+h),0);if(u>0){const M=d(g[g.length-1].upperDiaMm),b=B(l+h),L=B(l+h+u);S.push(`<rect x="${f-M/2}" y="${L}" width="${M}" height="${b-L}" fill="${O}" stroke="${G}" stroke-width="0.4"/>`)}let k=l;for(const M of g){const b=k+M.heightMm,L=E=>M.lowerDiaMm+(M.upperDiaMm-M.lowerDiaMm)*(E-k)/(M.heightMm||1),_=[k,b];$>k+1e-6&&$<b-1e-6&&_.splice(1,0,$);for(let E=0;E<_.length-1;E++){const F=_[E],X=_[E+1],ee=d(L(F)),te=d(L(X)),se=B(F),oe=B(X),ne=(F+X)/2<$-1e-6,Me=ne?re:O,be=ne?ae:G;S.push(`<polygon points="${f-te/2},${oe} ${f+te/2},${oe} ${f+ee/2},${se} ${f-ee/2},${se}" fill="${Me}" stroke="${be}" stroke-width="0.4"/>`)}k=b}S.push(le(e,f,d,B(l),d(l)))}else{const u=(e.fusionType??"").toLowerCase(),k=(e.shankMm??e.diameterMm)<e.diameterMm*.9,M=/circle segment|barrel|lollipop|dovetail|lens|oval/.test(u),b=d(e.diameterMm),L=k||M?0:Math.max($-l,0),_=Math.max(o-l-L,0),E=d(e.shankMm??e.diameterMm);let F=D;_>0&&(S.push(`<rect x="${f-E/2}" y="${F}" width="${E}" height="${d(_)}" fill="${O}" stroke="${G}" stroke-width="0.4"/>`),F+=d(_)),L>0&&(S.push(`<rect x="${f-b/2}" y="${F}" width="${b}" height="${d(L)}" fill="${re}" stroke="${ae}" stroke-width="0.4"/>`),F+=d(L)),S.push(le(e,f,d,F,d(l)))}return`<svg width="${t}" height="${m}" viewBox="0 0 ${t} ${m}">${xe}${S.join("")}</svg>`}const he="Helical H35AL-3 — 3 Flute Ball 35° Helix",H=e=>typeof e=="number"?`${+(e/25.4).toFixed(4)} in`:"—",Se=await fetch("./library.tools"),Z=await Se.json(),W=ke(Z,he),N=new Map;for(const e of Z.data??[])N.set(e.guid,e);const Ee=["Milling","Hole making","Turning","Cutting","Probe","Holders","Depositing"],De=()=>"Milling",v={selected:W.tools[0]?.id??null,search:"",category:"Milling",cdSearch:"",tab:"Info"},Y=(()=>{try{return JSON.parse(sessionStorage.getItem("tb_selected_categories")||"[]")}catch{return[]}})(),_e=new Set(Y.map(e=>e.group)).size,Ae=Y.length?`· building from <b>${Y.length}</b> selected categories across ${_e} groups — showing the built H35AL-3 family as a working sample`:"· H35AL-3 sample — run a scan to choose what to build",$e=document.getElementById("app");$e.innerHTML=`
  <div class="titlebar">
    <a class="backlink" href="./">← Back to scraper</a>
    <span class="tb-title">Tool Library</span>
    <span class="tb-ctx">${Ae}</span>
    <span style="flex:1"></span>
    <span class="brandchip">Tool Builder · Magic Factory</span>
  </div>`;$e.innerHTML+=`
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
  </div>`;const V=document.getElementById("listBody"),z=document.getElementById("cdWrap"),K=document.getElementById("tabBody");function fe(){const e=v.search.trim().toLowerCase();return W.tools.filter(t=>!(v.category&&De()!==v.category||e&&!(t.description??t.id).toLowerCase().includes(e)))}function T(){const e=fe(),t=e.map(r=>{const s=N.get(r.id),n=`⌀${(r.diameterMm/25.4).toFixed(3)}" (HELICAL · ${s?.["product-id"]??""} · ${(r.description??"").replace(/^.*?"\s*/,"")})`;return`<tr class="tool ${r.id===v.selected?"sel":""}" data-id="${r.id}">
        <td class="icon">${ue(r,20,46)}</td>
        <td class="col-name" title="${(r.description??"").replace(/"/g,"&quot;")}">${n}</td>
        <td class="cr">${H(r.cornerRadiusMm)}</td>
      </tr>`}).join("");V.innerHTML=`<tr class="grouprow"><td colspan="3">${he} (${e.length})</td></tr>`+(t||'<tr><td colspan="3" class="cd-empty">No tools match.</td></tr>')}let U=[];function J(){const t=((v.selected?N.get(v.selected):null)?.["start-values"]?.presets??[]).filter(r=>r.name.toLowerCase().includes(v.cdSearch.trim().toLowerCase()));if(U=t,!v.selected){z.innerHTML='<div class="cd-empty">Select a tool</div>';return}if(!t.length){z.innerHTML='<div class="cd-empty">No cutting data.</div>';return}z.innerHTML=`<div class="cd-hint">Click a preset name to see its full parameters.</div>
    <table class="cd">
    <thead><tr><th>Name</th><th>Spindle speed</th><th>Cutting feedrate</th><th>Feed/tooth</th><th>Ramp spindle</th></tr></thead>
    <tbody>${t.map((r,s)=>`<tr>
      <td class="pname" data-pi="${s}">${r.name}</td>
      <td>${Math.round(r.n)} rpm</td>
      <td>${R(r.v_f)}</td>
      <td>${P(r.f_z,5)}</td>
      <td>${Math.round(r.n_ramp)} rpm</td>
    </tr>`).join("")}</tbody></table>`}const de=e=>typeof e=="number"?`${Math.round(e)} rpm`:"—",R=e=>typeof e=="number"?`${+e.toFixed(3)} in/min`:"—",P=(e,t=4)=>typeof e=="number"?`${+e.toFixed(t)} in`:"—",I=document.getElementById("pe-overlay"),ce=e=>e.replace(/"/g,"&quot;");function me(e,t){return t?`<div class="pe-control driven" data-val="${ce(e)}" data-expr="${ce(t)}"><div class="pe-vwrap"><div class="val">${e}</div></div><span class="fx">𝑓ₓ</span></div>`:`<div class="pe-control"><div class="pe-vwrap"><div class="val">${e}</div></div></div>`}function x(e,t,r){return`<div class="pe-row"><label>${e}</label>${me(t,r)}</div>`}function pe(e,t,r,s){return`<div class="pe-row"><label>${e}</label><input type="checkbox" class="chk" ${t?"checked":""} disabled/>${me(t?r:"—",t?s:void 0)}</div>`}function ge(e){const t=v.selected?N.get(v.selected):null,r=(e.description??"").length>0,s=e.expressions??{},n=!!s.tool_spindleSpeed,p=typeof e.v_f_plunge=="number"&&e.n?e.v_f_plunge/e.n:void 0,o=typeof e.v_c=="number"?`${Math.round(e.v_c)} ft/min`:"—";I.innerHTML=`<div class="pe-card">
    <div class="pe-head">
      <div><div class="pe-title">${e.name}</div><div class="pe-sub">${t?.description??""}</div></div>
      <button class="pe-close" id="peClose">&times;</button>
    </div>
    <div class="pe-body">
      <div class="pe-hint">Click a value to see its expression. 𝑓ₓ marks values driven by a formula.</div>
      <div class="pe-group"><h4>Speed</h4>
        ${x("Spindle speed",de(e.n),n?void 0:"tool_surfaceSpeed × 12 ÷ (π × tool_diameter)")}
        ${x("Surface speed",o,n?"tool_spindleSpeed × π × tool_diameter ÷ 12":void 0)}
        ${x("Ramp spindle speed",de(e.n_ramp))}
      </div>
      <div class="pe-group"><h4>Feedrates</h4>
        ${x("Cutting feedrate",R(e.v_f),"tool_spindleSpeed × tool_feedPerTooth × flutes")}
        ${x("Feed per tooth",P(e.f_z,5),s.tool_feedPerTooth)}
        ${x("Lead-in feedrate",R(e.v_f_leadIn),s.tool_feedEntry)}
        ${x("Lead-out feedrate",R(e.v_f_leadOut),s.tool_feedExit)}
        ${x("Transition feedrate",R(e.v_f_transition),s.tool_feedTransition)}
        ${x("Ramp feedrate",R(e.v_f_ramp),s.tool_feedRamp)}
        ${x("Ramp angle",typeof e["ramp-angle"]=="number"?`${e["ramp-angle"]} degrees`:"—")}
      </div>
      <div class="pe-group"><h4>Vertical feedrates</h4>
        ${x("Plunge feedrate",R(e.v_f_plunge))}
        ${x("Plunge feed per revolution",P(p,4),"tool_feedPlunge ÷ tool_spindleSpeed")}
        ${x("Retract feedrate",R(e.v_f_retract))}
      </div>
      <div class="pe-group"><h4>Passes and linking</h4>
        ${pe("Use stepdown (ADOC)",!!e["use-stepdown"],P(e.stepdown),s.tool_stepdown)}
        ${pe("Use stepover (RDOC)",!!e["use-stepover"],P(e.stepover),s.tool_stepover)}
      </div>
      <div class="pe-group"><h4>Coolant</h4>
        ${x("Coolant",e["tool-coolant"]??"—")}
      </div>
      ${r?`<div class="pe-note">⚠ ${e.description}</div>`:""}
    </div></div>`,I.style.display="flex"}function ve(){I.style.display="none",I.innerHTML=""}function j(){document.querySelectorAll(".tab").forEach(e=>e.classList.toggle("on",e.dataset.tab===v.tab)),K.innerHTML=v.tab==="Info"?Ce():Be(),v.tab==="Info"&&Fe()}function Ce(){const e=v.selected?W.tools.find(n=>n.id===v.selected):null,t=v.selected?N.get(v.selected):null;if(!e||!t)return'<div class="info-empty">Select a tool to see its preview and geometry.</div>';const r=t.geometry??{},s=(n,p)=>`<tr><td class="k">${n}</td><td class="v">${p}</td></tr>`;return`
    <div class="breadcrumb">Tool Builder › Helical › <b>${Z.version?"H35AL-3":""}</b></div>
    <div class="info-title">${t.description??e.id}</div>
    <div class="preview" id="preview">
      <span class="axis az">+Z</span><span class="axis ax">+X</span>
      <span class="scalebar">drag to pan · scroll to zoom · dbl-click reset</span>
      ${ue(e,200,420)}
    </div>
    <table class="props">
      ${s("Description",t.description??"—")}
      ${s("Vendor",t.vendor??"—")}
      ${s("Product id",String(t["product-id"]??"—"))}
      ${s("Product link",t["product-link"]?`<a href="${t["product-link"]}" target="_blank">${t["product-link"]}</a>`:"—")}
      ${s("Diameter",H(e.diameterMm))}
      ${s("Shaft diameter",H(e.shankMm))}
      ${s("Overall length",H(e.oalMm))}
      ${s("Length below holder",H(e.reachMm))}
      ${s("Shoulder length",H(e.shoulderLenMm))}
      ${s("Flute length",H(e.fluteMm))}
      ${s("Corner radius",H(e.cornerRadiusMm))}
      ${s("Number of flutes",String(e.flutes??r.NOF??"—"))}
      ${s("Type",t.type??"—")}
      ${s("Unit",t.unit??"—")}
      ${s("Clockwise spindle",r.HAND?"true":"false")}
    </table>`}function Be(){const e=Ee.map(t=>{const r=t==="Milling"?W.tools.length:0,s=r===0;return`<label class="filter-row ${s?"disabled":""}">
      <input type="radio" name="cat" value="${t}" ${v.category===t?"checked":""} ${s?"disabled":""}/>
      ${t}<span class="count">${r}</span></label>`}).join("");return`
    <input class="filter-search" id="filterSearch" placeholder="Search tools…" value="${v.search}" />
    <div class="filter-group"><h4>Tool category</h4>${e}</div>`}function Fe(){const e=document.getElementById("preview"),t=e?.querySelector("svg");if(!e||!t)return;const r=parseFloat(t.getAttribute("width")||"200"),s=parseFloat(t.getAttribute("height")||"420");let n=1,p=0,o=0;const l=()=>t.style.transform=`translate(${p}px,${o}px) scale(${n})`,$=()=>{const c=e.getBoundingClientRect();n=Math.min(c.width/r,c.height/s)*.9,p=(c.width-r*n)/2,o=(c.height-s*n)/2,l()};t.style.transformOrigin="0 0",$(),e.addEventListener("wheel",c=>{c.preventDefault();const y=e.getBoundingClientRect(),w=c.clientX-y.left,d=c.clientY-y.top,f=Math.min(Math.max(n*(c.deltaY<0?1.12:1/1.12),.2),12);p=w-(w-p)/n*f,o=d-(d-o)/n*f,n=f,l()},{passive:!1});let g=!1,h=0,i=0;e.addEventListener("pointerdown",c=>{g=!0,h=c.clientX,i=c.clientY,e.classList.add("grabbing"),e.setPointerCapture(c.pointerId)}),e.addEventListener("pointermove",c=>{g&&(p+=c.clientX-h,o+=c.clientY-i,h=c.clientX,i=c.clientY,l())});const a=()=>{g=!1,e.classList.remove("grabbing")};e.addEventListener("pointerup",a),e.addEventListener("pointercancel",a),e.addEventListener("dblclick",$)}function ye(e,t=!1){v.selected=e,T(),J(),j(),t&&V.querySelector("tr.tool.sel")?.scrollIntoView({block:"nearest"})}function q(e){const t=fe();if(!t.length)return;const r=t.findIndex(n=>n.id===v.selected),s=r<0?0:Math.min(Math.max(r+e,0),t.length-1);ye(t[s].id,!0)}V.addEventListener("click",e=>{const t=e.target.closest("tr.tool");t&&ye(t.getAttribute("data-id"))});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&I.style.display==="flex"){ve();return}const t=document.activeElement;t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA")||(e.key==="ArrowDown"?(e.preventDefault(),q(1)):e.key==="ArrowUp"?(e.preventDefault(),q(-1)):e.key==="Home"?(e.preventDefault(),q(-9999)):e.key==="End"&&(e.preventDefault(),q(9999)))});document.getElementById("cdSearch").addEventListener("input",e=>{v.cdSearch=e.target.value,J()});z.addEventListener("click",e=>{const t=e.target.closest("td.pname");if(!t)return;const r=U[Number(t.dataset.pi)];r&&ge(r)});I.addEventListener("click",e=>{const t=e.target;if(t.id==="pe-overlay"||t.closest(".pe-close")){ve();return}const r=t.closest(".pe-control.driven");if(r){const s=r.classList.contains("show-expr");if(I.querySelectorAll(".pe-control.driven.show-expr").forEach(n=>{n.classList.remove("show-expr");const p=n.querySelector(".val");p.textContent=n.getAttribute("data-val"),p.classList.remove("is-expr")}),!s){r.classList.add("show-expr");const n=r.querySelector(".val");n.textContent=r.getAttribute("data-expr"),n.classList.add("is-expr")}}});document.querySelector(".tabs").addEventListener("click",e=>{const t=e.target.closest(".tab");t&&(v.tab=t.dataset.tab,j())});document.getElementById("clearBtn").addEventListener("click",()=>{v.search="",v.category="Milling",T(),j()});K.addEventListener("input",e=>{const t=e.target;t.id==="filterSearch"&&(v.search=t.value,T())});K.addEventListener("change",e=>{const t=e.target;t.name==="cat"&&(v.category=t.value,T())});T();J();j();location.hash==="#preset"&&U[0]&&ge(U[0]);
