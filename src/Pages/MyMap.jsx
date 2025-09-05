import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon issue in React + Leaflet
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MyMap() {
  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={[28.6692, 77.4538]} // Default: San Francisco
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg shadow-md"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[28.6692, 77.4538]}>
          <Popup>
            <b>Hello!</b> <br /> This is GHaziabad.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
