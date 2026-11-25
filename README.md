# LANDrop Electron Recovery

A work-in-progress attempt to restore the LANDrop 2.7.2 Electron application.
This independent project is not affiliated with or endorsed by LANDrop.

The application includes a single-instance startup fix: when a second instance
cannot acquire the lock, it exits startup before opening windows or services.
The main process, preload bridge, renderer and application resources are in
`src/` and `resources/`.

## Build and test

On Windows x64, use Node.js 22 or newer and Python 3. The source assembly and
startup regression tests do not require installing npm packages:

```powershell
npm.cmd run build
npm.cmd run test:startup
```

The resulting `out/` directory contains the application JavaScript layout; it
is not a signed installer. To stage an isolated runtime, provide a local matching
LANDrop 2.7.2 application tree and Electron runtime directory:

```powershell
npm.cmd run stage -- --app-source C:/path/to/app-tree --electron-dir C:/path/to/LANDrop
npm.cmd run test:runtime
npm.cmd run test:offline
```

Staging checks the exact dependency tree and runtime identity, then copies the
files into a separate ignored `.local/runtime` directory. It does not modify an
installed application or copy its profile. A fresh output directory is required.
See `scripts/extract_asar.py --help` for preparing an application tree.

The offline test uses a separate profile and a mock API; it does not start the
production main process or contact peers. Its test launcher uses `--no-sandbox`
for compatibility with the automation host. A production launch with a separate
profile starts the application's normal network services:

```powershell
$env:LANDROP_RECOVERED_PROFILE = Join-Path $PWD '.local/profiles/development'
& ./.local/runtime/LANDrop.exe
```

Startup regression and offline renderer checks pass. Real device discovery,
file transfer and updates in this project remain to be tested.

## Attribution and license

LANDrop is by SkyArc LLC and its contributors. This project includes application
code, resources and bundled third-party material associated with LANDrop 2.7.2;
existing notices remain with that material. No open-source license for this
Electron application has been established or granted here. See [ORIGIN.md](ORIGIN.md).
