import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Globe, Phone } from "lucide-react";

interface AttractionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  attraction: {
    title: string;
    category: string;
    rating: number;
    location: string;
    image: string;
    description?: string;
    openingHours?: string;
    website?: string;
    phone?: string;
  };
}

export const AttractionDialog = ({ isOpen, onClose, attraction }: AttractionDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>{attraction.title}</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500" />
              {attraction.rating}
            </Badge>
          </DialogTitle>
          <DialogDescription>
            <div className="space-y-4">
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <img
                  src={attraction.image}
                  alt={attraction.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=800";
                  }}
                />
              </div>
              
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {attraction.location}
                </div>
                {attraction.openingHours && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {attraction.openingHours}
                  </div>
                )}
                {attraction.website && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="h-4 w-4" />
                    <a href={attraction.website} target="_blank" rel="noopener noreferrer" 
                       className="hover:text-primary">
                      Visit Website
                    </a>
                  </div>
                )}
                {attraction.phone && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {attraction.phone}
                  </div>
                )}
              </div>

              <p className="text-muted-foreground">
                {attraction.description}
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}; 