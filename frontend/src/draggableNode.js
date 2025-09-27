// draggableNode.js
import { cn } from './lib/utils';

export const DraggableNode = ({ type, label, icon: Icon, color = "blue" }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const colorClasses = {
    blue: "from-blue-500/20 to-purple-500/20 border-blue-500/50 hover:border-blue-400",
    green: "from-green-500/20 to-emerald-500/20 border-green-500/50 hover:border-green-400",
    orange: "from-orange-500/20 to-red-500/20 border-orange-500/50 hover:border-orange-400",
    purple: "from-purple-500/20 to-pink-500/20 border-purple-500/50 hover:border-purple-400",
    teal: "from-teal-500/20 to-cyan-500/20 border-teal-500/50 hover:border-teal-400",
  };

  return (
    <div
      className={cn(
        "group cursor-grab active:cursor-grabbing",
        "min-w-[120px] h-16 px-4 py-3",
        "bg-gradient-to-br rounded-lg border backdrop-blur-sm",
        "flex items-center gap-3",
        "shadow-lg hover:shadow-xl transition-all duration-200",
        "hover:scale-105 hover:-translate-y-1",
        colorClasses[color] || colorClasses.blue
      )}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      {Icon && (
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <Icon className="w-4 h-4 text-white" />
        </div>
      )}
      <span className="text-sm font-medium text-white truncate">{label}</span>
      
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </div>
  );
};