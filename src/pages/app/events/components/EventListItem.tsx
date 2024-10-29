import { CgCalendar } from "react-icons/cg";
import { Link } from "react-router-dom";
import { EventProp } from "../../../../types";
import { formatDate } from "../../../../utils";

const EventListItem = ({ event }: { event: EventProp }) => {
  return (
    <li>
      <Link to={`/app/events/${event.slug}`}>
        <img src={event.image?.previewUrl ?? "https://placehold.co/512x320"} alt="Evento ejemplo" className="w-full object-contain mb-4 rounded-lg" />
        <h2 className="text-xl font-bold">{event.title}</h2>
        <p className="text-zinc-400 inline-flex items-center">
          <CgCalendar size={24} className="inline-block mr-2" />
          {formatDate(event.date)}
        </p>
      </Link>
    </li>
  )
}

export default EventListItem;