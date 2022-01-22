import classes from './styles.module.css';

const EventContent = (props) => (
    <section className={classes.content}>
      {props.children}
    </section>
  );

export default EventContent;
