import Image from "next/image";
import Event from "../Schemas/Event";
import dayjs from "dayjs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
export default function EventCard( event ) {
    event = event.event;
    return (
        <li className="container-copertina">
            <div className={"copertine-home"}>
            <Image  src={"/assets/uploads/" + event.COPERTINA} width={100} height={100}  alt="Copertina evento" layout={"fill"} />
            </div>
                <div className="banda-copertine-home">
                    <div className="text-home">
                        <p className="titolo-home"> {event.TITOLO} </p>
                        <p className="data-home"> <FontAwesomeIcon icon={faCalendar}/> { dayjs(event.DATA).format( 'DD/MM/YYYY' ) }</p>
                    </div>
                    <a className="pulsante-dettagli-home" href="/php/singleEvent.php?id">Visualizza dettagli</a>
                </div>
        </li>
    );
}
