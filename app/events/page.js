import EventCard from "@/components/eventcard";
import { getAllEvents } from "@/lib/event";
export const dynamic = "force-dynamic";
export default async function EventPage() {
  const eventcards = await getAllEvents();
  if (eventcards.length === 0) {
    return <div>No events found</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {eventcards.map((cardContent) => (
        <EventCard key={cardContent._id.toString()} cardContent={cardContent} />
      ))}
    </div>
  );
}

// const cards = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit",
//     description:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
//   },
// ];
