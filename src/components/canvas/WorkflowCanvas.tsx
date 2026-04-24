import React, { useCallback, useRef } from 'react';
import { ReactFlow, Background, Controls, MiniMap, ReactFlowProvider, type NodeTypes } from '@xyflow/react';
import { v4 as uuidv4 } from 'uuid';
import { useWorkflowStore } from '../../store/workflowStore';
import { nodeTypes } from '../nodes';
import type { AppNode, NodeType } from '../../types/workflow';

import '@xyflow/react/dist/style.css';

const CanvasContent = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode, setSelectedNodeId } = useWorkflowStore();

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow') as NodeType;

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowWrapper.current?.getBoundingClientRect();
      if (!position) return;

      const newNode: AppNode = {
        id: uuidv4(),
        type,
        position: {
          x: event.clientX - position.left - 75,
          y: event.clientY - position.top - 20,
        },
        data: { title: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
      };

      addNode(newNode);
    },
    [addNode]
  );

  return (
    <div className="flex-1 h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes as unknown as NodeTypes}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onNodeClick={(_, node) => setSelectedNodeId(node.id)}
        onPaneClick={() => setSelectedNodeId(null)}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap zoomable pannable />
      </ReactFlow>
    </div>
  );
};

export const WorkflowCanvas: React.FC = () => {
  return (
    <ReactFlowProvider>
      <CanvasContent />
    </ReactFlowProvider>
  );
};
