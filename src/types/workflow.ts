import type { Node, Edge } from '@xyflow/react';

export type NodeType = 'start' | 'task' | 'approval' | 'automated' | 'end';

export interface BaseNodeData extends Record<string, unknown> {
  title: string;
}

export interface StartNodeData extends BaseNodeData {
  metadata: Record<string, string>;
}

export interface TaskNodeData extends BaseNodeData {
  description: string;
  assignee: string;
  dueDate: string;
  customFields: Record<string, string>;
}

export interface ApprovalNodeData extends BaseNodeData {
  approverRole: string;
  autoApproveThreshold: number;
}

export interface AutomatedNodeData extends BaseNodeData {
  actionId: string;
  params: Record<string, string>;
}

export interface EndNodeData extends BaseNodeData {
  endMessage: string;
  isSummary: boolean;
}

export type AppNode = Node<BaseNodeData, NodeType>;
export type AppEdge = Edge;
