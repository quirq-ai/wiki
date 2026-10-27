<!-- quirq-wiki-generated repo=quirqy dir=src/math -->

# quirqy / src/math

Source: [src/math](https://github.com/quirq-ai/quirqy/tree/quirq/src/math) in [quirqy](https://github.com/quirq-ai/quirqy).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### datafit.js

Dataset parsing and rough equation guessing for the Equation Lab. Fitting strategy: per
axis, least-squares fit a family of small models (constant, linear, quadratic, cubic,
sinusoid, sinusoid + drift, damped sinusoid, exponential) and keep the best adjusted R^2
with a mild complexity penalty. Nonlinear frequencies / decay rates are handled with a
coarse grid search wrapped around a linear solve.

[`src/math/datafit.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/math/datafit.js) · code · 9400 bytes

### expr.js

Safe math expression compiler. Tokenizes, parses (recursive descent) and code-generates user
expressions into plain JS functions. Only whitelisted identifiers, functions, numbers and
operators can reach the generated code, so arbitrary JS cannot leak in. Supports implicit
multiplication: "10(y - x)", "2pi", "3sin(t)". Notable exports: `compileExpr`, `EXPR_HELP`.

[`src/math/expr.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/math/expr.js) · code · 7121 bytes

### mathlab.js

Equation Lab scene: particles moving through space-time under user equations. Reuses the
app's TrailSystem, bloom pipeline and camera controls. Math coordinates are z-up and map to
the scene as (x, y, z) -> (X, -Z, Y), the same handedness-preserving convention the solar
ephemeris uses. Notable exports: `MathLab`.

[`src/math/mathlab.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/math/mathlab.js) · code · 30790 bytes

### presets.js

Curated equation presets for the Equation Lab. Types: parametric : position = (x(t), y(t),
z(t)); particles trail along the curve ode : velocity field dx/dt = f(x,y,z,t), integrated
with RK4 force : acceleration field a(x,y,z,vx,vy,vz,t), integrated with RK4 surface :
animated sheet z = f(x,y,t) Math axes are z-up; the scene maps (x, y, z) -> (X, -Z, Y).
Notable exports: `MATH_PRESETS`, `CUSTOM_TEMPLATE`.

[`src/math/presets.js`](https://github.com/quirq-ai/quirqy/blob/quirq/src/math/presets.js) · code · 9277 bytes

_Generated 2026-10-27 11:08 UTC from `quirq`._
