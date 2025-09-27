// outputNode.js
import { useState } from 'react';
import { Download, Image } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const OutputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setCurrName(newName);
    updateNodeField(id, 'outputName', newName);
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setOutputType(newType);
    updateNodeField(id, 'outputType', newType);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      description="Data output node"
      icon={outputType === 'Image' ? Image : Download}
      color="orange"
      inputs={[{ id: `${id}-value` }]}
    >
      {() => (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Name
            </label>
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter output name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Type
            </label>
            <select
              value={outputType}
              onChange={handleTypeChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Text" className="bg-gray-800">Text</option>
              <option value="Image" className="bg-gray-800">Image</option>
            </select>
          </div>
        </div>
      )}
    </BaseNode>
  );
};