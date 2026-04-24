import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { StopCircle } from 'lucide-react';
import type { EndNodeData } from '../../types/workflow';

export const EndNode: React.FC<{ data: EndNodeData }> = ({ data }) => {
  return (
    <div className="glass px-4 py-2 rounded-xl border-rose-500 border-2 min-w-[150px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-rose-500" />
      <div className="flex items-center gap-2 font-bold text-rose-700">
        <StopCircle size={18} />
        {data.title || 'End'}
      </div>
    </div>
  );
};
