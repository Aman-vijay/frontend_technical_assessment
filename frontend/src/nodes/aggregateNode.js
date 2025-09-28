import { useState } from 'react';
import { ChartBar as BarChart3 } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const AggregateNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const deleteNode = useStore((state) => state.deleteNode);
  const [operation, setOperation] = useState(data?.operation || 'sum');
  const [groupBy, setGroupBy] = useState(data?.groupBy || '');

  const handleOperationChange = (e) => {
    const newOperation = e.target.value;
    setOperation(newOperation);
    updateNodeField(id, 'operation', newOperation);
  };

  const handleGroupByChange = (e) => {
    const newGroupBy = e.target.value;
    setGroupBy(newGroupBy);
    updateNodeField(id, 'groupBy', newGroupBy);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Aggregate"
      description="Data aggregation node"
      icon={BarChart3}
      color="teal"
      inputs={[{ id: `${id}-data` }]}
      outputs={[{ id: `${id}-result` }]}
      onDelete={deleteNode}
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
              <option value="sum" className="bg-gray-800">Sum</option>
              <option value="average" className="bg-gray-800">Average</option>
              <option value="count" className="bg-gray-800">Count</option>
              <option value="min" className="bg-gray-800">Minimum</option>
              <option value="max" className="bg-gray-800">Maximum</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Group By (optional)
            </label>
            <input
              type="text"
              value={groupBy}
              onChange={handleGroupByChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Field to group by"
            />
          </div>
        </div>
      )}
    </BaseNode>
  );
};