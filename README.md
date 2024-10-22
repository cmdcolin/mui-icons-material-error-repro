# repro of error with mui

## How to reproduce

- clone repo
- cd into repo
- yarn
- yarn dev

nav to localhost:5173

see dev tools prints

```
Uncaught TypeError: SvgIcon_default is undefined
```

the source map i believe is inaccurate so it is needed to turn off source maps
to see the error properly

I only render a single `<Menu/>` from `@mui/icons-material/Menu` in the react
code, but the inclusion of our library, causes an issue for some reason in vite
dev mode (which is esbuild based), and it is sensitive to the order of the
includes

I created two commits in this repo, "works" and "doesn't work" in this repo that
shows the order of the includes causes the issue

I repeatedly ran `rm -rf node_modules` (which includes the `node_modules/.vite`
cache folder) and delete and rebuild the yarn.lock file to make sure that is
unrelated to the issue, as this is something other people mention in
https://github.com/mui/material-ui/issues/31835
