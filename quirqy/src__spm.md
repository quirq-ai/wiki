<!-- quirq-wiki-generated repo=quirqy dir=src/spm -->

# quirqy / src/spm

Source: [src/spm](https://github.com/quirq-ai/quirqy/tree/quirq/src/spm) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### engine.js

Master Physics Engine (client spec §4.4). Couples SPM + Tanker + Hawser/Tug into a time-
domain 5-DOF simulation: SPM buoy: x, z (2) + Tanker: x, z, ψ (3) = 5 DOF State vector (10
values): [xb, zb, vxb, vzb, xt, zt, ψ, vxt, vzt, ω] Integrator: adaptive Dormand-Prince RK45
(JS stand-in for scipy solve_ivp). Notable exports: `solveIvp`, `MasterEngine`.

[`src/spm/engine.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/spm/engine.js) · code · 13775 bytes

### hawser.js

Tug & Hawser (Connection) Module (client spec §4.3). Mechanical linkage + active tug
control. Stand-alone snap-load tester or coupled force provider for the Master Engine.
Hawser: nonlinear spring. Slack → 0 kN; stretch produces taut tension and can spike (snap-
load) when a line jerks from slack to taut. Tug: static pull-back / push at the stern,
resolved into force + yaw moment.

[`src/spm/hawser.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/spm/hawser.js) · code · 5576 bytes

### mooring.js

Single Point Mooring (SPM) catenary mechanics. Modular SPM Mooring Module (client spec
§4.1): quasi-static catenary analysis of the subsea array. Runs stand-alone (static
displacement / equilibrium) or coupled into a time-domain buoy integrator. Supports
asymmetric maintenance states: up to 2 chains OFF for disconnect / inspection / reconnect.
Units: meters, kilograms, Newtons, seconds. w = submerged chain weight (N/m).

[`src/spm/mooring.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/spm/mooring.js) · code · 17455 bytes

### spmlab.js

SPM-Tanker Mooring Lab: Master Engine + 3D / 2D top-down visualization. 1 scene unit = 1 m.
Notable exports: `SpmLab`.

[`src/spm/spmlab.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/spm/spmlab.js) · code · 17618 bytes

### tanker.js

Tanker Hull & Environment Module (client spec §4.2). Stand-alone weather-loading calculator
or force provider for the Master Engine. OCIMF-style nondimensional coefficients vs relative
angle; draft (ballast/laden) scales windage and underwater lateral area. Outputs: Surge Fx,
Sway Fy, Yaw moment N about the vessel CG (N, N·m). World frame: +x east, +z north (plan
+y). Heading ψ from +x toward +z (rad).

[`src/spm/tanker.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/spm/tanker.js) · code · 6697 bytes

_Generated 2026-10-28 11:43 UTC from `quirq`._
