// textNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="w-[200px] h-[140px] border border-[#667eea] rounded-lg bg-[#1a1a2e] p-2">
      <div className="text-white text-sm font-bold mb-2">
        Text
      </div>
      <div>
        <label className="text-white text-xs">
          Text:
          <textarea 
            value={currText} 
            onChange={handleTextChange}
            className="w-full h-[60px] mt-1 p-1 rounded border border-[#667eea] bg-[#2a2a3e] text-white text-xs resize-none"
            placeholder="Enter text content"
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="bg-[#667eea] border-2 border-[#1a1a2e]"
      />
    </div>
  );
};