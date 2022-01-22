import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../dummy-data';

const events = getAllEvents();

const AllEventsPage = () => (
  <div>
    <EventList items={events} />
  </div>
);

export default AllEventsPage;
