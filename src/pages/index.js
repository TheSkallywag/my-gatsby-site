import * as React from 'react'
import '../css/index.css'

console.log(process.env.GATSBY_HTTPS_ENDPOINT)

function getEnv(obj) {
  let text = ''
  Object.entries(obj).forEach(([key, value]) => {
    text += '<p>' + key + ' = ' + value + '</p>'
  })
  return text
}

// data
const pageStyles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <p className="codeStyles">{getEnv(process.env)}</p>
    </main>
  )
}

export default IndexPage
