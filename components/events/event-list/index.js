import EventItem from '../event-item';
import classes from './styles.module.css';


const EventList = (props) => {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => {
        const { title, image, location, date, id } = event;
        return (
          <EventItem
            key={id}
            title={title}
            image={image}
            location={location}
            date={date}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
