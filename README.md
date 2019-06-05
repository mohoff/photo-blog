# `photo-blog`

Material-UI based image blog powered by Gatsby.

## Features
- Gatsby generates various image representations of different resolutions and formats at build time. Per default, jpgs are converted to more space-efficient webp files and base64 image representations are generated. Both techniques helps fast and progressive loading of images with blur-effect.
- No database required as image metadata is stored in sidecars.
- Endpoint `/random` loads a random image on each page refresh.

## Adding new photos

1. Copy new images to `/data`
2. Optional: Normlize new images
3. Run `yarn init`, which create a sidecar (.md file) for each new image
4. Edit the generated sidecars to add meta data such as title, tags, and a timestamp to your images

This process can be used for an empty and non-empty `/data` directory.

## How to start

In development mode (hot reloading):

```
yarn start
```

In production mode:

```
yarn start:prod
```



## Testing and linting

```
yarn test
yarn lint
yarn lint:fix // Auto-fixes issues where applicable
```