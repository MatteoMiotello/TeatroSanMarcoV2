import Image from "next/image";
import logo from "../assets/logo/logo.png";
export default function NavBar() {
    return(
        <div className="header">
            <Image className={"header-image"} src={logo} height={100} width={100} alt="Logo Teatro San marco"/>
            <ul className="menu">
                <li id="mFirst"><p className="corrente">Home</p></li>
                <li id="mProgrammazione"><a href="/pagine/programmazione.php">Programmazione</a></li>
                <li id="mAbout"><a href="/pagine/gallery.html">gallery</a></li>
                <li id="mLast"><a href="/pagine/contatti.html">Come trovarci</a></li>
            </ul>
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    )
}
