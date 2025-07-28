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
        
        // Fetch solved problems stats
        const solvedResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
        
        if (!solvedResponse.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }
        
        const solvedData = await solvedResponse.json();
        
        // Also fetch contest data
        const contestResponse = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
        let contestData = null;
        if (contestResponse.ok) {
          contestData = await contestResponse.json();
        }

        setStats(prev => ({
          ...prev,
          totalSolved: solvedData.solvedProblem || 0,
          totalSubmissions: solvedData.totalSubmissions || 0,
          totalQuestions: solvedData.totalQuestions || 0,
          easySolved: solvedData.easySolved || 0,
          easyTotal: solvedData.easyTotal || 0,
          mediumSolved: solvedData.mediumSolved || 0,
          mediumTotal: solvedData.mediumTotal || 0,
          hardSolved: solvedData.hardSolved || 0,
          hardTotal: solvedData.hardTotal || 0,
          acceptanceRate: solvedData.acceptanceRate || 0,
          ranking: solvedData.ranking || 0,
          contributionPoints: contestData?.contestAttend || 0,
          reputation: contestData?.contestRating || 0,
          recentSubmissions: solvedData.recentSubmissions || [],
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