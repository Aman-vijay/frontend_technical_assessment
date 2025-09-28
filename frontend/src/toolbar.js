// toolbar.js
import { Upload, Download, Brain, Type, Globe, Database, Shuffle, ListFilter as Filter, ChartBar as BarChart3 } from 'lucide-react';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  const nodeCategories = [
    {
      title: "Input/Output",
      nodes: [
        { type: 'customInput', label: 'Input', icon: Upload, color: 'green' },
        { type: 'customOutput', label: 'Output', icon: Download, color: 'orange' },
      ]
    },
    {
      title: "Processing",
      nodes: [
        { type: 'llm', label: 'LLM', icon: Brain, color: 'purple' },
        { type: 'text', label: 'Text', icon: Type, color: 'blue' },
        { type: 'transform', label: 'Transform', icon: Shuffle, color: 'purple' },
        { type: 'filter', label: 'Filter', icon: Filter, color: 'orange' },
        { type: 'aggregate', label: 'Aggregate', icon: BarChart3, color: 'teal' },
      ]
    },
    {
      title: "External",
      nodes: [
        { type: 'api', label: 'API Call', icon: Globe, color: 'teal' },
        { type: 'database', label: 'Database', icon: Database, color: 'green' },
      ]
    }
  ];

  return (
    <div className="w-80 h-full bg-gradient-to-b from-gray-900 to-gray-800 border-r border-gray-700 overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-xl font-bold text-white mb-2">Build Pipeline</h2>
        <p className="text-sm text-gray-400">Drag nodes to create your pipeline</p>
      </div>

      {/* Node Categories */}
      <div className="p-4 space-y-6">
        {nodeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {category.nodes.map((node, nodeIndex) => (
                <DraggableNode
                  key={nodeIndex}
                  type={node.type}
                  label={node.label}
                  icon={node.icon}
                  color={node.color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 mt-auto border-t border-gray-700">
        <p className="text-xs text-gray-500 text-center">
          Drag and drop nodes to build your pipeline
        </p>
      </div>
    </div>
  );
};