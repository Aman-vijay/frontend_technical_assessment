// draggableNode.js

export const DraggableNode = ({ type, label, icon: Icon, color = "blue" }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const colorClasses = {
    blue: "cursor-grab min-w-[120px] h-16 px-4 py-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-lg backdrop-blur-sm flex items-center gap-3 shadow-lg transition-all duration-200 relative hover:scale-105 hover:-translate-y-1 hover:shadow-xl",
    green: "cursor-grab min-w-[120px] h-16 px-4 py-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-lg backdrop-blur-sm flex items-center gap-3 shadow-lg transition-all duration-200 relative hover:scale-105 hover:-translate-y-1 hover:shadow-xl",
    orange: "cursor-grab min-w-[120px] h-16 px-4 py-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/50 rounded-lg backdrop-blur-sm flex items-center gap-3 shadow-lg transition-all duration-200 relative hover:scale-105 hover:-translate-y-1 hover:shadow-xl",
    purple: "cursor-grab min-w-[120px] h-16 px-4 py-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-lg backdrop-blur-sm flex items-center gap-3 shadow-lg transition-all duration-200 relative hover:scale-105 hover:-translate-y-1 hover:shadow-xl",
    teal: "cursor-grab min-w-[120px] h-16 px-4 py-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/50 rounded-lg backdrop-blur-sm flex items-center gap-3 shadow-lg transition-all duration-200 relative hover:scale-105 hover:-translate-y-1 hover:shadow-xl",
  };

  const currentColorClass = colorClasses[color] || colorClasses.blue;

  return (
    <div
      className={currentColorClass}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      {Icon && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-colors group-hover:bg-white/20">
          <Icon className="w-4 h-4 text-white" />
        </div>
      )}
      <span className="text-sm font-medium text-white truncate">{label}</span>
    </div>
  );
};