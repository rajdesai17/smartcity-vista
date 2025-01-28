import { motion } from "framer-motion";
import { Award, Bus, Leaf, User, MapPin, Calendar, Trophy, Pencil } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EditProfileDialog } from "@/components/profile/EditProfileDialog";
import { useState } from "react";

const badges = [
  { 
    id: 1, 
    name: "Public Transport Champion", 
    icon: Bus, 
    count: 50,
    level: "Gold",
    description: "Used public transport 50 times",
    date: "Achieved Feb 2024",
    color: "from-yellow-500 to-yellow-600"
  },
  { 
    id: 2, 
    name: "Eco Warrior", 
    icon: Leaf, 
    count: 30,
    level: "Silver",
    description: "Participated in 30 green initiatives",
    date: "Achieved Jan 2024",
    color: "from-emerald-500 to-green-600"
  },
  { 
    id: 3, 
    name: "City Explorer", 
    icon: Award, 
    count: 25,
    level: "Bronze",
    description: "Visited 25 city landmarks",
    date: "Achieved Mar 2024",
    color: "from-orange-500 to-red-600"
  },
];

const UserProfile = () => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "Suyog Rawool",
    location: "Downtown"
  });

  const handleProfileUpdate = (name: string, location: string) => {
    setUserData({ name, location });
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-20" />
          <User className="w-full h-full text-primary p-6 relative z-10" />
          <Button
            size="icon"
            variant="outline"
            className="absolute bottom-0 right-0 rounded-full"
            onClick={() => setIsEditDialogOpen(true)}
          >
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
          {userData.name}
        </h1>
        <p className="text-muted-foreground mb-4">Smart City Resident</p>
        <div className="flex justify-center gap-2">
          <Badge variant="secondary">
            <Trophy className="w-3 h-3 mr-1" />
            Level 5
          </Badge>
          <Badge variant="outline">
            <MapPin className="w-3 h-3 mr-1" />
            {userData.location}
          </Badge>
          <Badge variant="outline">
            <Calendar className="w-3 h-3 mr-1" />
            Member since 2024
          </Badge>
        </div>
      </motion.div>

      {/* Edit Profile Dialog */}
      <EditProfileDialog
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        currentName={userData.name}
        currentLocation={userData.location}
        onSave={handleProfileUpdate}
      />

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.3,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-10`} />
              <DashboardCard>
                <div className="relative z-10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <badge.icon className="h-12 w-12 text-primary" />
                    <Badge 
                      variant="secondary"
                      className={`bg-gradient-to-r ${badge.color} border-0 text-white`}
                    >
                      {badge.level}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{badge.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {badge.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-medium">{badge.count}/100</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${badge.count}%` }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${badge.color}`}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground text-right">
                      {badge.date}
                    </div>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;