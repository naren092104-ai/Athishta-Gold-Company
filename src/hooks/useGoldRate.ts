import { useEffect, useState, useCallback } from 'react';
import { GoldRateData } from '../types';
import { getCachedGoldRate, getGoldRates } from '../services/goldRateService';

export function useGoldRate() {
  const initialCache = getCachedGoldRate();
  const [data, setData] = useState<GoldRateData | null>(initialCache.data);
  const [isLoading, setIsLoading] = useState<boolean>(!initialCache.data);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<Date>(new Date());

  const currentStatus = data?.status || (isLoading ? 'loading' : error ? 'error' : 'live');

  const fetchRates = useCallback(async (isManualRefresh = false) => {
    if (isManualRefresh) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setError(null);

    try {
      const result = await getGoldRates(isManualRefresh);
      setData(result);
      setLastRefreshedAt(new Date());
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Gold rate is temporarily unavailable.';
      setError(msg);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchRates(false);

    // Refresh every 5 minutes while tab is open
    const interval = setInterval(() => {
      fetchRates(false);
    }, 5 * 60 * 1000);

    // Refresh on tab focus / visibility change if date changed
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchRates(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [fetchRates]);

  const refreshRate = useCallback(() => {
    return fetchRates(true);
  }, [fetchRates]);

  return {
    data,
    isLoading,
    isRefreshing,
    error,
    refreshRate,
    lastRefreshedAt,
    rates: data?.rates || { '24K': 15440, '22K': 14150, '18K': 11580 },
    status: currentStatus
  };
}
