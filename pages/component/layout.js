import Header from "./header"
import Link from "next/link"
import Image from 'next/image'
import Session from "./session"
import Navbar from './navbar';
import Footer from "./footer";


export default function MyLayout(props) {
    return (
        <>
            <Header title="Virtual Assistant" />
            <Navbar />

            <main className="container mx-auto px-4">
                {props.children}
            </main>
            {/* <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
                Virtual Assistant @copyright</div> */}
            <Footer />
        </>
    )
}