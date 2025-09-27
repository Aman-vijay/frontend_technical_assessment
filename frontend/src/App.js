import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex overflow-hidden">
      <PipelineToolbar />
      <div className="flex-1 relative">
        <PipelineUI />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;