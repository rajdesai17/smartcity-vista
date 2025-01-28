import { motion } from "framer-motion";
import { Phone, Hospital, Police, Flame } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";

const emergencyServices = [
  {
    id: 1,
    type: "Police Stations",
    icon: Police,
    contacts: [
      { name: "Central Police Station", phone: "100", address: "Main Street" },
      { name: "City Police HQ", phone: "022-2222-1111", address: "Police Road" },
    ],
  },
  {
    id: 2,
    type: "Hospitals",
    icon: Hospital,
    contacts: [
      { name: "City General Hospital", phone: "102", address: "Hospital Road" },
      { name: "Emergency Care Center", phone: "022-3333-2222", address: "Health Avenue" },
    ],
  },
  {
    id: 3,
    type: "Fire Services",
    icon: Flame,
    contacts: [
      { name: "Central Fire Station", phone: "101", address: "Fire Brigade Lane" },
      { name: "City Fire Control", phone: "022-4444-3333", address: "Emergency Road" },
    ],
  },
];

const EmergencyContacts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        Emergency Contacts
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencyServices.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: service.id * 0.1 }}
          >
            <DashboardCard title={service.type}>
              <div className="space-y-4">
                <service.icon className="h-12 w-12 text-primary mx-auto" />
                {service.contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="glass p-4 rounded-lg"
                  >
                    <h4 className="font-semibold">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground">{contact.address}</p>
                    <div className="flex items-center mt-2 text-primary">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{contact.phone}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </DashboardCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;