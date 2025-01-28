import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { DashboardCard } from '../dashboard/DashboardCard';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface CityMapProps {
  points?: Array<{
    position: [number, number];
    name: string;
    description?: string;
  }>;
  center?: [number, number];
  zoom?: number;
  className?: string;
}

export const CityMap = ({ 
  points = [], 
  center = [51.505, -0.09], 
  zoom = 13,
  className 
}: CityMapProps) => {
  return (
    <DashboardCard title="City Map" className={className}>
      <div className="h-[400px] w-full rounded-lg overflow-hidden">
        <MapContainer 
          center={center} 
          zoom={zoom} 
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {points.map((point, index) => (
            <Marker 
              key={index} 
              position={point.position}
              icon={defaultIcon}
            >
              <Popup>
                <div>
                  <h3 className="font-semibold">{point.name}</h3>
                  {point.description && <p>{point.description}</p>}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </DashboardCard>
  );
}; 