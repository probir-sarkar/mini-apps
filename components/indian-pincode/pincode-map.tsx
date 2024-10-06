"use client";
import React, { useState, useCallback } from "react";
import { AdvancedMarker, Marker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { usePincodeStore } from "./pincode-store";

const PincodeMap = () => {
  const { selectedOffice } = usePincodeStore();
  const map = {
    lat: selectedOffice?.Latitude ? +selectedOffice.Latitude : 28.6139,
    lng: selectedOffice?.Longitude ? +selectedOffice.Longitude : 77.209
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <Map
        style={{ width: "100%", height: "400px" }}
        defaultCenter={{ lat: 28.6139, lng: 77.209 }}
        defaultZoom={10}
        center={map}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
      <Marker position={map} title={selectedOffice?.OfficeName} />
    </APIProvider>
  );
};

export default PincodeMap;
