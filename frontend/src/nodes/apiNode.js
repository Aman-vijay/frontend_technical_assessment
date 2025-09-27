// apiNode.js - New node demonstrating abstraction
import { useState } from 'react';
import { Globe } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const ApiNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    updateNodeField(id, 'url', newUrl);
  };

  const handleMethodChange = (e) => {
    const newMethod = e.target.value;
    setMethod(newMethod);
    updateNodeField(id, 'method', newMethod);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="API Call"
      description="HTTP API request"
      icon={Globe}
      color="teal"
      inputs={[{ id: `${id}-data` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      {() => (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              URL
            </label>
            <input
              type="url"
              value={url}
              onChange={handleUrlChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://api.example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Method
            </label>
            <select
              value={method}
              onChange={handleMethodChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="GET" className="bg-gray-800">GET</option>
              <option value="POST" className="bg-gray-800">POST</option>
              <option value="PUT" className="bg-gray-800">PUT</option>
              <option value="DELETE" className="bg-gray-800">DELETE</option>
            </select>
          </div>
        </div>
      )}
    </BaseNode>
  );
};