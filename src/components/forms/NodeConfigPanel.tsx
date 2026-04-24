import React from 'react';
import { useWorkflowStore } from '../../store/workflowStore';
import type { AppNode, TaskNodeData, ApprovalNodeData, AutomatedNodeData, EndNodeData } from '../../types/workflow';

export const NodeConfigPanel: React.FC = () => {
  const { nodes, selectedNodeId, updateNodeData } = useWorkflowStore();
  const selectedNode = nodes.find((n) => n.id === selectedNodeId) as AppNode | undefined;

  if (!selectedNode) {
    return (
      <div className="w-80 bg-white border-l border-slate-200 p-6 flex flex-col justify-center items-center text-slate-400">
        <p>Select a node to configure</p>
      </div>
    );
  }

  const handleChange = (field: string, value: any) => {
    updateNodeData(selectedNode.id, { [field]: value });
  };

  return (
    <div className="w-80 bg-white border-l border-slate-200 flex flex-col h-full shadow-sm z-10 overflow-y-auto">
      <div className="p-4 border-b border-slate-100 bg-slate-50 sticky top-0">
        <h2 className="text-lg font-bold text-slate-800 capitalize">
          {selectedNode.type} Node Config
        </h2>
        <p className="text-xs text-slate-500 font-mono mt-1">ID: {selectedNode.id}</p>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {selectedNode.type === 'start' && (
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-700">Title</label>
            <input
              type="text"
              value={selectedNode.data.title || ''}
              onChange={(e) => handleChange('title', e.target.value)}
              className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Start"
            />
          </div>
        )}

        {selectedNode.type === 'task' && (
          <>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Title <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={selectedNode.data.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="E.g., Review Document"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Assignee</label>
              <input
                type="text"
                value={(selectedNode.data as TaskNodeData).assignee || ''}
                onChange={(e) => handleChange('assignee', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="john.doe@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Description</label>
              <textarea
                value={(selectedNode.data as TaskNodeData).description || ''}
                onChange={(e) => handleChange('description', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={3}
              />
            </div>
          </>
        )}

        {selectedNode.type === 'approval' && (
          <>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Title</label>
              <input
                type="text"
                value={selectedNode.data.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Approver Role</label>
              <select
                value={(selectedNode.data as ApprovalNodeData).approverRole || ''}
                onChange={(e) => handleChange('approverRole', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
              >
                <option value="">Select Role...</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
          </>
        )}

        {selectedNode.type === 'automated' && (
          <>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Title</label>
              <input
                type="text"
                value={selectedNode.data.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">Action</label>
              <select
                value={(selectedNode.data as AutomatedNodeData).actionId || ''}
                onChange={(e) => handleChange('actionId', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
              >
                <option value="">Select API Action...</option>
                <option value="send_email">Send Email</option>
                <option value="generate_doc">Generate Document</option>
                <option value="update_record">Update Record</option>
              </select>
            </div>
          </>
        )}

        {selectedNode.type === 'end' && (
          <>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-700">End Message</label>
              <input
                type="text"
                value={(selectedNode.data as EndNodeData).endMessage || ''}
                onChange={(e) => handleChange('endMessage', e.target.value)}
                className="border border-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Workflow completed successfully."
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="isSummary"
                checked={(selectedNode.data as EndNodeData).isSummary || false}
                onChange={(e) => handleChange('isSummary', e.target.checked)}
                className="w-4 h-4 text-rose-500 rounded border-slate-300 focus:ring-rose-400"
              />
              <label htmlFor="isSummary" className="text-sm font-medium text-slate-700">
                Generate Summary Report
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
