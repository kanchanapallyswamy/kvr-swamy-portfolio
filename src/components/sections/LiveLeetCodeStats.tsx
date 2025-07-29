import { useLeetCodeStats } from '@/hooks/useLeetCodeStats';
import { Card, CardContent } from "@/components/ui/card";

interface LiveLeetCodeStatsProps {
  username: string;
}

const LiveLeetCodeStats = ({ username }: LiveLeetCodeStatsProps) => {
  const stats = useLeetCodeStats(username);

  if (stats.isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-700 rounded mb-4"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 bg-gray-700 rounded"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 bg-gray-700 rounded"></div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (stats.error) {
    return (
      <div className="p-6 bg-red-900/20 border border-red-600/30 rounded-lg">
        <h4 className="text-red-400 font-semibold mb-2">Unable to load live stats</h4>
        <p className="text-red-300 text-sm">{stats.error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        <span className="text-2xl">📊</span>
        LeetCode Stats (Live)
      </h3>
      
      <div className="space-y-3">
        <div className="text-white">
          <span className="text-lg font-semibold">Total Solved: </span>
          <span className="text-xl font-bold text-green-400">{stats.totalSolved}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-white">
            <span className="text-green-400">Easy:</span>
            <span className="font-semibold">{stats.easySolved} / 847</span>
          </div>
          
          <div className="flex justify-between text-white">
            <span className="text-yellow-400">Medium:</span>
            <span className="font-semibold">{stats.mediumSolved} / 1741</span>
          </div>
          
          <div className="flex justify-between text-white">
            <span className="text-red-400">Hard:</span>
            <span className="font-semibold">{stats.hardSolved} / 738</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLeetCodeStats;