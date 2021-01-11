import React from "react"

import campfire from "../images/campfire.svg"

export default function Home() {
  return <div style={{ margin: `0 20%`, textAlign: `center`}}>
    <h2>Hello world!</h2>
    <p>I am currently rewriting my personal website to use Gatsby instead of Jekyll.</p>
    <p>This takes a while so take a rest at the bonfire:</p>
    <img width="300" src={campfire} alt="A small campfire to rest your weary bones." />
  </div>
}
