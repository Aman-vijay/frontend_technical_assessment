// filterNode.js - New node demonstrating abstraction
import { useState } from 'react';
import { ListFilter as Filter } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const FilterNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [condition, setCondition] = useState(data?.condition || 'contains');
  const [value, setValue] = useState(data?.value || '');

  const handleConditionChange = (e) => {
    const newCondition = e.target.value;
    setCondition(newCondition);
    updateNodeField(id, 'condition', newCondition);
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateNodeField(id, 'value', newValue);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      description="Data filtering node"
      icon={Filter}
      color="orange"
      inputs={[{ id: `${id}-input` }]}
      outputs={[
        { id: `${id}-passed` },
        { id: `${id}-filtered` }
      ]}
    >
      {() => (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium  mb-1">
              Condition
            </label>
            <select
              value={condition}
              onChange={handleConditionChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="contains" className="bg-gray-800">Contains</option>
              <option value="equals" className="bg-gray-800">Equals</option>
              <option value="greater" className="bg-gray-800">Greater Than</option>
              <option value="less" className="bg-gray-800">Less Than</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-white/80 mb-1">
              Value
            </label>
            <input
              type="text"
              value={value}
              onChange={handleValueChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Filter value"
            />
          </div>
        </div>
      )}
    </BaseNode>
  );
};