<!-- quirq-wiki-generated repo=liftoff dir=bin -->

# liftoff / bin

Source: [bin](https://github.com/quirq-ai/liftoff/tree/main/bin) in [liftoff](https://github.com/quirq-ai/liftoff).

Each heading is a file that lives **directly** in this folder. Nested folders have their own pages.

### liftoff.js

main(process.argv.slice(2)).then( (code) => { if (typeof code === 'number') process.exitCode
= code; }, (error) => { console.error(error.stack ?? error.message); process.exitCode = 1;
}, ).

[`bin/liftoff.js`](https://github.com/quirq-ai/liftoff/blob/main/bin/liftoff.js) · code · 269 bytes

_Generated 2026-11-14 12:36 UTC from `main`._
