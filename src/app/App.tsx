import React from 'react';
import { Sidebar } from '../components/sidebar/Sidebar';
import { WorkflowCanvas } from '../components/canvas/WorkflowCanvas';
import { NodeConfigPanel } from '../components/forms/NodeConfigPanel';
import { SimulationPanel } from '../components/sandbox/SimulationPanel';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-slate-100 overflow-hidden font-sans">
      <header className="bg-slate-900 text-white px-4 py-3 flex items-center shadow-md z-20">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3 font-bold shadow-inner">HR</div>
        <h1 className="text-xl font-bold tracking-tight">Workflow Designer</h1>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <div className="flex-1 flex flex-col relative">
          <WorkflowCanvas />
          <SimulationPanel />
        </div>
        
        <NodeConfigPanel />
      </div>
    </div>
  );
};

export default App;
