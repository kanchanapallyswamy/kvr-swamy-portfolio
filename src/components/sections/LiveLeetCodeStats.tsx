import { useLeetCodeStats } from '@/hooks/useLeetCodeStats';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, TrendingUp, Award, Activity } from "lucide-react";

interface LiveLeetCodeStatsProps {
  username: string;
}

const LiveLeetCodeStats = ({ username }: LiveLeetCodeStatsProps) => {
  const stats = useLeetCodeStats(username);

  if (stats.isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-6 bg-gray-700 rounded mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-gray-700 rounded"></div>
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
        <p className="text-gray-400 text-xs mt-2">Showing cached data instead</p>
      </div>
    );
  }

  const getProgressColor = (solved: number, total: number) => {
    const percentage = (solved / total) * 100;
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with live indicator */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold text-portfolio-blue">🏆 Live LeetCode Stats</h3>
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </div>
            <span className="text-xs text-green-400 font-medium">LIVE</span>
          </div>
        </div>
        <Badge variant="outline" className="border-portfolio-blue/30 text-portfolio-blue">
          @{username}
        </Badge>
      </div>

      {/* Main stats grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Total Problems Solved */}
        <Card className="bg-gray-800/70 border-gray-700 hover:border-portfolio-blue/50 transition-all">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">{stats.totalSolved}</div>
            <div className="text-gray-300 text-sm">Problems Solved</div>
            <div className="text-xs text-gray-500 mt-1">
              {stats.totalQuestions ? `${((stats.totalSolved / stats.totalQuestions) * 100).toFixed(1)}% Complete` : ''}
            </div>
          </CardContent>
        </Card>

        {/* Acceptance Rate */}
        <Card className="bg-gray-800/70 border-gray-700 hover:border-portfolio-blue/50 transition-all">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">{stats.acceptanceRate.toFixed(1)}%</div>
            <div className="text-gray-300 text-sm">Acceptance Rate</div>
            <div className="text-xs text-gray-500 mt-1">
              {stats.totalSubmissions} submissions
            </div>
          </CardContent>
        </Card>

        {/* Global Ranking */}
        <Card className="bg-gray-800/70 border-gray-700 hover:border-portfolio-blue/50 transition-all">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-1">
              {stats.ranking ? `#${stats.ranking.toLocaleString()}` : 'N/A'}
            </div>
            <div className="text-gray-300 text-sm">Global Ranking</div>
            <div className="text-xs text-gray-500 mt-1">
              <TrendingUp className="inline w-3 h-3 mr-1" />
              Active Solver
            </div>
          </CardContent>
        </Card>

        {/* Reputation */}
        <Card className="bg-gray-800/70 border-gray-700 hover:border-portfolio-blue/50 transition-all">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-1">
              {stats.reputation || stats.contributionPoints || 0}
            </div>
            <div className="text-gray-300 text-sm">Reputation</div>
            <div className="text-xs text-gray-500 mt-1">
              <Award className="inline w-3 h-3 mr-1" />
              Community Points
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Difficulty breakdown */}
      <Card className="bg-gray-800/70 border-gray-700">
        <CardContent className="p-6">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Problem Difficulty Breakdown
          </h4>
          
          <div className="space-y-4">
            {/* Easy */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-medium">Easy</span>
                <span className="text-white font-semibold">
                  {stats.easySolved} / {stats.easyTotal}
                </span>
              </div>
              <Progress 
                value={(stats.easySolved / stats.easyTotal) * 100} 
                className="h-2 bg-gray-700" 
                indicatorColor={getProgressColor(stats.easySolved, stats.easyTotal)}
              />
            </div>

            {/* Medium */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-yellow-400 font-medium">Medium</span>
                <span className="text-white font-semibold">
                  {stats.mediumSolved} / {stats.mediumTotal}
                </span>
              </div>
              <Progress 
                value={(stats.mediumSolved / stats.mediumTotal) * 100} 
                className="h-2 bg-gray-700" 
                indicatorColor={getProgressColor(stats.mediumSolved, stats.mediumTotal)}
              />
            </div>

            {/* Hard */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-red-400 font-medium">Hard</span>
                <span className="text-white font-semibold">
                  {stats.hardSolved} / {stats.hardTotal}
                </span>
              </div>
              <Progress 
                value={(stats.hardSolved / stats.hardTotal) * 100} 
                className="h-2 bg-gray-700" 
                indicatorColor={getProgressColor(stats.hardSolved, stats.hardTotal)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      {stats.recentSubmissions && stats.recentSubmissions.length > 0 && (
        <Card className="bg-gray-800/70 border-gray-700">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Recent Activities
            </h4>
            
            <div className="space-y-3">
              {stats.recentSubmissions.slice(0, 5).map((submission, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3">
                    <Badge 
                      variant="outline" 
                      className={`${getDifficultyColor(submission.statusDisplay || 'AC')} border-current`}
                    >
                      {submission.statusDisplay || 'AC'}
                    </Badge>
                    <span className="text-white font-medium">
                      {submission.title || `Problem ${index + 1}`}
                    </span>
                  </div>
                  <span className="text-gray-400 text-sm">
                    {submission.timestamp || 'Recently'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Footer with profile link */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Clock className="w-4 h-4" />
          <span>Updates every 5 minutes</span>
        </div>
        <a 
          href={`https://leetcode.com/u/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-portfolio-blue hover:bg-portfolio-orange text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
        >
          View Full Profile
        </a>
      </div>
    </div>
  );
};

export default LiveLeetCodeStats;