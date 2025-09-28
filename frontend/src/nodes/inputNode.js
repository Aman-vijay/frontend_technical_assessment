// inputNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="w-[200px] h-[120px] border border-emerald-500 rounded-lg bg-[#1a1a2e] p-2">
      <div className="text-white text-sm font-bold mb-2">
        Input
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <label style={{color: 'white', fontSize: '12px'}}>
            Name:
            <input 
              type="text" 
              value={currName} 
              onChange={handleNameChange}
              className="w-full mt-0.5 p-1 rounded border border-emerald-500 bg-[#2a2a3e] text-white text-xs"
            />
          </label>
        </div>
        <div>
          <label className="text-white text-xs">
            <select 
              value={inputType} 
              onChange={handleTypeChange}
              className="w-full mt-0.5 p-1 rounded border border-emerald-500 bg-[#2a2a3e] text-white text-xs"
            >
              <option value="Text">Text</option>
              <option value="File">File</option>
            </select>
          </label>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="bg-emerald-500 border-2 border-[#1a1a2e]"
      />
    </div>
  );
};