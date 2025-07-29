interface LiveLeetCodeStatsProps {
  username: string;
}

const LiveLeetCodeStats = ({ username }: LiveLeetCodeStatsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white flex items-center gap-2">
        <span className="text-2xl">📊</span>
        LeetCode Stats (Auto-updating)
      </h3>
      
      <div className="flex justify-center">
        <img 
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=baloo&ext=heatmap`}
          alt="LeetCode Stats"
          className="rounded-lg shadow-lg max-w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LiveLeetCodeStats;