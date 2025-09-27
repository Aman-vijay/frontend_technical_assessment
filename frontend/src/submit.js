// submit.js
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
    <div style={{
      position: 'absolute',
      bottom: '24px',
      right: '24px',
      zIndex: 10
    }}>
      <button
        onClick={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 24px',
          background: 'linear-gradient(to right, #2563eb, #9333ea)',
          color: 'white',
          fontWeight: '600',
          borderRadius: '8px',
          border: 'none',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(to right, #1d4ed8, #7c3aed)';
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(to right, #2563eb, #9333ea)';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        }}
      >
        <Play style={{ width: '20px', height: '20px' }} />
        Run Pipeline
      </button>
    </div>
  );
};