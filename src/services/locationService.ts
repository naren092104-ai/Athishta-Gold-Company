import { BRANCHES_DATA } from '../data/branches';
import { Branch } from '../types';

export interface NearestBranchResult {
  branch: Branch;
  distanceKm: number;
}

/**
 * Calculates distance between two coordinates in kilometers using Haversine formula
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

/**
 * Finds nearest branch sorted by distance from user's latitude and longitude
 */
export function findNearestBranches(
  userLat: number,
  userLng: number
): NearestBranchResult[] {
  return BRANCHES_DATA.map((branch) => {
    const dist = calculateDistanceKm(
      userLat,
      userLng,
      branch.coordinates.lat,
      branch.coordinates.lng
    );
    return {
      branch,
      distanceKm: dist
    };
  }).sort((a, b) => a.distanceKm - b.distanceKm);
}
