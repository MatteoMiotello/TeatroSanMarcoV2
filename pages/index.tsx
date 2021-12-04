import type {NextPage} from 'next'
import {PrismaClient} from '@prisma/client';
import EventCard from "../components/EventCard";

const Home = ({arrayEvents}) => {
    return (
        <ul className="container-home">
            {arrayEvents.map( ( event ) => ( <EventCard event={event} ></EventCard>) )}
        </ul>
    )
}

export async function getStaticProps( ) {
    const client = new PrismaClient();
    const arrayEvents = await client.eventi.findMany({
        where: {
            active: true,
        },
        take: 10,
    });

    return {
        props: {
            arrayEvents
        },
    }
}

export default Home
