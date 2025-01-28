import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Trees } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const stats = [
    { icon: Users, label: "Population", value: "2.5M+" },
    { icon: Building2, label: "Smart Buildings", value: "1,200+" },
    { icon: Trees, label: "Green Spaces", value: "300+" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 backdrop-blur-sm" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Welcome to SmartCity
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Experience the future of urban living with our integrated smart city solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/admin">
                <Button size="lg" className="animate-float">
                  Administrator Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/resident">
                <Button size="lg" variant="outline" className="animate-float">
                  Resident Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/tourist">
                <Button size="lg" variant="outline" className="animate-float">
                  Tourist Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass p-6 rounded-lg text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;