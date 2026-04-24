import React from 'react';
import { PlayCircle, XCircle } from 'lucide-react';
import { useWorkflowStore } from '../../store/workflowStore';
import { simulateWorkflow } from '../../utils/simulator';

export const SimulationPanel: React.FC = () => {
  const { nodes, edges, isSimulating, simulationLogs, setSimulationState, addSimulationLog } = useWorkflowStore();

  const handleRun = async () => {
    setSimulationState(true, []);
    await simulateWorkflow(nodes, edges, addSimulationLog);
    setSimulationState(false, useWorkflowStore.getState().simulationLogs);
  };

  return (
    <div className="h-48 bg-slate-900 text-slate-300 border-t border-slate-700 flex flex-col font-mono text-sm z-20 relative">
      <div className="flex items-center justify-between p-2 border-b border-slate-700 bg-slate-800">
        <span className="font-bold text-slate-100 px-2">Simulation Sandbox</span>
        <div className="flex gap-2">
          <button
            onClick={handleRun}
            disabled={isSimulating}
            className={`flex items-center gap-1 px-3 py-1 rounded text-white text-xs font-bold transition-colors ${
              isSimulating ? 'bg-slate-600 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500'
            }`}
          >
            <PlayCircle size={14} />
            {isSimulating ? 'Running...' : 'Run Simulation'}
          </button>
          <button
            onClick={() => setSimulationState(false, [])}
            className="flex items-center gap-1 px-3 py-1 rounded text-white text-xs font-bold bg-slate-700 hover:bg-slate-600 transition-colors"
          >
            <XCircle size={14} />
            Clear
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-1">
        {simulationLogs.length === 0 ? (
          <div className="text-slate-500 italic">Click "Run Simulation" to see execution step-by-step...</div>
        ) : (
          simulationLogs.map((log, i) => (
            <div key={i} className={`${log.startsWith('ERROR') ? 'text-red-400 font-bold' : log.includes('successfully') ? 'text-emerald-400' : 'text-slate-300'}`}>
              <span className="text-slate-500">[{new Date().toLocaleTimeString()}]</span> {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
