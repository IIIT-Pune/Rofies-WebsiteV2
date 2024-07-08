import { Event } from "@/models/models";
import { dbConnect } from "./user";

export async function getAllEvents() {
  await dbConnect();
  let events;
  try {
    events = await Event.find({});
  } catch (err) {
    throw err;
  }
  return events;
}
