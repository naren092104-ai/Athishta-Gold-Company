import { useState, useCallback } from 'react';
import { findNearestBranches, NearestBranchResult } from '../services/locationService';

export interface GeolocationState {
  isLocating: boolean;
  userCoords: { lat: number; lng: number } | null;
  nearestBranches: NearestBranchResult[] | null;
  error: string | null;
  permissionStatus: 'prompt' | 'granted' | 'denied';
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    isLocating: false,
    userCoords: null,
    nearestBranches: null,
    error: null,
    permissionStatus: 'prompt'
  });

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: 'Geolocation is not supported by your browser',
        permissionStatus: 'denied'
      }));
      return;
    }

    setState((prev) => ({ ...prev, isLocating: true, error: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const nearest = findNearestBranches(coords.lat, coords.lng);

        setState({
          isLocating: false,
          userCoords: coords,
          nearestBranches: nearest,
          error: null,
          permissionStatus: 'granted'
        });
      },
      (err) => {
        let msg = 'Unable to retrieve location.';
        if (err.code === err.PERMISSION_DENIED) {
          msg = 'Location access was denied. You can still view all branches below.';
        }
        setState((prev) => ({
          ...prev,
          isLocating: false,
          error: msg,
          permissionStatus: 'denied'
        }));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }, []);

  return {
    ...state,
    requestLocation
  };
}
