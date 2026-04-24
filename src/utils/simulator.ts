import type { AppNode, AppEdge } from '../types/workflow';

export const simulateWorkflow = async (
  nodes: AppNode[],
  edges: AppEdge[],
  logCallback: (msg: string) => void
) => {
  logCallback('Starting workflow simulation...');
  
  const startNode = nodes.find(n => n.type === 'start');
  if (!startNode) {
    logCallback('ERROR: Workflow must have a Start Node.');
    return;
  }

  const endNode = nodes.find(n => n.type === 'end');
  if (!endNode) {
    logCallback('ERROR: Workflow must have an End Node.');
    return;
  }

  const adjacencyList = new Map<string, string[]>();
  edges.forEach(edge => {
    if (!adjacencyList.has(edge.source)) adjacencyList.set(edge.source, []);
    adjacencyList.get(edge.source)!.push(edge.target);
  });

  const visited = new Set<string>();
  let currentId: string | undefined = startNode.id;

  while (currentId) {
    if (visited.has(currentId)) {
      logCallback(`ERROR: Cycle detected at node ${currentId}. Simulation aborted.`);
      return;
    }
    visited.add(currentId);

    const currentNode = nodes.find(n => n.id === currentId);
    if (!currentNode) break;

    logCallback(`Executing [${currentNode.type.toUpperCase()}]: ${currentNode.data.title}`);
    
    // Simulate API delay
    await new Promise(r => setTimeout(r, 800));

    if (currentNode.type === 'end') {
      logCallback('Workflow completed successfully.');
      return;
    }

    const nextNodes: string[] = adjacencyList.get(currentId) || [];
    if (nextNodes.length === 0) {
      logCallback(`ERROR: Node "${currentNode.data.title}" has no outbound connections, but is not an End Node.`);
      return;
    }

    currentId = nextNodes[0]; // Follow the first path
  }
};
