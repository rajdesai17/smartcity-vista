import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface EventDialogProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    description?: string;
    attendees?: number;
    image?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const EventDialog = ({ event, isOpen, onClose }: EventDialogProps) => {
  const handleRSVP = () => {
    toast({
      title: "RSVP Successful",
      description: `You have successfully RSVP'd for ${event.title}`,
    });
  };

  const handleBookmark = () => {
    toast({
      title: "Event Bookmarked",
      description: "This event has been added to your bookmarks",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>
            <div className="mt-4 space-y-4">
              {event.image && (
                <div className="relative h-40 w-full rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                {event.attendees && (
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                )}
              </div>

              {event.description && (
                <p className="text-sm text-muted-foreground">
                  {event.description}
                </p>
              )}

              <div className="flex space-x-2 pt-4">
                <Button onClick={handleRSVP} className="flex-1">
                  RSVP / Book Now
                </Button>
                <Button variant="outline" onClick={handleBookmark}>
                  Bookmark
                </Button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}; 