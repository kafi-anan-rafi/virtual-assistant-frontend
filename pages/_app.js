import '../styles/globals.css';
import MyLayout from "./component/layout"

export default function App({ Component, pageProps }) {
  return (
    <MyLayout>
      <Component {...pageProps} />
    </MyLayout>
  )
}