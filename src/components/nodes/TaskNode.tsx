import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { ClipboardList } from 'lucide-react';
import type { TaskNodeData } from '../../types/workflow';

export const TaskNode: React.FC<{ data: TaskNodeData }> = ({ data }) => {
  return (
    <div className="glass px-4 py-3 rounded-xl border-blue-400 border-2 min-w-[180px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-blue-400" />
      <div className="flex items-center gap-2 font-bold text-blue-800 mb-1">
        <ClipboardList size={18} />
        {data.title || 'Task'}
      </div>
      {data.assignee && <div className="text-xs text-slate-600">👤 {data.assignee}</div>}
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-blue-400" />
    </div>
  );
};
