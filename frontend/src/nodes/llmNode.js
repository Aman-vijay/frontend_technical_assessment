// llmNode.js
import { Brain } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      description="Large Language Model"
      icon={Brain}
      color="purple"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      {() => (
        <div className="text-center py-2">
          <p className="text-xs text-white/70">
            Processes natural language using AI
          </p>
        </div>
      )}
    </BaseNode>
  );
};