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
    <div style={{width: 200, height: 120, border: '1px solid #f59e0b', borderRadius: '8px', background: '#1a1a2e', padding: '8px'}}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{
          background: '#f59e0b',
          border: '2px solid #1a1a2e'
        }}
      />
      <div style={{color: 'white', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px'}}>
        Output
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <div>
          <label style={{color: 'white', fontSize: '12px'}}>
            Name:
            <input 
              type="text" 
              value={currName} 
              onChange={handleNameChange}
              style={{
                width: '100%',
                marginTop: '2px',
                padding: '4px',
                borderRadius: '4px',
                border: '1px solid #f59e0b',
                background: '#2a2a3e',
                color: 'white',
                fontSize: '12px'
              }}
            />
          </label>
        </div>
        <div>
          <label style={{color: 'white', fontSize: '12px'}}>
            Type:
            <select 
              value={outputType} 
              onChange={handleTypeChange}
              style={{
                width: '100%',
                marginTop: '2px',
                padding: '4px',
                borderRadius: '4px',
                border: '1px solid #f59e0b',
                background: '#2a2a3e',
                color: 'white',
                fontSize: '12px'
              }}
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