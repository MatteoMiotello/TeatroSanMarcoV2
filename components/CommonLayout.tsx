import Footer from "./Footer";
import NavBar from "./NavBar";

export default function CommonLayout({children}) {
    return (
        <>
            <NavBar></NavBar>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
