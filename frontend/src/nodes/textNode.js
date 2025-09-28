import { useState, useEffect, useRef } from 'react';
import { Type } from 'lucide-react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const deleteNode = useStore((state) => state.deleteNode);
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Extract variables from text using regex
  const extractVariables = (text) => {
    const variableRegex = /\{\{(\w+)\}\}/g;
    return [...new Set([...text.matchAll(variableRegex)].map(m => m[1]))];
  };

  // Auto-resize textarea
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Handle text change
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setCurrText(newText);

    // Update store
    updateNodeField(id, 'text', newText);

    // Extract variables and update handles
    const newVariables = extractVariables(newText);
    setVariables(newVariables);
    updateNodeField(id, 'variables', newVariables);

    // Auto-resize
    setTimeout(autoResize, 0);
  };

  // Initialize variables on mount (and whenever currText changes)
  useEffect(() => {
    const initialVariables = extractVariables(currText);
    setVariables(initialVariables);
    setTimeout(autoResize, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currText]);

  // Build dynamic inputs
  const dynamicInputs = variables.map(v => ({ id: `${id}-${v}`, label: v }));

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      description={
        variables.length
          ? `${variables.length} variable${variables.length > 1 ? 's' : ''} detected`
          : "Text processing node"
      }
      icon={Type}
      color="blue"
      inputs={dynamicInputs}
      outputs={[{ id: `${id}-output` }]}
      onDelete={deleteNode}
      className={variables.length > 0 ? "border-emerald-500/30" : ""}
    >
      {() => (
        <div className="space-y-3">
          <label className="block text-xs font-medium text-white/80 mb-1">
            Text Content
          </label>
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            onInput={autoResize}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white text-sm resize-none focus:ring-2 focus:ring-blue-500 overflow-y-auto"
            placeholder="Enter text with {{variables}}"
            style={{ minHeight: '60px', lineHeight: '1.4', maxHeight: '200px' }}
          />

          {/* Variables Preview */}
          {variables.length > 0 && (
            <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
              <div className="text-xs text-emerald-300 font-medium mb-2">Variables Detected</div>
              <div className="flex flex-wrap gap-1">
                {variables.map(v => (
                  <span
                    key={v}
                    className="text-xs bg-emerald-500/20 text-emerald-200 px-2 py-1 rounded-full border border-emerald-500/30 font-mono"
                  >
                    {`{{${v}}}`}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Usage Hint */}
          {variables.length === 0 && !currText.includes('{{') && (
            <div className="text-xs text-blue-400/70 italic">
              💡 Use {'{{variableName}}'} syntax to create dynamic inputs
            </div>
          )}
        </div>
      )}
    </BaseNode>
  );
};
