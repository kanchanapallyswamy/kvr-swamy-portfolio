interface LiveLeetCodeStatsProps {
  username: string;
}

const LiveLeetCodeStats = ({ username }: LiveLeetCodeStatsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        <span className="text-xl">📊</span>
        LeetCode Stats
      </h3>
      
      <div className="w-full">
        <img 
          src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=baloo&ext=heatmap,activity`}
          alt="LeetCode Stats"
          className="w-full h-auto rounded-lg shadow-lg max-w-2xl mx-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LiveLeetCodeStats;