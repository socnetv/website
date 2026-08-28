# Public files folder of the SocNetV website

This directory hosts the public files of our website, notable of which are:

- latestversion.txt - contains the version of the latest SocNetV release.

- doxyfile - the [Doxygen](https://www.doxygen.org/) config used to generate `docs/` (below) from the `app` repo's C++ source, run locally rather than in CI.

- docs/ - the generated code documentation itself (`OUTPUT_DIRECTORY` in `doxyfile`), committed straight into this repo rather than built by CI. Served as static files at [socnetv.org/docs/](https://socnetv.org/docs/); regenerate it locally with the steps below and commit the result.

### Regenerating the code documentation (`docs/`)

`doxyfile` reads source from `../../app/src/` — it expects the [socnetv/app](https://github.com/socnetv/app) repo to be checked out as a sibling of this `website` repo (i.e. `website` and `app` share the same parent directory). Before regenerating for a release:

1. In the `app` checkout, check out the released tag (e.g. `git checkout v3.7`) so the docs reflect exactly what shipped, not whatever `develop` has moved on to.
2. Bump `PROJECT_NUMBER` in `doxyfile` to match.
3. From this `public/` directory, run:
   ```sh
   doxygen doxyfile
   ```
   This overwrites `docs/` in place. Requires `doxygen` and, for the class/collaboration graphs, Graphviz's `dot` on `PATH`.

Visit our website at: [Social Network Visualizer](https://socnetv.org)
