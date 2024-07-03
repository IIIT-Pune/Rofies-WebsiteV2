import React, { useEffect, useState } from "react";
import { useCalendar } from "@/contexts/PlannerContext";
import { cn } from "@/lib/utils";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { endOfDay, endOfWeek, startOfWeek } from "date-fns";
import { useData } from "@/contexts/PlannerDataContext";
import AddAppointmentDialog from "./AddAppointmentDialog";

const CalendarToolbar = ({ className, ...props }) => {
  const { setDateRange } = useCalendar();
  const { addResource, addAppointment } = useData();

  const [range, setRange] = useState({
    from: startOfWeek(new Date(), {
      locale: { options: { weekStartsOn: 1 } },
    }),
    to: endOfWeek(new Date()),
  });

  const handleDateRangeUpdate = (range) => {
    const from = range.from;
    const to = range.to ?? endOfDay(range.from);
    setDateRange({
      from: from,
      to: to,
    });
  };

  useEffect(() => {
    setDateRange(range);
  }, [range]);

  return (
    <div
      className={cn("flex items-center justify-end space-x-2", className)}
      {...props}
    >
      <AddAppointmentDialog />
      <DateRangePicker
        onUpdate={(value) => handleDateRangeUpdate(value.range)}
        initialDateFrom={range.from}
        initialDateTo={range.to}
        align="start"
        showCompare={false}
      />
    </div>
  );
};

export default React.memo(CalendarToolbar);
