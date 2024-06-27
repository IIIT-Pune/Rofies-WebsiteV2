import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ErrorAlert({ errors }) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        {Object.entries(errors).map(([key, value]) => (
          <li className="list-none" key={key}>
            {value}
          </li>
        ))}
      </AlertDescription>
    </Alert>
  );
}
