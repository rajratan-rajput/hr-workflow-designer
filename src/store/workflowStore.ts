import { create } from 'zustand';
import {
  type Connection,
  type EdgeChange,
  type NodeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';
import type { AppNode, AppEdge } from '../types/workflow';

interface WorkflowState {
  nodes: AppNode[];
  edges: AppEdge[];
  selectedNodeId: string | null;
  isSimulating: boolean;
  simulationLogs: string[];
  
  onNodesChange: (changes: NodeChange<AppNode>[]) => void;
  onEdgesChange: (changes: EdgeChange<AppEdge>[]) => void;
  onConnect: (connection: Connection) => void;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: AppEdge[]) => void;
  addNode: (node: AppNode) => void;
  updateNodeData: (id: string, data: any) => void;
  setSelectedNodeId: (id: string | null) => void;
  setSimulationState: (isSimulating: boolean, logs?: string[]) => void;
  addSimulationLog: (log: string) => void;
}

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
  nodes: [],
  edges: [],
  selectedNodeId: null,
  isSimulating: false,
  simulationLogs: [],

  onNodesChange: (changes: NodeChange<AppNode>[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes) as AppNode[],
    });
  },
  onEdgesChange: (changes: EdgeChange<AppEdge>[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges) as AppEdge[],
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges) as AppEdge[],
    });
  },
  setNodes: (nodes: AppNode[]) => set({ nodes }),
  setEdges: (edges: AppEdge[]) => set({ edges }),
  addNode: (node: AppNode) => set({ nodes: [...get().nodes, node] }),
  updateNodeData: (id: string, data: any) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === id) {
          return { ...node, data: { ...node.data, ...data } };
        }
        return node;
      }),
    });
  },
  setSelectedNodeId: (id: string | null) => set({ selectedNodeId: id }),
  setSimulationState: (isSimulating: boolean, logs: string[] = []) => set({ isSimulating, simulationLogs: logs }),
  addSimulationLog: (log: string) => set({ simulationLogs: [...get().simulationLogs, log] }),
}));
