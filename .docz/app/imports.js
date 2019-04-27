export const imports = {
  'src/pages/example.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-example" */ 'src/pages/example.mdx'
    ),
}
