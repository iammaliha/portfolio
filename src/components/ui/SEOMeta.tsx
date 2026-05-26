import { useEffect } from 'react'

const BASE_TITLE = 'Maliha Tasnim | Frontend Developer'

interface SEOMetaProps {
  title?: string
  description?: string
}

export default function SEOMeta({ title, description }: SEOMetaProps) {
  useEffect(() => {
    document.title = title ? `${title} | Maliha Tasnim` : BASE_TITLE

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
