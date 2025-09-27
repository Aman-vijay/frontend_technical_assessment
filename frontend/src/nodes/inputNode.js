// inputNode.js
import { useState } from 'react';
import { Upload, Type } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const InputNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setCurrName(newName);
    updateNodeField(id, 'inputName', newName);
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setInputType(newType);
    updateNodeField(id, 'inputType', newType);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      description="Data input node"
      icon={inputType === 'File' ? Upload : Type}
      color="green"
      outputs={[{ id: `${id}-value` }]}
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
              placeholder="Enter input name"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Type
            </label>
            <select
              value={inputType}
              onChange={handleTypeChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="Text" className="bg-gray-800">Text</option>
              <option value="File" className="bg-gray-800">File</option>
            </select>
          </div>
        </div>
      )}
    </BaseNode>
  );
};