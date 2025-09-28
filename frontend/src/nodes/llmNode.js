// llmNode.js
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <div className="w-[200px] h-[100px] border border-violet-500 rounded-lg bg-[#1a1a2e] p-2">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        className="top-[33%] bg-violet-500 border-2 border-[#1a1a2e]"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        className="top-[67%] bg-violet-500 border-2 border-[#1a1a2e]"
      />
      <div className="text-white text-sm font-bold mb-2 text-center">
        LLM
      </div>
      <div className="text-center">
        <div className="text-white text-[11px] opacity-70">
          AI Language Model
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="bg-violet-500 border-2 border-[#1a1a2e]"
      />
    </div>
  );
};