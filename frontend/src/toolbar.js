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
    <div style={{
      width: '320px',
      height: '100%',
      background: 'linear-gradient(to bottom, #111827, #1f2937)',
      borderRight: '1px solid #374151',
      overflowY: 'auto'
    }}>
      {/* Header */}
      <div style={{
        padding: '24px',
        borderBottom: '1px solid #374151'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '8px'
        }}>Build Pipeline</h2>
        <p style={{
          fontSize: '14px',
          color: '#9ca3af'
        }}>Drag nodes to create your pipeline</p>
      </div>

      {/* Node Categories */}
      <div style={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {nodeCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#d1d5db',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {category.title}
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
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
      <div style={{
        padding: '16px',
        marginTop: 'auto',
        borderTop: '1px solid #374151'
      }}>
        <p style={{
          fontSize: '12px',
          color: '#6b7280',
          textAlign: 'center'
        }}>
          Drag and drop nodes to build your pipeline
        </p>
      </div>
    </div>
  );
};