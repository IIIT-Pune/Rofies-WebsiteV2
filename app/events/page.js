import EventCard from "@/components/eventcard";

export default function EventPage() {
  const cards = [
    {
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
    },
    {
      title: "Lorem ipsum dolor sit",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((cardContent, index) => (
        <EventCard key={index} content={cardContent} />
      ))}
    </div>
  );
}
