import React, { createContext, useContext, useState } from "react";
import { AppointmentService, ResourceService } from "../services";

// Context with no type annotations
const DataContext = createContext(undefined);

export const PlannerDataContextProvider = ({ children, initialAppointments, initialResources }) => {
  const appointmentService = useState(new AppointmentService(initialAppointments))[0];
  const resourceService = useState(new ResourceService(initialResources))[0];

  // Create a state that will re-render the context when updated
  const [trigger, setTrigger] = useState(false);

  const handleUpdate = () => setTrigger(!trigger); // simple state toggle to trigger re-render

  const contextValue = {
    appointments: appointmentService.getAppointments(),
    resources: resourceService.getResources(),
    addAppointment: (appointment) => {
      appointmentService.createAppointment(appointment);
      handleUpdate();
    },
    updateAppointment: (appointment) => {
      appointmentService.updateAppointment(appointment);
      handleUpdate();
    },
    removeAppointment: (id) => {
      appointmentService.deleteAppointment(id);
      handleUpdate();
    },
    addResource: (resource) => {
      resourceService.addResource(resource);
      handleUpdate();
    },
    updateResource: (resource) => {
      resourceService.updateResource(resource);
      handleUpdate();
    },
    removeResource: (id) => {
      resourceService.removeResource(id);
      handleUpdate();
    }
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a PlannerDataContextProvider");
  }
  return context;
};
