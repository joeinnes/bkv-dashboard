<svelte:head><title>About</title></svelte:head>
<main style="--maxw: 70ch; --mx: auto; --py: 2rem;">
<a href="/">Home</a>
<h1>What is this?</h1>
This is a quick project inspired by https://mobility.kielregion.de/liveaccess/, mapping public transport in Budapest.
<details>
  <summary>Who's behind this?</summary>
  <p>Joe Innes, https://joeinn.es, a corporate IT drone who sometimes likes to play with a bit of HTML, CSS, and Javascript in his spare time.</p>
</details>
<details>
  <summary>Wow, all on his own?</summary>
  <p>Of course not. A lot of other people had to build stuff that he just stitched together. At the top level, that's:</p>
  <ul>
    <li>Svelte (and SvelteKit)</li>
    <li>Leaflet.js</li>
    <li>Bonsai.css</li>
    <li>BKK's 'FUTAR' API</li>
  </ul>
  <details>
    <summary>npm list</summary>
    <pre>npm list
├─ @cloudflare/workers-types@3.15.0
├─ @esbuild/linux-loong64@0.14.54
├─ @fontsource/fira-mono@4.5.9
├─ @iarna/toml@2.2.5
├─ @jridgewell/resolve-uri@3.1.0
├─ @jridgewell/sourcemap-codec@1.4.14
├─ @jridgewell/trace-mapping@0.3.15
│  ├─ @jridgewell/resolve-uri@^3.0.3
│  └─ @jridgewell/sourcemap-codec@^1.4.10
├─ @mapbox/node-pre-gyp@1.0.9
│  ├─ node-fetch@2.6.7
│  │  └─ whatwg-url@^5.0.0
│  ├─ detect-libc@^2.0.0
│  ├─ https-proxy-agent@^5.0.0
│  ├─ make-dir@^3.1.0
│  ├─ node-fetch@^2.6.7
│  ├─ nopt@^5.0.0
│  ├─ npmlog@^5.0.1
│  ├─ rimraf@^3.0.2
│  ├─ semver@^7.3.5
│  └─ tar@^6.1.11
├─ @nodelib/fs.scandir@2.1.5
│  ├─ @nodelib/fs.stat@2.0.5
│  └─ run-parallel@^1.1.9
├─ @nodelib/fs.stat@2.0.5
├─ @nodelib/fs.walk@1.2.8
│  ├─ @nodelib/fs.scandir@2.1.5
│  └─ fastq@^1.6.0
├─ @polka/url@1.0.0-next.21
├─ @rollup/pluginutils@4.2.1
│  ├─ estree-walker@^2.0.1
│  └─ picomatch@^2.2.2
├─ @sveltejs/adapter-auto@1.0.0-next.69
│  ├─ @sveltejs/adapter-cloudflare@1.0.0-next.32
│  ├─ @sveltejs/adapter-netlify@1.0.0-next.75
│  └─ @sveltejs/adapter-vercel@1.0.0-next.71
├─ @sveltejs/adapter-cloudflare@1.0.0-next.32
│  ├─ @cloudflare/workers-types@^3.14.0
│  ├─ esbuild@^0.14.48
│  └─ worktop@0.8.0-next.14
├─ @sveltejs/adapter-netlify@1.0.0-next.75
│  ├─ @iarna/toml@^2.2.5
│  ├─ esbuild@^0.14.48
│  ├─ set-cookie-parser@^2.4.8
│  └─ tiny-glob@^0.2.9
├─ @sveltejs/adapter-vercel@1.0.0-next.71
│  ├─ @vercel/nft@^0.22.0
│  └─ esbuild@^0.14.48
├─ @sveltejs/kit@1.0.0-next.454
│  ├─ cookie@0.5.0
│  ├─ @sveltejs/vite-plugin-svelte@^1.0.1
│  ├─ cookie@^0.5.0
│  ├─ devalue@^3.1.2
│  ├─ kleur@^4.1.4
│  ├─ magic-string@^0.26.2
│  ├─ mime@^3.0.0
│  ├─ node-fetch@^3.2.4
│  ├─ sade@^1.8.1
│  ├─ set-cookie-parser@^2.4.8
│  ├─ sirv@^2.0.2
│  ├─ tiny-glob@^0.2.9
│  └─ undici@^5.8.1
├─ @sveltejs/vite-plugin-svelte@1.0.3
│  ├─ @rollup/pluginutils@^4.2.1
│  ├─ debug@^4.3.4
│  ├─ deepmerge@^4.2.2
│  ├─ kleur@^4.1.5
│  ├─ magic-string@^0.26.2
│  └─ svelte-hmr@^0.14.12
├─ @types/cookie@0.5.1
├─ @types/node@18.7.14
├─ @types/pug@2.0.6
├─ @types/sass@1.43.1
│  └─ @types/node@*
├─ @vercel/nft@0.22.0
│  ├─ @mapbox/node-pre-gyp@^1.0.5
│  ├─ acorn@^8.6.0
│  ├─ async-sema@^3.1.1
│  ├─ bindings@^1.4.0
│  ├─ estree-walker@2.0.2
│  ├─ glob@^7.1.3
│  ├─ graceful-fs@^4.2.9
│  ├─ micromatch@^4.0.2
│  ├─ node-gyp-build@^4.2.2
│  ├─ resolve-from@^5.0.0
│  └─ rollup-pluginutils@^2.8.2
├─ abbrev@1.1.1
├─ acorn@8.8.0
├─ agent-base@6.0.2
│  └─ debug@4
├─ ansi-regex@5.0.1
├─ anymatch@3.1.2
│  ├─ normalize-path@^3.0.0
│  └─ picomatch@^2.0.4
├─ aproba@2.0.0
├─ are-we-there-yet@2.0.0
│  ├─ delegates@^1.0.0
│  └─ readable-stream@^3.6.0
├─ async-sema@3.1.1
├─ balanced-match@1.0.2
├─ binary-extensions@2.2.0
├─ bindings@1.5.0
│  └─ file-uri-to-path@1.0.0
├─ bonsai.css@1.2.2
├─ brace-expansion@1.1.11
│  ├─ balanced-match@^1.0.0
│  └─ concat-map@0.0.1
├─ braces@3.0.2
│  └─ fill-range@^7.0.1
├─ buffer-crc32@0.2.13
├─ callsites@3.1.0
├─ chokidar@3.5.3
│  ├─ anymatch@~3.1.2
│  ├─ braces@~3.0.2
│  ├─ glob-parent@~5.1.2
│  ├─ is-binary-path@~2.1.0
│  ├─ is-glob@~4.0.1
│  ├─ normalize-path@~3.0.0
│  └─ readdirp@~3.6.0
├─ chownr@2.0.0
├─ color-support@1.1.3
├─ concat-map@0.0.1
├─ console-control-strings@1.1.0
├─ cookie@0.4.2
├─ data-uri-to-buffer@4.0.0
├─ debug@4.3.4
│  └─ ms@2.1.2
├─ deepmerge@4.2.2
├─ delegates@1.0.0
├─ detect-indent@6.1.0
├─ detect-libc@2.0.1
├─ devalue@3.1.2
├─ emoji-regex@8.0.0
├─ es6-promise@3.3.1
├─ esbuild@0.14.54
├─ esbuild-linux-32@0.14.54
├─ esbuild-linux-64@0.14.54
├─ esbuild-linux-arm@0.14.54
├─ esbuild-linux-arm64@0.14.54
├─ esbuild-linux-mips64le@0.14.54
├─ esbuild-linux-ppc64le@0.14.54
├─ esbuild-linux-riscv64@0.14.54
├─ esbuild-linux-s390x@0.14.54
├─ estree-walker@2.0.2
├─ fast-glob@3.2.11
│  ├─ @nodelib/fs.stat@^2.0.2
│  ├─ @nodelib/fs.walk@^1.2.3
│  ├─ glob-parent@^5.1.2
│  ├─ merge2@^1.3.0
│  └─ micromatch@^4.0.4
├─ fastq@1.13.0
│  └─ reusify@^1.0.4
├─ fetch-blob@3.2.0
│  ├─ node-domexception@^1.0.0
│  └─ web-streams-polyfill@^3.0.3
├─ file-uri-to-path@1.0.0
├─ fill-range@7.0.1
│  └─ to-regex-range@^5.0.1
├─ formdata-polyfill@4.0.10
│  └─ fetch-blob@^3.1.2
├─ fs-minipass@2.1.0
│  └─ minipass@^3.0.0
├─ fs.realpath@1.0.0
├─ function-bind@1.1.1
├─ gauge@3.0.2
│  ├─ aproba@^1.0.3 || ^2.0.0
│  ├─ color-support@^1.1.2
│  ├─ console-control-strings@^1.0.0
│  ├─ has-unicode@^2.0.1
│  ├─ object-assign@^4.1.1
│  ├─ signal-exit@^3.0.0
│  ├─ string-width@^4.2.3
│  ├─ strip-ansi@^6.0.1
│  └─ wide-align@^1.1.2
├─ glob@7.2.3
│  ├─ fs.realpath@^1.0.0
│  ├─ inflight@^1.0.4
│  ├─ inherits@2
│  ├─ minimatch@^3.1.1
│  ├─ once@^1.3.0
│  └─ path-is-absolute@^1.0.0
├─ glob-parent@5.1.2
│  └─ is-glob@^4.0.1
├─ globalyzer@0.1.0
├─ globrex@0.1.2
├─ graceful-fs@4.2.10
├─ has@1.0.3
│  └─ function-bind@^1.1.1
├─ has-unicode@2.0.1
├─ https-proxy-agent@5.0.1
│  ├─ agent-base@6
│  └─ debug@4
├─ import-fresh@3.3.0
│  ├─ resolve-from@4.0.0
│  ├─ parent-module@^1.0.0
│  └─ resolve-from@^4.0.0
├─ inflight@1.0.6
│  ├─ once@^1.3.0
│  └─ wrappy@1
├─ inherits@2.0.4
├─ is-binary-path@2.1.0
│  └─ binary-extensions@^2.0.0
├─ is-core-module@2.10.0
│  └─ has@^1.0.3
├─ is-extglob@2.1.1
├─ is-fullwidth-code-point@3.0.0
├─ is-glob@4.0.3
│  └─ is-extglob@^2.1.1
├─ is-number@7.0.0
├─ kleur@4.1.5
├─ leaflet@1.8.0
├─ lru-cache@6.0.0
│  └─ yallist@^4.0.0
├─ magic-string@0.26.3
│  └─ sourcemap-codec@^1.4.8
├─ make-dir@3.1.0
│  ├─ semver@6.3.0
│  └─ semver@^6.0.0
├─ merge2@1.4.1
├─ micromatch@4.0.5
│  ├─ braces@^3.0.2
│  └─ picomatch@^2.3.1
├─ mime@3.0.0
├─ min-indent@1.0.1
├─ minimatch@3.1.2
│  └─ brace-expansion@^1.1.7
├─ minimist@1.2.6
├─ minipass@3.3.4
│  └─ yallist@^4.0.0
├─ minizlib@2.1.2
│  ├─ minipass@^3.0.0
│  └─ yallist@^4.0.0
├─ mkdirp@0.5.6
│  └─ minimist@^1.2.6
├─ mri@1.2.0
├─ mrmime@1.0.1
├─ ms@2.1.2
├─ nanoid@3.3.4
├─ node-domexception@1.0.0
├─ node-fetch@3.2.10
│  ├─ data-uri-to-buffer@^4.0.0
│  ├─ fetch-blob@^3.1.4
│  └─ formdata-polyfill@^4.0.10
├─ node-gyp-build@4.5.0
├─ nopt@5.0.0
│  └─ abbrev@1
├─ normalize-path@3.0.0
├─ npmlog@5.0.1
│  ├─ are-we-there-yet@^2.0.0
│  ├─ console-control-strings@^1.1.0
│  ├─ gauge@^3.0.0
│  └─ set-blocking@^2.0.0
├─ object-assign@4.1.1
├─ once@1.4.0
│  └─ wrappy@1
├─ parent-module@1.0.1
│  └─ callsites@^3.0.0
├─ path-is-absolute@1.0.1
├─ path-parse@1.0.7
├─ picocolors@1.0.0
├─ picomatch@2.3.1
├─ postcss@8.4.16
│  ├─ nanoid@^3.3.4
│  ├─ picocolors@^1.0.0
│  └─ source-map-js@^1.0.2
├─ prettier@2.7.1
├─ prettier-plugin-svelte@2.7.0
├─ queue-microtask@1.2.3
├─ readable-stream@3.6.0
│  ├─ inherits@^2.0.3
│  ├─ string_decoder@^1.1.1
│  └─ util-deprecate@^1.0.1
├─ readdirp@3.6.0
│  └─ picomatch@^2.2.1
├─ regexparam@2.0.1
├─ resolve@1.22.1
│  ├─ is-core-module@^2.9.0
│  ├─ path-parse@^1.0.7
│  └─ supports-preserve-symlinks-flag@^1.0.0
├─ resolve-from@5.0.0
├─ reusify@1.0.4
├─ rimraf@3.0.2
│  └─ glob@^7.1.3
├─ rollup@2.78.1
├─ rollup-pluginutils@2.8.2
│  ├─ estree-walker@0.6.1
│  └─ estree-walker@^0.6.1
├─ run-parallel@1.2.0
│  └─ queue-microtask@^1.2.2
├─ sade@1.8.1
│  └─ mri@^1.1.0
├─ safe-buffer@5.2.1
├─ sander@0.5.1
│  ├─ rimraf@2.7.1
│  │  └─ glob@^7.1.3
│  ├─ es6-promise@^3.1.2
│  ├─ mkdirp@^0.5.1
│  ├─ rimraf@^2.5.2
│  └─ graceful-fs@^4.1.3
├─ semver@7.3.7
│  └─ lru-cache@^6.0.0
├─ set-blocking@2.0.0
├─ set-cookie-parser@2.5.1
├─ signal-exit@3.0.7
├─ sirv@2.0.2
│  ├─ @polka/url@^1.0.0-next.20
│  ├─ mrmime@^1.0.0
│  └─ totalist@^3.0.0
├─ sorcery@0.10.0
│  ├─ buffer-crc32@^0.2.5
│  ├─ minimist@^1.2.0
│  ├─ sander@^0.5.0
│  └─ sourcemap-codec@^1.3.0
├─ source-map-js@1.0.2
├─ sourcemap-codec@1.4.8
├─ string-width@4.2.3
│  ├─ emoji-regex@^8.0.0
│  ├─ is-fullwidth-code-point@^3.0.0
│  └─ strip-ansi@^6.0.1
├─ string_decoder@1.3.0
│  └─ safe-buffer@~5.2.0
├─ strip-ansi@6.0.1
│  └─ ansi-regex@^5.0.1
├─ strip-indent@3.0.0
│  └─ min-indent@^1.0.0
├─ supports-preserve-symlinks-flag@1.0.0
├─ svelte@3.49.0
├─ svelte-check@2.9.0
│  ├─ @jridgewell/trace-mapping@^0.3.9
│  ├─ picocolors@^1.0.0
│  ├─ chokidar@^3.4.1
│  ├─ fast-glob@^3.2.7
│  ├─ import-fresh@^3.2.1
│  ├─ sade@^1.7.4
│  ├─ svelte-preprocess@^4.0.0
│  └─ typescript@*
├─ svelte-hmr@0.14.12
├─ svelte-preprocess@4.10.7
│  ├─ magic-string@0.25.9
│  │  └─ sourcemap-codec@^1.4.8
│  ├─ @types/pug@^2.0.4
│  ├─ @types/sass@^1.16.0
│  ├─ detect-indent@^6.0.0
│  ├─ magic-string@^0.25.7
│  ├─ sorcery@^0.10.0
│  └─ strip-indent@^3.0.0
├─ tar@6.1.11
│  ├─ mkdirp@1.0.4
│  ├─ chownr@^2.0.0
│  ├─ fs-minipass@^2.0.0
│  ├─ minipass@^3.0.0
│  ├─ minizlib@^2.1.1
│  ├─ mkdirp@^1.0.3
│  └─ yallist@^4.0.0
├─ tiny-glob@0.2.9
│  ├─ globalyzer@0.1.0
│  └─ globrex@^0.1.2
├─ to-regex-range@5.0.1
│  └─ is-number@^7.0.0
├─ totalist@3.0.0
├─ tr46@0.0.3
├─ typescript@4.8.2
├─ undici@5.10.0
├─ util-deprecate@1.0.2
├─ vite@3.1.0-beta.1
│  ├─ esbuild@^0.14.47
│  ├─ postcss@^8.4.16
│  ├─ resolve@^1.22.1
│  └─ rollup@~2.78.0
├─ web-streams-polyfill@3.2.1
├─ webidl-conversions@3.0.1
├─ whatwg-url@5.0.0
│  ├─ tr46@~0.0.3
│  └─ webidl-conversions@^3.0.0
├─ wide-align@1.1.5
│  └─ string-width@^1.0.2 || 2 || 3 || 4
├─ worktop@0.8.0-next.14
│  ├─ mrmime@^1.0.0
│  └─ regexparam@^2.0.0
├─ wrappy@1.0.2
└─ yallist@4.0.0</pre>
</details>
</details>
<details>
  <summary>It's broken!</summary>
  <p>Oh noes. You can create an issue here: https://github.com/joeinnes/bkv-dashboard/issues or you can drop me an email at waatb@joeinn.es.</p>
