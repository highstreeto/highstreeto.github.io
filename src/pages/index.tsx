import * as React from "react"
import { PageProps } from "gatsby"
import { Composition } from "atomic-layout"

import campfire from "../images/campfire.svg"

const areas = `
  header
  body
  footer
`

export default function Home(_props: PageProps) {
  return (
    <div style={{ margin: `0 20%`, textAlign: `center` }}>
      <Composition areas={areas}>
        {({ Header, Body, Footer }) => (
          <>
            <Header>
              <h2>Hello world!</h2>
            </Header>
            <Body>
              <p>
                I am currently rewriting my personal website to use Gatsby
                instead of Jekyll.
              </p>
              <p>This takes a while so take a rest at the bonfire:</p>
              <img
                width="300"
                src={campfire}
                alt="A small campfire to rest your weary bones."
              />
            </Body>
            <Footer>
              <p>Copyright © 2021 Martin Hochstrasser</p>
            </Footer>
          </>
        )}
      </Composition>
    </div>
  )
}
