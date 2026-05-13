import type { AppProps } from "next/app"
import "../styles/mermaid-placeholder.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
