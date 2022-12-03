import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import LayoutUnauthenticated from "../layouts/unauthenticated"
import Seo from '../components/seo'

interface PageTitle {
  pageTitle: string
}

const usePageTitle = ({pageTitle}: PageTitle) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const pageTitle1: string = `${pageTitle} | ${data.site.siteMetadata.title}`

  return pageTitle1
}

const LoginPage: React.FC<PageProps> = () => {
  const pageTitle = usePageTitle({pageTitle: 'Login'})

  return (
    <LayoutUnauthenticated pageTitle={pageTitle}>
      <section>
        <div>anu</div>
      </section>
    </LayoutUnauthenticated>
  )
}

export default LoginPage

export const Head: HeadFC = () => {
  const pageTitle = usePageTitle({pageTitle: 'Login'})

  return <Seo pageTitle={pageTitle} />
}
