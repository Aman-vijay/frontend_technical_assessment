import { Play, X, CheckCircle, AlertCircle } from 'lucide-react';
import { useStore } from './store';
import { useState } from 'react';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [modal, setModal] = useState(null);

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
        setModal({
          type: 'success',
          title: 'Pipeline Analysis',
          content: (
            <div className="space-y-2">
              <p><strong>Nodes:</strong> {data.num_nodes}</p>
              <p><strong>Edges:</strong> {data.num_edges}</p>
              <p><strong>Is DAG:</strong> {data.is_dag ? 'Yes' : 'No'}</p>
              <p className={`font-semibold ${data.is_dag ? 'text-green-600' : 'text-red-600'}`}>
                {data.is_dag ? '✅ Your pipeline is valid!' : '❌ Your pipeline contains cycles!'}
              </p>
            </div>
          )
        });
      } else {
        setModal({
          type: 'error',
          title: 'Submission Error',
          content: 'Error submitting pipeline. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setModal({
        type: 'error',
        title: 'Connection Error',
        content: 'Error connecting to backend. Please ensure the backend is running.'
      });
    }
  };

  return (
    <>
      <div className="absolute bottom-6 right-6 z-10">
        <button
          onClick={handleSubmit}
          className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Submit
        </button>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 m-4 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {modal.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
                <h2 className="text-lg font-semibold">{modal.title}</h2>
              </div>
              <button
                onClick={() => setModal(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-gray-700">
              {typeof modal.content === 'string' ? (
                <p>{modal.content}</p>
              ) : (
                modal.content
              )}
            </div>
            <div className="mt-6 text-right">
              <button
                onClick={() => setModal(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}