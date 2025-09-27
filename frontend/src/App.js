import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'linear-gradient(to bottom right, #111827, #1f2937, #111827)',
      display: 'flex',
      overflow: 'hidden'
    }}>
      <PipelineToolbar />
      <div style={{
        flex: 1,
        position: 'relative'
      }}>
        <PipelineUI />
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;