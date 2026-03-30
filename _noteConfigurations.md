# CONFIGURATION SETTINGS

## Initialize

```bash
    tsc --init
```
This line of command creates a tsconfig.json file which in you can change environment settings.

## Settings

```json
    "rootdir": "./src" // root directory set to source folder
    "outdir": "./dist" // outlet directory set to distributable folder
    "noEmitOnError": true // do not map ts files if there is an error
    "removeComments": true // remove commentlines while mapping
    "sourceMap": true // Creates TS code map to the generated JS files. IMPORTANT for debugging
```