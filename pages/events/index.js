import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';

const events = getAllEvents();

const AllEventsPage = () => (
  <>
    <EventsSearch />
    <EventList items={events} />
  </>
);

export default AllEventsPage;
