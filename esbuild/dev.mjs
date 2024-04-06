import esbuild from 'esbuild'
import sassPlugin from 'esbuild-plugin-sass'
import copyStaticFiles from 'esbuild-copy-static-files'

const ctx = await esbuild.context({
  entryPoints: ['source/index.js'],
  bundle: true,
  outdir: 'www',
  sourcemap: true,
  platform: 'browser',
  loader: { '.ttf': 'file' },
  plugins: [sassPlugin(), copyStaticFiles({
    src: 'static',
    dest: 'www'
  })],
  target: ['chrome58', 'firefox57', 'safari11', 'edge16']

})

const { host, port } = await ctx.serve({
  servedir: 'www'
})

console.log(`Serving on http://${host}:${port}`)
