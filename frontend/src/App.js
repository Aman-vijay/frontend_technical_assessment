import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex overflow-hidden">
      <PipelineToolbar />
      <div className="flex-1 relative">
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50">
          <h1 className="text-4xl font-bold text-center text-white pt-20">Frontend Technical Assessment</h1>
        </div>
        <PipelineUI />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;