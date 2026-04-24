import React from 'react';
import { PlayCircle, ClipboardList, UserCheck, Settings, StopCircle } from 'lucide-react';
import type { NodeType } from '../../types/workflow';

export const Sidebar: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: NodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const DraggableNode = ({ type, label, icon: Icon, colorClass }: { type: NodeType, label: string, icon: any, colorClass: string }) => (
    <div
      className={`flex items-center gap-3 p-3 mb-2 rounded-lg border-2 cursor-grab bg-white hover:shadow-md transition-shadow ${colorClass}`}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <Icon size={20} />
      <span className="font-medium text-sm">{label}</span>
    </div>
  );

  return (
    <div className="w-64 bg-slate-50 border-r border-slate-200 p-4 flex flex-col h-full shadow-sm z-10">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Node Types</h2>
      <div className="flex flex-col gap-2">
        <DraggableNode type="start" label="Start Node" icon={PlayCircle} colorClass="border-emerald-200 text-emerald-700 hover:border-emerald-400" />
        <DraggableNode type="task" label="Task Node" icon={ClipboardList} colorClass="border-blue-200 text-blue-700 hover:border-blue-400" />
        <DraggableNode type="approval" label="Approval Node" icon={UserCheck} colorClass="border-amber-200 text-amber-700 hover:border-amber-400" />
        <DraggableNode type="automated" label="Automated Step" icon={Settings} colorClass="border-purple-200 text-purple-700 hover:border-purple-400" />
        <DraggableNode type="end" label="End Node" icon={StopCircle} colorClass="border-rose-200 text-rose-700 hover:border-rose-400" />
      </div>
      <div className="mt-auto text-xs text-slate-500 italic">
        Drag and drop nodes onto the canvas to build your workflow.
      </div>
    </div>
  );
};
