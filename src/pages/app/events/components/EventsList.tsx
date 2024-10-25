import { EventProp } from "../../../../types";
import EventListItem from "./EventListItem";

const EventsList = ({ events }: { events: EventProp[] }) => {
	return (
		<ul className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5'>
			{events.map((event: EventProp) => (
				<EventListItem key={event.documentId} event={event} />
			))}
		</ul>
	);
};

export default EventsList;
