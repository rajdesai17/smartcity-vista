import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bus } from "lucide-react";

const schedules = [
  { route: "Route 1", from: "Downtown", to: "City Center", frequency: "Every 15 mins", firstBus: "05:00", lastBus: "23:00" },
  { route: "Route 2", from: "Central Park", to: "Shopping District", frequency: "Every 20 mins", firstBus: "06:00", lastBus: "22:30" },
  { route: "Route 3", from: "Residential Area", to: "Business District", frequency: "Every 30 mins", firstBus: "05:30", lastBus: "21:00" },
];

interface TransportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransportDialog = ({ isOpen, onClose }: TransportDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bus className="h-5 w-5" />
            Public Transport Schedule
          </DialogTitle>
          <DialogDescription>
            Current schedules for all public transport routes
          </DialogDescription>
        </DialogHeader>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Route</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Frequency</TableHead>
              <TableHead>First Bus</TableHead>
              <TableHead>Last Bus</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow key={schedule.route}>
                <TableCell className="font-medium">{schedule.route}</TableCell>
                <TableCell>{schedule.from}</TableCell>
                <TableCell>{schedule.to}</TableCell>
                <TableCell>{schedule.frequency}</TableCell>
                <TableCell>{schedule.firstBus}</TableCell>
                <TableCell>{schedule.lastBus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}; 