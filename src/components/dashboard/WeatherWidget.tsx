import { Cloud, CloudRain, Sun } from "lucide-react";
import { DashboardCard } from "./DashboardCard";

const weatherData = {
  temperature: "24°C",
  condition: "Partly Cloudy",
  humidity: "65%",
  wind: "12 km/h"
};

export const WeatherWidget = () => {
  return (
    <DashboardCard title="Weather Update" className="text-center">
      <div className="flex items-center justify-center mb-4">
        <Cloud className="h-12 w-12 text-primary animate-float" />
      </div>
      <div className="text-3xl font-bold mb-2">{weatherData.temperature}</div>
      <div className="text-muted-foreground">{weatherData.condition}</div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <div className="text-sm text-muted-foreground">Humidity</div>
          <div className="font-semibold">{weatherData.humidity}</div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Wind</div>
          <div className="font-semibold">{weatherData.wind}</div>
        </div>
      </div>
    </DashboardCard>
  );
};