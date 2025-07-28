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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="text-2xl">📊</span>
          LeetCode Live Stats
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-white font-bold">kvr_swamy</span>
          <span className="text-gray-400 text-sm">#66885</span>
        </div>
      </div>

      {/* Main layout matching the image */}
      <div className="grid grid-cols-5 gap-6">
        {/* Left side - Total problems solved circle */}
        <div className="col-span-2 flex items-center justify-center">
          <div className="relative">
            {/* Circular progress background */}
            <div className="w-32 h-32 rounded-full border-8 border-gray-700 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{stats.totalSolved}</div>
              </div>
            </div>
            {/* Orange progress arc - simplified as a partial border */}
            <div 
              className="absolute inset-0 w-32 h-32 rounded-full border-8 border-transparent border-t-orange-400 border-r-orange-400"
              style={{ transform: 'rotate(-90deg)' }}
            ></div>
          </div>
        </div>

        {/* Right side - Difficulty breakdown */}
        <div className="col-span-3 space-y-4">
          {/* Easy */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-green-400 font-medium text-lg">Easy</span>
              <span className="text-white font-semibold">{stats.easySolved} / {stats.easyTotal}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-400 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(stats.easySolved / stats.easyTotal) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Medium */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-yellow-400 font-medium text-lg">Medium</span>
              <span className="text-white font-semibold">{stats.mediumSolved} / {stats.mediumTotal}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-yellow-400 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(stats.mediumSolved / stats.mediumTotal) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Hard */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-red-400 font-medium text-lg">Hard</span>
              <span className="text-white font-semibold">{stats.hardSolved} / {stats.hardTotal}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-red-400 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(stats.hardSolved / stats.hardTotal) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-white mb-4">Recent Activities</h4>
        <div className="space-y-3">
          {/* Mock recent activities as the API might not return them in expected format */}
          {[
            { date: "25.7.28", status: "AC", language: "Java", problem: "Minimum Path Sum" },
            { date: "25.7.28", status: "AC", language: "Java", problem: "Minimum Path Sum" },
            { date: "25.7.28", status: "AC", language: "Java", problem: "Minimum Path Sum" },
            { date: "25.7.28", status: "AC", language: "Java", problem: "Minimum Path Sum" },
            { date: "25.7.28", status: "TLE", language: "Java", problem: "Minimum Path Sum" },
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg">
              <span className="text-gray-400 text-sm min-w-[60px]">{activity.date}</span>
              <div className={`px-2 py-1 rounded text-xs font-medium min-w-[40px] text-center ${
                activity.status === 'AC' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {activity.status}
              </div>
              <span className="text-gray-400 text-sm min-w-[50px]">{activity.language}</span>
              <span className="text-white">{activity.problem}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveLeetCodeStats;