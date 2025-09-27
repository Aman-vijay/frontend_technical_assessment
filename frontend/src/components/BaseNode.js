// BaseNode.js - Abstract base component for all nodes
import { useState, useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import { cn } from '../lib/utils';

export const BaseNode = ({ 
  id, 
  data, 
  title,
  description,
  icon: Icon,
  color = "blue",
  inputs = [],
  outputs = [],
  children,
  className,
  onDataChange
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = useCallback((field, value) => {
    if (onDataChange) {
      onDataChange(id, field, value);
    }
  }, [id, onDataChange]);

  const colorClasses = {
    blue: "from-blue-500/20 to-purple-500/20 border-blue-500/30",
    green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    orange: "from-orange-500/20 to-red-500/20 border-orange-500/30",
    purple: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    teal: "from-teal-500/20 to-cyan-500/20 border-teal-500/30",
  };

  return (
    <div className={cn(
      "relative min-w-[200px] bg-gradient-to-br rounded-lg border backdrop-blur-sm",
      "shadow-lg hover:shadow-xl transition-all duration-200",
      "hover:scale-[1.02] group",
      colorClasses[color] || colorClasses.blue,
      className
    )}>
      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: inputs.length === 1 ? '50%' : `${((index + 1) * 100) / (inputs.length + 1)}%`,
            background: '#667eea',
            border: '2px solid #1a1a2e',
            width: '10px',
            height: '10px',
          }}
          className="transition-all duration-200 hover:scale-125"
        />
      ))}

      {/* Node Header */}
      <div className="flex items-center gap-3 p-4 pb-2">
        {Icon && (
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white truncate">{title}</h3>
          {description && (
            <p className="text-xs text-white/70 truncate">{description}</p>
          )}
        </div>
        {children && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <span className={cn(
              "text-xs text-white transition-transform duration-200",
              isExpanded ? "rotate-180" : ""
            )}>
              ▼
            </span>
          </button>
        )}
      </div>

      {/* Node Content */}
      {children && (
        <div className={cn(
          "px-4 pb-4 transition-all duration-200 overflow-hidden",
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          {typeof children === 'function' 
            ? children({ data, handleInputChange }) 
            : children
          }
        </div>
      )}

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: outputs.length === 1 ? '50%' : `${((index + 1) * 100) / (outputs.length + 1)}%`,
            background: '#667eea',
            border: '2px solid #1a1a2e',
            width: '10px',
            height: '10px',
          }}
          className="transition-all duration-200 hover:scale-125"
        />
      ))}

      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
    </div>
  );
};