<!-- quirq-wiki-generated repo=argus-code dir=dashboard-dist/assets -->

# argus-code / dashboard-dist/assets

Source: [dashboard-dist/assets](https://github.com/quirq-ai/argus-code/tree/main/dashboard-dist/assets) in [argus-code](https://github.com/quirq-ai/argus-code).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### AlertsPage-CUEaMy-v.js

import{j as e,g as N,h as k,i as _,r as h}from"./index-BTlzCq7x.js";import{T as g,a as v,P
as p}from"./Panel-C6iqlD26.js";import{E as $,S as A}from"./ErrorPanel-awkX6DMs.js";import{B
as w,P as f}from"./Button-BzXzhPlA.js";import{a as d}from"./AttentionStrip-
DLCoIDyM.js";const C={info:"#3987e5",warning:"#fab219",critical:"#d03b3b"};function
S({alerts:t,days:r.

[`dashboard-dist/assets/AlertsPage-CUEaMy-v.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/AlertsPage-CUEaMy-v.js) · code · 5165 bytes

### AreaLine-r-Vv2Prj.js

import{r as f,t as A,j as r}from"./index-BTlzCq7x.js";import{A as h,S as e,h as j,L as w,U
as E}from"./uplotTheme-DLxwlpRu.js";function
v({labels:s,series:o,stacked:l=!1,fill:u=!0,share:m=!1,format:x=A,height:i=220}){const
c=f.useMemo(()=>{const t=s.map((n,p)=>p);if(!l)return[t,...o.map(n=>n.values)];const
a=Array(s.length).fill(0);return[t,...o.map(n=>n.val.

[`dashboard-dist/assets/AreaLine-r-Vv2Prj.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/AreaLine-r-Vv2Prj.js) · code · 1037 bytes

### AttentionStrip-DLCoIDyM.js

import{h as p,g as x,i as m,j as e,s as i,L as h}from"./index-BTlzCq7x.js";import{P as
j}from"./Panel-C6iqlD26.js";import{P as l,B as u}from"./Button-BzXzhPlA.js";const f={info:"i
nfo",warning:"warn",critical:"crit"},n=t=>t.created_at??t.first_seen_at??"";function
N(){const
t=p().data??[],o=x().data??[],c=m(),r=t.slice(0,3),a=[...o].sort((s,d)=>n(d).localeCom.

[`dashboard-dist/assets/AttentionStrip-DLCoIDyM.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/AttentionStrip-DLCoIDyM.js) · code · 1489 bytes

### Bars-CRcbB4he.js

import{j as s,t as o,I as m}from"./index-BTlzCq7x.js";function
d({rows:a,format:n=o,max:l,color:r="var(--color-s1)",className:i=""}){const
t=l??Math.max(1,...a.map(e=>e.value));return s.jsx("div",{className:flex flex-col gap-2.5
${i},children:a.map(e=>s.jsxs("div",{className:"grid grid-cols-[minmax(0,200px)_1fr_auto]
items-center gap-3 text-xs",children:[s.j.

[`dashboard-dist/assets/Bars-CRcbB4he.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/Bars-CRcbB4he.js) · code · 1091 bytes

### Button-BzXzhPlA.js

import{j as o,I as a}from"./index-BTlzCq7x.js";const s={warn:"text-warn bg-warn/10 border-
warn/25",crit:"text-crit-ink bg-crit/12 border-crit/30",info:"text-s1 bg-s1/12
border-s1/30",good:"text-good bg-good/12 border-good/30",mute:"text-ink-1 bg-bg-3 border-
line-2"},c={warn:"warn",crit:"x",info:"info",good:"check"};function
x({kind:t,children:e,icon:r=!0,cla.

[`dashboard-dist/assets/Button-BzXzhPlA.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/Button-BzXzhPlA.js) · code · 1148 bytes

### ChartTable-BjGbuNmU.js

import{j as e,r as n}from"./index-BTlzCq7x.js";import{C as o}from"./Chip-
DBzG0RxH.js";function x({columns:s,rows:a}){return e.jsx("div",{className:"overflow-auto
max-h-72",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead
",{children:e.jsx("tr",{children:s.map((t,r)=>e.jsx("th",{className:text-[10px]
tracking-[0.08em] text-ink.

[`dashboard-dist/assets/ChartTable-BjGbuNmU.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ChartTable-BjGbuNmU.js) · code · 1004 bytes

### Chip-DBzG0RxH.js

import{j as t,I as a}from"./index-BTlzCq7x.js";function
i({active:e=!1,onClick:n,children:r,caret:s=!1}){return
t.jsxs("button",{type:"button",onClick:n,"aria-pressed":e,className:inline-flex items-center
gap-1.5 h-6 px-2 rounded-md border text-[11px] whitespace-nowrap ${e?"border-accent text-
accent-ink bg-accent/12":"border-line-2 text-ink-1 bg-bg-2 hover:t.

[`dashboard-dist/assets/Chip-DBzG0RxH.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/Chip-DBzG0RxH.js) · code · 442 bytes

### ErrorPanel-awkX6DMs.js

import{j as n}from"./index-BTlzCq7x.js";function l({options:e,value:r,onChange:a}){return
n.jsx("div",{role:"tablist",className:"inline-flex border border-line-2 rounded-md overflow-
hidden font-mono
text-[11px]",children:e.map(t=>n.jsx("button",{role:"tab",type:"button","aria-
selected":t.value===r,onClick:()=>a(t.value),className:px-2.5 py-[5px] whitespace-n.

[`dashboard-dist/assets/ErrorPanel-awkX6DMs.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ErrorPanel-awkX6DMs.js) · code · 750 bytes

### ModelsPage-DCvxhHjM.js

import{r as u,u as _,f as P,j as s,W as $,S as j,e as p,t as C,n as E}from"./index-
BTlzCq7x.js";import{T as b,a as f,P as m}from"./Panel-C6iqlD26.js";import{E as O,S as
y}from"./ErrorPanel-awkX6DMs.js";import{B as k}from"./Bars-CRcbB4he.js";import{S as
W}from"./StackedColumns-DBabaRnI.js";import{M as B}from"./MultiLine-BiPdtQxm.js";import{a as
v}from"./Chart.

[`dashboard-dist/assets/ModelsPage-DCvxhHjM.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ModelsPage-DCvxhHjM.js) · code · 3455 bytes

### MultiLine-BiPdtQxm.js

import{j as i}from"./index-BTlzCq7x.js";import{A as o}from"./AreaLine-r-Vv2Prj.js";const
e=s=>i.jsx(o,{...s,fill:!1});export{e as M}.

[`dashboard-dist/assets/MultiLine-BiPdtQxm.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/MultiLine-BiPdtQxm.js) · code · 134 bytes

### OverviewPage-zkY0Tk_1.js

import{j as e,p as O,t as k,u as A,a as M,b as B,r as p,c as C,s as H,d as K,e as $,L,f as
z,W as J,n as g,S as T}from"./index-BTlzCq7x.js";import{P as w,T as W,a as
R}from"./Panel-C6iqlD26.js";import{E as G,S as U}from"./ErrorPanel-awkX6DMs.js";import{d as
N,T as _}from"./Tile-B7MMWi35.js";import{C as q}from"./Chip-DBzG0RxH.js";import{A as
Q}from"./AreaLine.

[`dashboard-dist/assets/OverviewPage-zkY0Tk_1.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/OverviewPage-zkY0Tk_1.js) · code · 10159 bytes

### Panel-C6iqlD26.js

import{j as e,L as i}from"./index-BTlzCq7x.js";function o({crumbs:n,children:a}){return
e.jsxs("div",{className:"h-12 shrink-0 border-b border-line flex items-center gap-3 px-5 bg-
bg-1",children:[e.jsx("span",{className:"text-[13px] text-ink-1 flex items-center gap-1.5
min-w-0",children:n.map((s,l)=>e.jsxs("span",{className:"flex items-center gap-1.5 min-w-0.

[`dashboard-dist/assets/Panel-C6iqlD26.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/Panel-C6iqlD26.js) · code · 1559 bytes

### SearchPage-Bz5dW7TL.js

import{j as e,r as i,k as I,l as P,m as E,o as F,q as L,v as T,I as $,d as b,L as
C}from"./index-BTlzCq7x.js";import{T as D,a as M,P as O}from"./Panel-C6iqlD26.js";import{C
as N}from"./Chip-DBzG0RxH.js";import{P as y,B as q}from"./Button-BzXzhPlA.js";import{d as
B}from"./windows-B3y4OLGl.js";import{a as Q,b as R}from"./agents-CDuRxAZi.js";function
A({values.

[`dashboard-dist/assets/SearchPage-Bz5dW7TL.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/SearchPage-Bz5dW7TL.js) · code · 5953 bytes

### SessionPage-BXqc5X3X.js

import{r as g,j as e,I as T,t as S,R as C,n as f,T as D,L as X,p as B,e as M,P as F,S as A,U
as Y,V as Z,c as G,X as J,Y as ee,d as te}from"./index-BTlzCq7x.js";import{P as w,T as L,a
as q}from"./Panel-C6iqlD26.js";import{S as H,E as se}from"./ErrorPanel-awkX6DMs.js";import{T
as _}from"./Tile-B7MMWi35.js";import{P as E}from"./Button-BzXzhPlA.js";import{r as.

[`dashboard-dist/assets/SessionPage-BXqc5X3X.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/SessionPage-BXqc5X3X.js) · code · 14541 bytes

### SessionsPage-Gtx6Xceh.js

import{r as I,O as Ke,j as v,c as Ue,s as Oe,d as ce,P as Ae,I as ge,t as Q,e as J,n as G,b
as Je,S as Xe,W as ee}from"./index-BTlzCq7x.js";import{P as De,T as Me,a as
Ie}from"./Panel-C6iqlD26.js";import{C as fe}from"./Chip-DBzG0RxH.js";import{P as Qe,B as
Ze}from"./Button-BzXzhPlA.js";import{S as Ye,E as et}from"./ErrorPanel-awkX6DMs.js";import{i
as tt,s as.

[`dashboard-dist/assets/SessionsPage-Gtx6Xceh.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/SessionsPage-Gtx6Xceh.js) · code · 86492 bytes

### SettingsPage-DMQSXBqO.js

import{m as k,l as N,w,x as S,y,o as c,q as x,j as e,n as h}from"./index-
BTlzCq7x.js";import{T as C,a as I,P as a}from"./Panel-C6iqlD26.js";import{B as t,P as
m}from"./Button-BzXzhPlA.js";const i=({children:l})=>e.jsx("span",{className:"font-mono
text-ink-0",children:l});function D(){const
l=k(),p=N(),u=w(),g=S(),r=y(),o=()=>l.invalidateQueries({queryKey:["s.

[`dashboard-dist/assets/SettingsPage-DMQSXBqO.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/SettingsPage-DMQSXBqO.js) · code · 3928 bytes

### StackedColumns-DBabaRnI.js

import{r as F,j as e,n as T}from"./index-BTlzCq7x.js";import{L as C,S as
m}from"./uplotTheme-DLxwlpRu.js";function q({labels:d,series:a,height:E=220,format:g=T,share
:c=!1,className:L=""}){const[l,y]=F.useState(null),M=d.length,i=d.map((n,t)=>a.reduce((j,s)=
>j+(s.values[t]??0),0)),k=(n,t)=>c?i[t]?(n.values[t]??0)/i[t]:0:n.values[t]??0,b=d.map((n,t)
=>c?i[t]?1.

[`dashboard-dist/assets/StackedColumns-DBabaRnI.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/StackedColumns-DBabaRnI.js) · code · 2417 bytes

### Tile-B7MMWi35.js

import{p as o,j as s,I as p}from"./index-BTlzCq7x.js";function g(e,t){if(t==null)return
null;const n=e-
t;return{abs:n,pct:t===0?null:n/t,dir:n>0?"up":n=0?"+":"−",m=n?c?c(n):n.pct!=null?${d}${o(Ma
th.abs(n.pct),0)}:n.abs===0?o(0,0):"new":"";return s.jsxs("div",{className:bg-bg-1 border
rounded-md px-4 py-3.5 flex flex-col gap-1.5 min-w-0 ${r==="crit"?"border-c.

[`dashboard-dist/assets/Tile-B7MMWi35.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/Tile-B7MMWi35.js) · code · 1316 bytes

### TimelineTab-B9co8gve.js

import{r as d,Z as $,j as e,I as q,t as m,e as P,q as T}from"./index-BTlzCq7x.js";import{P
as R}from"./Panel-C6iqlD26.js";import{P as p,B as z}from"./Button-BzXzhPlA.js";import{c as
B}from"./cumulative-C3-3HW0n.js";const C=s=>s.fresh_input_tokens+s.output_tokens,I=s=>C(s)+s
.cache_read_tokens+s.cache_write_tokens,S=s=>s.tool_calls.some(n=>n.is_error===1),Z=s=.

[`dashboard-dist/assets/TimelineTab-B9co8gve.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/TimelineTab-B9co8gve.js) · code · 6973 bytes

### ToolsPage-CSVZzf9l.js

import{z as q,A as O,B as D,C as A,Q as N,m as B,D as L,E as W,r as g,F as $,G as H,H as z,J
as F,K as R,M as I,N as V,a as K,b as U,q as G,j as l,W as J,n as v,p as E,S as
Q}from"./index-BTlzCq7x.js";import{T as M,a as _,P as w}from"./Panel-C6iqlD26.js";import{E
as X,S as T}from"./ErrorPanel-awkX6DMs.js";import{T as S}from"./Tile-B7MMWi35.js";import{B
as C}.

[`dashboard-dist/assets/ToolsPage-CSVZzf9l.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ToolsPage-CSVZzf9l.js) · code · 7944 bytes

### TrendsPage-Bet9vQuM.js

import{r as u,f as G,b as H,j as e,t as j,e as x,n as _,S as b,p as W}from"./index-
BTlzCq7x.js";import{T as A,a as F,P as v}from"./Panel-C6iqlD26.js";import{E as Y,S as
U}from"./ErrorPanel-awkX6DMs.js";import{T as S,d as w}from"./Tile-B7MMWi35.js";import{M as
J}from"./MultiLine-BiPdtQxm.js";import{A as M}from"./AreaLine-r-Vv2Prj.js";import{a as
Q}from"./Char.

[`dashboard-dist/assets/TrendsPage-Bet9vQuM.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/TrendsPage-Bet9vQuM.js) · code · 5700 bytes

### agents-CDuRxAZi.js

const n={claude_code:"Claude Code",codex:"Codex"},t=e=>n[e]??e,d={claude_code:"claude",codex
:"codex"},a=e=>d[e]??e,s=e=>e.includes(":")?e.slice(0,e.indexOf(":")):"claude_code";function
u(e,c){return e==="claude_code"?claude --resume ${c}:e==="codex"?codex resume
${c}:null}function l(e){const c=[...new Set(e.map(o=>o.agent))].sort();return
c.length>1?c:[]}exp.

[`dashboard-dist/assets/agents-CDuRxAZi.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/agents-CDuRxAZi.js) · code · 400 bytes

### cumulative-C3-3HW0n.js

const c=t=>{let a=0;return t.map(e=>a+=e)};export{c}.

[`dashboard-dist/assets/cumulative-C3-3HW0n.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/cumulative-C3-3HW0n.js) · code · 54 bytes

### ibm-plex-mono-latin-400-normal-CvHOgSBP.woff

Binary WOFF asset (12.8 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-mono-latin-400-normal-CvHOgSBP.woff`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-mono-latin-400-normal-CvHOgSBP.woff) · binary · 13144 bytes

### ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2

Binary WOFF2 asset (14.4 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2) · binary · 14708 bytes

### ibm-plex-mono-latin-500-normal-CB9ihrfo.woff

Binary WOFF asset (12.8 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-mono-latin-500-normal-CB9ihrfo.woff`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-mono-latin-500-normal-CB9ihrfo.woff) · binary · 13156 bytes

### ibm-plex-mono-latin-500-normal-DSY6xOcd.woff2

Binary WOFF2 asset (14.5 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-mono-latin-500-normal-DSY6xOcd.woff2`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-mono-latin-500-normal-DSY6xOcd.woff2) · binary · 14888 bytes

### ibm-plex-sans-latin-400-normal-CDDApCn2.woff2

Binary WOFF2 asset (22.1 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-sans-latin-400-normal-CDDApCn2.woff2`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-sans-latin-400-normal-CDDApCn2.woff2) · binary · 22588 bytes

### ibm-plex-sans-latin-400-normal-CYLoc0-x.woff

Binary WOFF asset (21.6 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-sans-latin-400-normal-CYLoc0-x.woff`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-sans-latin-400-normal-CYLoc0-x.woff) · binary · 22104 bytes

### ibm-plex-sans-latin-500-normal-6ng42L7E.woff2

Binary WOFF2 asset (23.6 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-sans-latin-500-normal-6ng42L7E.woff2`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-sans-latin-500-normal-6ng42L7E.woff2) · binary · 24184 bytes

### ibm-plex-sans-latin-500-normal-BgVn5rGT.woff

Binary WOFF asset (23.4 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-sans-latin-500-normal-BgVn5rGT.woff`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-sans-latin-500-normal-BgVn5rGT.woff) · binary · 23916 bytes

### ibm-plex-sans-latin-600-normal-Cu4Hd6ag.woff

Binary WOFF asset (23.3 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-sans-latin-600-normal-Cu4Hd6ag.woff`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-sans-latin-600-normal-Cu4Hd6ag.woff) · binary · 23876 bytes

### ibm-plex-sans-latin-600-normal-CuJfVYMP.woff2

Binary WOFF2 asset (23.7 KB). Left unsummarized; open the file in the source repository if
you need the actual bytes. Wiki pages do not copy images, fonts, archives, or other
generated blobs.

[`dashboard-dist/assets/ibm-plex-sans-latin-600-normal-CuJfVYMP.woff2`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/ibm-plex-sans-latin-600-normal-CuJfVYMP.woff2) · binary · 24252 bytes

### index-B8TteJkn.css

Stylesheet `index-B8TteJkn.css` for layout and visual treatment in this folder. Defines or
consumes CSS custom properties (design tokens).

[`dashboard-dist/assets/index-B8TteJkn.css`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/index-B8TteJkn.css) · code · 27155 bytes

### index-BTlzCq7x.js

Large text file (421.0 KB), over the generator's 256 KB parse cap. Only a prefix was
inspected.

[`dashboard-dist/assets/index-BTlzCq7x.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/index-BTlzCq7x.js) · huge · 431118 bytes

### rollups-Dqiwg3gD.js

import{w as r}from"./windows-B3y4OLGl.js";const c=t=>t.total_fresh_input_tokens+t.total_outp
ut_tokens+t.total_cache_read_tokens+t.total_cache_write_tokens;function p(t){const s=new
Map;for(const o of t){const e=s.get(o.project_path)??{project:o.project_path,sessions:0,toke
ns:0,cost:0};e.sessions++,e.tokens+=c(o),e.cost+=o.total_cost_usd,s.set(o.project_path.

[`dashboard-dist/assets/rollups-Dqiwg3gD.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/rollups-Dqiwg3gD.js) · code · 653 bytes

### series-BjP-80tt.js

function m(e,c){const u=e.map(t=>t.bucket),o=new Map,n=[];for(const t of e)for(const[s,p]of
Object.entries(t.groups))o.has(s)||n.push(s),o.set(s,(o.get(s)??0)+p[c]);const r=[...n].sort
((t,s)=>(o.get(s)??0)-
(o.get(t)??0)),a=r.slice(0,5),g=r.slice(5),h=a.map(t=>e.map(s=>s.groups[t]?.[c]??0));return
g.length&&(a.push("Other"),h.push(e.map(t=>g.reduce((s,p)=>s+(.

[`dashboard-dist/assets/series-BjP-80tt.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/series-BjP-80tt.js) · code · 577 bytes

### uplotTheme-D1GxaB_c.css

Stylesheet `uplotTheme-D1GxaB_c.css` for layout and visual treatment in this folder. Leading
class selectors include `uplot`.

[`dashboard-dist/assets/uplotTheme-D1GxaB_c.css`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/uplotTheme-D1GxaB_c.css) · code · 1652 bytes

### uplotTheme-DLxwlpRu.js

import{r as Ol,j as fn}from"./index-BTlzCq7x.js";const er=!0,De="u-
",tr="uplot",lr=De+"hz",nr=De+"vt",ir=De+"title",sr=De+"wrap",or=De+"under",rr=De+"over",fr=
De+"axis",Qt=De+"off",ur=De+"select",cr=De+"cursor-x",ar=De+"cursor-y",pr=De+"cursor-pt",hr=
De+"legend",mr=De+"live",dr=De+"inline",gr=De+"series",wr=De+"marker",Zi=De+"label",Sr=De+"v
alue",Il="width".

[`dashboard-dist/assets/uplotTheme-DLxwlpRu.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/uplotTheme-DLxwlpRu.js) · code · 53455 bytes

### windows-B3y4OLGl.js

const s=t=>({"24h":1,"7d":7,"30d":30,all:null})[t],d=t=>({"24h":"7d","7d":"30d","30d":"all",
all:"all"})[t],l=t=>${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-
${String(t.getDate()).padStart(2,"0")};function r(t,o){const n=[];for(let
a=o-1;a>=0;a--){const e=new Date(t);e.setDate(e.getDate()-a),n.push(l(e))}return n}export{d
as a,r as d,s as w}.

[`dashboard-dist/assets/windows-B3y4OLGl.js`](https://github.com/quirq-ai/argus-code/blob/main/dashboard-dist/assets/windows-B3y4OLGl.js) · code · 362 bytes

_Generated 2026-10-28 11:43 UTC from `main`._
