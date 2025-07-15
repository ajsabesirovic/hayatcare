"use client";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState } from "react";

const mapContainerStyle = {
    width: "50%",
    height: "300px",
    margin: "0 auto",
};

const center = {
    lat: 43.140701,
    lng: 20.517969,
};

export default function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey:
            process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
            "AIzaSyChBqs_q0T-ApROEoFeTtzGvxlwfWn1ZAY",
    });
    const [map, setMap] = useState<google.maps.Map | null>(null);
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            onLoad={(map) => setMap(map)}
        >
            <Marker position={center} />
        </GoogleMap>
    ) : null;
}
