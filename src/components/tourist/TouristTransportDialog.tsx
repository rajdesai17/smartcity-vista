import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bus, Bike, Footprints } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const publicTransport = [
  { route: "Tourist Loop", frequency: "Every 15 mins", stops: ["Museum", "City Center", "Beach", "Shopping Mall"], price: "$5/day" },
  { route: "Heritage Line", frequency: "Every 30 mins", stops: ["Old Town", "Castle", "Cathedral", "Art District"], price: "$3/trip" },
];

const bikeRentals = [
  { location: "Central Station", available: 15, price: "$10/day", type: "City Bike" },
  { location: "Beach Front", available: 8, price: "$12/day", type: "Electric Bike" },
  { location: "Park Entry", available: 20, price: "$8/day", type: "Mountain Bike" },
];

const walkingTours = [
  { name: "Historical Walk", duration: "2 hours", startPoint: "Town Square", price: "$20", nextTour: "10:00 AM" },
  { name: "Food Trail", duration: "3 hours", startPoint: "Market Place", price: "$30", nextTour: "2:00 PM" },
  { name: "Street Art Tour", duration: "1.5 hours", startPoint: "Arts District", price: "$15", nextTour: "11:30 AM" },
];

interface TouristTransportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TouristTransportDialog = ({ isOpen, onClose }: TouristTransportDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Tourist Transport Options</DialogTitle>
          <DialogDescription>
            Explore the city with various transport options
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="bus" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bus" className="flex items-center gap-2">
              <Bus className="h-4 w-4" /> Bus
            </TabsTrigger>
            <TabsTrigger value="bike" className="flex items-center gap-2">
              <Bike className="h-4 w-4" /> Bike
            </TabsTrigger>
            <TabsTrigger value="walking" className="flex items-center gap-2">
              <Footprints className="h-4 w-4" /> Walking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bus" className="space-y-4">
            {publicTransport.map((route, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold">{route.route}</h4>
                <p className="text-sm text-muted-foreground">Frequency: {route.frequency}</p>
                <p className="text-sm text-muted-foreground">Price: {route.price}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {route.stops.map((stop) => (
                    <Badge key={stop} variant="secondary">{stop}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="bike" className="space-y-4">
            {bikeRentals.map((rental, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{rental.location}</h4>
                  <Badge variant="secondary">{rental.price}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{rental.type}</p>
                <p className="text-sm text-muted-foreground">
                  {rental.available} bikes available
                </p>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="walking" className="space-y-4">
            {walkingTours.map((tour, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold">{tour.name}</h4>
                <div className="text-sm text-muted-foreground">
                  <p>Duration: {tour.duration}</p>
                  <p>Start: {tour.startPoint}</p>
                  <p>Next Tour: {tour.nextTour}</p>
                  <p>Price: {tour.price}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}; 