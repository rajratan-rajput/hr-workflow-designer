import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { Settings } from 'lucide-react';
import type { AutomatedNodeData } from '../../types/workflow';

export const AutomatedNode: React.FC<{ data: AutomatedNodeData }> = ({ data }) => {
  return (
    <div className="glass px-4 py-3 rounded-xl border-purple-500 border-2 min-w-[180px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-purple-500" />
      <div className="flex items-center gap-2 font-bold text-purple-800 mb-1">
        <Settings size={18} />
        {data.title || 'Automated Step'}
      </div>
      {data.actionId && <div className="text-xs text-slate-600 font-mono">Action: {data.actionId}</div>}
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-purple-500" />
    </div>
  );
};
