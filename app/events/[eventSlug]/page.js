export default function EventDetails({ params }) {
  const { eventSlug } = params;
  return <h1>Event: {eventSlug}</h1>;
}
