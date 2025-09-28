// textNode.js
import { useState } from 'react';
import { Type } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);
    updateNodeField(id, 'text', newText);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      description="Text processing node"
      icon={Type}
      color="blue"
      inputs={[]}
      outputs={[{ id: `${id}-output` }]}
    >
      {() => (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Text Content
            </label>
            <textarea 
              value={currText} 
              onChange={handleTextChange}
              className="w-full h-20 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter text content or use {{variables}}"
            />
          </div>
        </div>
      )}
    </BaseNode>
  );
};