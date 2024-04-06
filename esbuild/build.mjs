import esbuild from 'esbuild'
import sassPlugin from 'esbuild-plugin-sass'
import copyStaticFiles from 'esbuild-copy-static-files'

esbuild.build({
  entryPoints: ['source/index.js'],
  bundle: true,
  outdir: 'www',
  sourcemap: true,
  platform: 'browser',
  loader: { '.ttf': 'file' },
  minify: true,
  plugins: [sassPlugin(), copyStaticFiles({
    src: 'static',
    dest: 'www'
  })],
  target: ['chrome58', 'firefox57', 'safari11', 'edge16']
})
