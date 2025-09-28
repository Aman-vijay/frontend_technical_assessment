import { Brain } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const LLMNode = ({ id, data }) => {
  const deleteNode = useStore((state) => state.deleteNode);
  
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      description="AI Language Model"
      icon={Brain}
      color="purple"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      outputs={[{ id: `${id}-response` }]}
      onDelete={deleteNode}
    >
      {() => (
        <div className="space-y-3">
          <div className="text-center">
            <div className="text-xs text-white/70">
              Connect system message and prompt inputs to generate AI responses
            </div>
          </div>
        </div>
      )}
    </BaseNode>
  );
};