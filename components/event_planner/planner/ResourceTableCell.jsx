import React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";
import { TableCell } from "@/components/ui/table";
import Image from "next/image";

const ResourceTableCell = ({ className, resourceItem, ...props }) => {
  return (
    <TableCell className={cn(className, "sticky left-0 z-10 border-y bg-background")} {...props}>
      <div className="flex items-center space-x-4">
        <div className="relative h-10 w-10">
          <Image
            className="rounded-full object-fill"
            src={resourceItem.details.image}
            alt={resourceItem.name}
          />
        </div>
        <h2>{resourceItem.name}</h2>
      </div>
    </TableCell>
  );
};

ResourceTableCell.propTypes = {
  className: PropTypes.string,
  resourceItem: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ResourceTableCell;
