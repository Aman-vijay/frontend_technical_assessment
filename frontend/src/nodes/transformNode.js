// transformNode.js - New node demonstrating abstraction
import { useState } from 'react';
import { Shuffle } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const TransformNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [operation, setOperation] = useState(data?.operation || 'uppercase');
  const [customCode, setCustomCode] = useState(data?.customCode || '');

  const handleOperationChange = (e) => {
    const newOperation = e.target.value;
    setOperation(newOperation);
    updateNodeField(id, 'operation', newOperation);
  };

  const handleCustomCodeChange = (e) => {
    const newCode = e.target.value;
    setCustomCode(newCode);
    updateNodeField(id, 'customCode', newCode);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      description="Data transformation"
      icon={Shuffle}
      color="purple"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      {() => (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Operation
            </label>
            <select
              value={operation}
              onChange={handleOperationChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="uppercase" className="bg-gray-800">Uppercase</option>
              <option value="lowercase" className="bg-gray-800">Lowercase</option>
              <option value="reverse" className="bg-gray-800">Reverse</option>
              <option value="custom" className="bg-gray-800">Custom</option>
            </select>
          </div>
          {operation === 'custom' && (
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">
                Custom Code
              </label>
              <textarea
                value={customCode}
                onChange={handleCustomCodeChange}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="return input.toUpperCase();"
                rows={2}
              />
            </div>
          )}
        </div>
      )}
    </BaseNode>
  );
};