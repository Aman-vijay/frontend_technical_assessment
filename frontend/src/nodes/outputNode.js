// outputNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="w-[200px] h-[160px] border border-amber-500 rounded-lg bg-[#1a1a2e] p-2">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="bg-amber-500 border-2 border-[#1a1a2e]"
      />
      <div className="text-white text-sm font-bold mb-2">
        Output
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <label className="text-white text-xs">
            Name:
            <input 
              type="text" 
              value={currName} 
              onChange={handleNameChange}
              className="w-full mt-0.5 p-1 rounded border border-amber-500 bg-[#2a2a3e] text-white text-xs"
            />
          </label>
        </div>
        <div>
          <label className="text-white text-xs">
            Type:
            <select 
              value={outputType} 
              onChange={handleTypeChange}
              className="w-full mt-0.5 p-1 rounded border border-amber-500 bg-[#2a2a3e] text-white text-xs"
            >
              <option value="Text">Text</option>
              <option value="Image">Image</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};