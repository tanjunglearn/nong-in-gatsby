import * as React from "react"

interface Props { children: React.ReactNode }

const UnauthenticatedLayout: React.FC<Props> = ({children}) => {
  return (
    <main>{children}</main>
  )
}

export default UnauthenticatedLayout
