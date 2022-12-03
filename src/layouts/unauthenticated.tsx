import * as React from "react"

interface Props {
  pageTitle: string,
  children: React.ReactNode
}

const UnauthenticatedLayout: React.FC<Props> = ({pageTitle, children}) => {
  return (
    <main>{children}</main>
  )
}

export default UnauthenticatedLayout
