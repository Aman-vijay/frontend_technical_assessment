// databaseNode.js - New node demonstrating abstraction
import { useState } from 'react';
import { Database } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const DatabaseNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [query, setQuery] = useState(data?.query || 'SELECT * FROM table');
  const [dbType, setDbType] = useState(data?.dbType || 'PostgreSQL');

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    updateNodeField(id, 'query', newQuery);
  };

  const handleDbTypeChange = (e) => {
    const newDbType = e.target.value;
    setDbType(newDbType);
    updateNodeField(id, 'dbType', newDbType);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Database"
      description="Database query node"
      icon={Database}
      color="green"
      inputs={[{ id: `${id}-params` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      {() => (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Database Type
            </label>
            <select
              value={dbType}
              onChange={handleDbTypeChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="PostgreSQL" className="bg-gray-800">PostgreSQL</option>
              <option value="MySQL" className="bg-gray-800">MySQL</option>
              <option value="MongoDB" className="bg-gray-800">MongoDB</option>
              <option value="Redis" className="bg-gray-800">Redis</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Query
            </label>
            <textarea
              value={query}
              onChange={handleQueryChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Enter SQL query"
              rows={3}
            />
          </div>
        </div>
      )}
    </BaseNode>
  );
};