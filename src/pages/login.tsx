import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import LayoutUnauthenticated from "../layouts/unauthenticated"

const pageTitle: string = "Login Page"

const LoginPage: React.FC<PageProps> = () => {
  return (
    <LayoutUnauthenticated>
      <section>
        <div>anu</div>
      </section>
    </LayoutUnauthenticated>
  )
}

export default LoginPage

export const Head: HeadFC = () => <title>{pageTitle}</title>
