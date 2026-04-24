import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { PlayCircle } from 'lucide-react';
import type { StartNodeData } from '../../types/workflow';

export const StartNode: React.FC<{ data: StartNodeData }> = ({ data }) => {
  return (
    <div className="glass px-4 py-2 rounded-xl border-emerald-500 border-2 min-w-[150px]">
      <div className="flex items-center gap-2 font-bold text-emerald-700">
        <PlayCircle size={18} />
        {data.title || 'Start'}
      </div>
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-emerald-500" />
    </div>
  );
};
