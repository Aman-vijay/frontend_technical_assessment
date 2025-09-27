// textNode.js
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div style={{width: 200, height: 120, border: '1px solid #667eea', borderRadius: '8px', background: '#1a1a2e', padding: '8px'}}>
      <div style={{color: 'white', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px'}}>
        Text
      </div>
      <div>
        <label style={{color: 'white', fontSize: '12px'}}>
          Text:
          <textarea 
            value={currText} 
            onChange={handleTextChange}
            style={{
              width: '100%',
              height: '60px',
              marginTop: '4px',
              padding: '4px',
              borderRadius: '4px',
              border: '1px solid #667eea',
              background: '#2a2a3e',
              color: 'white',
              fontSize: '12px',
              resize: 'none'
            }}
            placeholder="Enter text content"
          />
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: '#667eea',
          border: '2px solid #1a1a2e'
        }}
      />
    </div>
  );
};