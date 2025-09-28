import { Play } from 'lucide-react';
import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Pipeline Analysis:
        
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? 'Yes' : 'No'}
        
${data.is_dag ? '✅ Your pipeline is valid!' : '❌ Your pipeline contains cycles!'}`);
      } else {
        alert('Error submitting pipeline. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to backend. Please ensure the backend is running.');
    }
  };

  return (
    <div className="absolute bottom-6 right-6 z-10">
      <button
        onClick={handleSubmit}
        className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
      >
        <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
       submit
      </button>
    </div>
  );
};