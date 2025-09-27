// llmNode.js
import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <div style={{width: 200, height: 100, border: '1px solid #8b5cf6', borderRadius: '8px', background: '#1a1a2e', padding: '8px'}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          top: '33%',
          background: '#8b5cf6',
          border: '2px solid #1a1a2e'
        }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: '67%',
          background: '#8b5cf6',
          border: '2px solid #1a1a2e'
        }}
      />
      <div style={{color: 'white', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center'}}>
        LLM
      </div>
      <div style={{textAlign: 'center'}}>
        <div style={{color: 'white', fontSize: '11px', opacity: 0.7}}>
          AI Language Model
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          background: '#8b5cf6',
          border: '2px solid #1a1a2e'
        }}
      />
    </div>
  );
};