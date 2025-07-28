import { useState, useEffect } from 'react';

interface LeetCodeStats {
  totalSolved: number;
  totalSubmissions: number;
  totalQuestions: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  recentSubmissions: any[];
  isLoading: boolean;
  error: string | null;
}

export const useLeetCodeStats = (username: string): LeetCodeStats => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: 0,
    totalSubmissions: 0,
    totalQuestions: 0,
    easySolved: 0,
    easyTotal: 0,
    mediumSolved: 0,
    mediumTotal: 0,
    hardSolved: 0,
    hardTotal: 0,
    acceptanceRate: 0,
    ranking: 0,
    contributionPoints: 0,
    reputation: 0,
    recentSubmissions: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setStats(prev => ({ ...prev, isLoading: true, error: null }));
        
        // Using alfa-leetcode-api
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
        const data = await response.json();
        
        // Also fetch contest ranking if available
        const contestResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
        let contestData = null;
        if (contestResponse.ok) {
          contestData = await contestResponse.json();
        }

        setStats(prev => ({
          ...prev,
          totalSolved: data.totalSolved || 0,
          totalSubmissions: data.totalSubmissions || 0,
          totalQuestions: data.totalQuestions || 0,
          easySolved: data.easySolved || 0,
          easyTotal: data.easyTotal || 0,
          mediumSolved: data.mediumSolved || 0,
          mediumTotal: data.mediumTotal || 0,
          hardSolved: data.hardSolved || 0,
          hardTotal: data.hardTotal || 0,
          acceptanceRate: data.acceptanceRate || 0,
          ranking: data.ranking || 0,
          contributionPoints: data.contributionPoints || 0,
          reputation: data.reputation || 0,
          recentSubmissions: data.recentSubmissions || [],
          isLoading: false,
        }));
        
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        setStats(prev => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch stats',
        }));
      }
    };

    if (username) {
      fetchLeetCodeStats();
      
      // Refresh stats every 5 minutes
      const interval = setInterval(fetchLeetCodeStats, 5 * 60 * 1000);
      
      return () => clearInterval(interval);
    }
  }, [username]);

  return stats;
};