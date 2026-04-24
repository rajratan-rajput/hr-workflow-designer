import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { UserCheck } from 'lucide-react';
import type { ApprovalNodeData } from '../../types/workflow';

export const ApprovalNode: React.FC<{ data: ApprovalNodeData }> = ({ data }) => {
  return (
    <div className="glass px-4 py-3 rounded-xl border-amber-500 border-2 min-w-[180px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 bg-amber-500" />
      <div className="flex items-center gap-2 font-bold text-amber-700 mb-1">
        <UserCheck size={18} />
        {data.title || 'Approval'}
      </div>
      {data.approverRole && <div className="text-xs text-slate-600">Role: {data.approverRole}</div>}
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 bg-amber-500" />
    </div>
  );
};
