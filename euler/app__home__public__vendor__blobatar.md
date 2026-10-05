<!-- quirq-wiki-generated repo=euler dir=app/home/public/vendor/blobatar -->

# euler / app/home/public/vendor/blobatar

Source: [app/home/public/vendor/blobatar](https://github.com/quirq-ai/euler/tree/main/app/home/public/vendor/blobatar) in [euler](https://github.com/quirq-ai/euler).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### LICENSE

License text (MIT License). Governs use, modification, and distribution of this repository.
Read the full file in the source tree before depending on the project in a product or
redistribution.

[`app/home/public/vendor/blobatar/LICENSE`](https://github.com/quirq-ai/euler/blob/main/app/home/public/vendor/blobatar/LICENSE) · other · 1051 bytes

### README.md

The project README (“Blobatar 2.7.0”). Euler vendors the actual, unmodified browser ESM
bundles from the MIT-licensed [Blobatar project](https://github.com/Alain00/blobatar).
Avatar generation runs locally; it does not call an avatar service or require a package
installation.

[`app/home/public/vendor/blobatar/README.md`](https://github.com/quirq-ai/euler/blob/main/app/home/public/vendor/blobatar/README.md) · code · 1687 bytes

### expression.js

function O({l:t,c:e,h:s}){let n=s*Math.PI/180,r=e*Math.cos(n),o=e*Math.sin(n),c=t+0.39633777
74*r+0.2158037573*o,a=t-0.1055613458*r-0.0638541728*o,l=t-0.0894841775*r-
1.291485548*o,y=c*c*c,h=a*a*a,d=l*l*l;return[4.0767416621*y-3.3077115913*h+0.2309699292*d,-
1.2684380046*y+2.6097574011*h-0.3413193965*d,-0.0041960863*y-
0.7034186147*h+1.707614701*d]}var v=(t)=>t.

[`app/home/public/vendor/blobatar/expression.js`](https://github.com/quirq-ai/euler/blob/main/app/home/public/vendor/blobatar/expression.js) · code · 6556 bytes

### expression.js.map

Map file `expression.js.map`. {"version":3,"sources":["../src/color.ts","../src/morph.ts",".
./src/expression.ts"],"mappings":"AA0BA,SAAS,CAAQ,EAAG,IAAG,IAAG,KAAsC,CAC9D,IAAM,EAAK,EAAI,
KAAK,GAAM,IACpB,EAAI,EAAI,KAAK,IAAI,CAAC,EAClB,EAAI,EAAI,KAAK,IAAI,CAAC,EAElB,EAAK,EAAI,aAAe
,EAAI,aAAe,EAC3C,EAAK,EAAI,aAAe,EAAI,aAAe,EAC3C,EAAK,EAAI,aAAe,EAAI,YAAc,EAE1C,EAAI,EAAK,EAA
K,EACd,EAAI,EAAK,EAAK,EACd,EAAI,EAAK,EAAK,EAEpB,MAAO,CACL,aAAe,EAAI,aAAe,EAAI,aAAe.

[`app/home/public/vendor/blobatar/expression.js.map`](https://github.com/quirq-ai/euler/blob/main/app/home/public/vendor/blobatar/expression.js.map) · code · 10036 bytes

### index.js

var q=(t,e)=>mo-root${t==="always"?" mo-always":""}${e?" mo-expr":""};function Et(t){let e=M
ath.round(t.num("motion.blink",3500,6500)),n=Math.round(t.num("motion.saccade",4200,7600)),a
=t.num("motion.lookX",1,2.2),o=t.num("motion.lookY",0.8,1.7),r=(s)=>Math.round(s*100)/100;re
turn{phase:Math.round(t.num("motion.phase",0,2800)),bob:Math.round(t.num("motion.bob.

[`app/home/public/vendor/blobatar/index.js`](https://github.com/quirq-ai/euler/blob/main/app/home/public/vendor/blobatar/index.js) · code · 13116 bytes

### index.js.map

Map file `index.js.map`. {"version":3,"sources":["../src/animate.ts","../src/color.ts","../s
rc/shape.ts","../src/hash.ts","../src/traits.ts","../src/render.ts","../src/styles/compose.t
s","../src/styles/shapes.ts","../src/styles/blob.ts","../src/blobatar.ts","../src/index.ts"]
,"mappings":"AAqBO,IAAM,EAAY,CAAC,EAAe,IACvC,UAAU,IAAS,SAAW,aAAe,KAAK,EAAa,WAAa,KAwCvE,SAAS,
EAAW,CAAC,EAAsB,CAChD,IAAM,EAAQ,KAAK,MAAM,EAAE,IAAI,eAAgB,KAAM,IAAI,CAAC,EACp.

[`app/home/public/vendor/blobatar/index.js.map`](https://github.com/quirq-ai/euler/blob/main/app/home/public/vendor/blobatar/index.js.map) · code · 20662 bytes

### provenance.json

JSON document `provenance.json` whose top-level keys are `package`, `version`, `license`,
`repository`, `commit`, `tarball`, `integrity`, `files`. Structured data consumed by the
surrounding app or tooling.

[`app/home/public/vendor/blobatar/provenance.json`](https://github.com/quirq-ai/euler/blob/main/app/home/public/vendor/blobatar/provenance.json) · code · 1144 bytes

_Generated 2026-10-05 12:48 UTC from `main`._
