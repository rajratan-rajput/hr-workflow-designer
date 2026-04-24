export const mockApi = {
  getAutomations: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 'send_email', label: 'Send Email', params: ['to', 'subject'] },
          { id: 'generate_doc', label: 'Generate Document', params: ['template', 'recipient'] },
          { id: 'update_record', label: 'Update Record', params: ['recordId', 'status'] },
        ]);
      }, 500);
    });
  },
  simulate: async (_workflowJson: any) => {
    // This is just a mock endpoint, the actual step-by-step simulation is handled by the simulator utility
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
};
