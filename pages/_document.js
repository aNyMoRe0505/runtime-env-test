import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="/__ENV.js" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
