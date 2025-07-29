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
      
      <div className="w-full space-y-4">
        <img 
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=baloo&ext=activity`}
          alt="LeetCode Stats"
          className="w-full h-auto rounded-lg shadow-lg"
          loading="lazy"
        />
        <img 
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=baloo&ext=heatmap`}
          alt="LeetCode Heatmap"
          className="w-full h-auto rounded-lg shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LiveLeetCodeStats;