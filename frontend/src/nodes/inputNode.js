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
    <div style={{width: 200, height: 120, border: '1px solid #10b981', borderRadius: '8px', background: '#1a1a2e', padding: '8px'}}>
      <div style={{color: 'white', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px'}}>
        Input
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
                border: '1px solid #10b981',
                background: '#2a2a3e',
                color: 'white',
                fontSize: '12px'
              }}
            />
          </label>
        </div>
        <div>
          <label style={{color: 'white', fontSize: '12px'}}>
            <select 
              value={inputType} 
              onChange={handleTypeChange}
              style={{
                width: '100%',
                marginTop: '2px',
                padding: '4px',
                borderRadius: '4px',
                border: '1px solid #10b981',
                background: '#2a2a3e',
                color: 'white',
                fontSize: '12px'
              }}
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
        style={{
          background: '#10b981',
          border: '2px solid #1a1a2e'
        }}
      />
    </div>
  );
};