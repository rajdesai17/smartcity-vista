import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Car } from "lucide-react";

const parkingLots = [
  { id: 1, name: "Central Parking", total: 200, available: 45, price: "₹2/hour" },
  { id: 2, name: "Mall Parking", total: 150, available: 20, price: "₹3/hour" },
  { id: 3, name: "Street Parking", total: 100, available: 70, price: "₹1/hour" },
];

interface ParkingDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ParkingDialog = ({ isOpen, onClose }: ParkingDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            Parking Availability
          </DialogTitle>
          <DialogDescription>
            Real-time parking space availability
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {parkingLots.map((lot) => (
            <div key={lot.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{lot.name}</h4>
                <span className="text-sm text-muted-foreground">{lot.price}</span>
              </div>
              <Progress value={(lot.available / lot.total) * 100} />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{lot.available} spots available</span>
                <span>Total: {lot.total}</span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}; 