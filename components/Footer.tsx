import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAt, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import Script from 'next/script';
export default function ( ) {
    return (
        <>
        <div className='footer'>
            <dl>
                <dd>
                    <ul>
                        <li><FontAwesomeIcon icon={faMapMarkerAlt}/><p> Contr&agrave; S. Franceso, 76 36100 Vicenza</p></li>
                        <li><FontAwesomeIcon icon={faAt}/><p> info@tsmvicenza.it</p></li>
                        <li><FontAwesomeIcon icon={faInstagram}/><p> tsm.vicenzaofficial</p></li>
                    </ul>
                </dd>
            </dl>
        </div>
    <Script src="/assets/js/app.js"></Script>
        </>
    )
}
