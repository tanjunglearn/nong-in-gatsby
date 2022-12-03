import * as React from "react"

interface PageProps {
  pageTitle: string
}

const Seo = ({pageTitle}: PageProps) => {
  return (
    <title>{pageTitle}</title>
  )
}

export default Seo
