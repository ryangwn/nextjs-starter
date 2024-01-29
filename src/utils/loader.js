const process = require('node:process')

export default function imgproxyLoader({ src, width, height, quality }) {
  const path
    = `/size:${width || 0}:${height || 0}`
    + `/resizing_type:fill${
     quality ? `/quality:${quality}` : ''
     }/sharpen:0.5`
     + `/plain/${src}`
     + `@webp`

  const host = process.env.NEXT_PUBLIC_IMGPROXY_URL

  const imgUrl = `${host}/insecure${path}`

  return imgUrl
}
