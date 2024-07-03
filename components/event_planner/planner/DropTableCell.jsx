import { useEffect, useRef, useState } from "react";
import { TableCell } from "@/components/ui/table";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { cn } from "@/lib/utils";

const DropTableCell = ({
  children,
  resourceId,
  columnIndex,
  ...props
}) => {
  const ref = useRef(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const element = ref.current;

    return dropTargetForElements({
      element,
      getData: () => {
        return { resourceId: resourceId, columnIndex: columnIndex };
      },
      onDragEnter: () => setIsOver(true),
      onDragLeave: () => setIsOver(false),
      onDrop: () => {
        setIsOver(false);
      },
    });
  }, []);

  const style = {
    backgroundColor: isOver ? "#f0f0f0" : "#fff",
    border: "1px solid #ddd",
  };

  return (
    <TableCell 
      className={cn("border bg-background", isOver ? "bg-primary-foreground" : "bg-background")} 
      ref={ref} 
      {...props}
    >
      <div className="grid grid-flow-row grid-cols-2 gap-2">{children}</div>
    </TableCell>
  );
};

export default DropTableCell;