</details>
<details>
  <summary>Why don't the trams follow the tracks?! Why are the buses not on the roads?! Why do I see transport flying across the map at light speed?!</summary>
  <p>To put it simply, there's no way to get <em>actual realtime data</em><sup>1</sup>, so I do what everyone else does - I fake it. The icons move from one set of co-ordinates to another with no idea of what's at either set of co-ordinates or in between. Most of the time this is close enough not to matter, but it does mean that corners can get cut, trams won't always follow the tracks, etc. </p>
  <p>For the same reason, if there's a big update - for example, an update which tells an icon to move a long way, then the animation will try to take it there directly. The animations are timed to complete in 6s, and locations are updated (in the app) every 5 seconds<sup>2</sup>. If for some reason, you stopped staring at the dashboard intently and went to look at something on another tab, the app will pause updates in the background, and reload the map from scratch. That said, I've never bothered to check exactly how BKK mark a vehicle as out of service for the day/refuelling/cleaning/maintenance, etc. If it's removed from the API feed, then five minutes after the last update it should be removed from the map, but if it remains in the API feed and the location is not updated, potentially the same vehicle could enter service at a different location to the location in which it went out of service. In this case, the icon would transition directly to the new location, 'flying' across the map.</p>
  <p>
  <small>1: Technically there is a better way to do this. BKK do actually provide polylines for routes. and share a 'stopDistancePercent' with each vehicle object. I don't use this - basically because it seemed too complicated for me to be bothered with - Leaflet doesn't have an easy way to animate a marker along a path, so I'm using CSS transitions on the 'transform' property. I'm polling every 5 seconds anyway so nothing should get too out of place, and frankly this is just a toy project.</small>
  </p>
  <p>
  <small>2: Not every vehicle updates its location as frequently as 5 seconds. Some updates are 'stale' on the BKK end, and there's nothing I can do about that. The idea of having the transitions take slightly longer than the refresh cycle is to try to keep the movements as smooth as possible, without stop/starts or stuttering.</small>
  </p>
</details>
</main>