# HR Workflow Designer

A modular, scalable prototype of an **HR Workflow Designer** that allows administrators to visually create, configure, and simulate internal workflows such as onboarding, approvals, and automated actions.

---

## 🚀 Features

### 1. Workflow Canvas (React Flow)

* Drag-and-drop nodes from sidebar onto canvas
* Connect nodes using edges
* Delete nodes and edges
* Interactive node selection

### 2. Custom Node Types

* Start Node – Workflow entry point
* Task Node – Human task with configurable fields
* Approval Node – Role-based approval step
* Automated Step Node – Mock API-triggered actions
* End Node – Workflow completion

---

### 3. Node Configuration Panel (Dynamic Forms)

* Context-aware form rendered based on selected node type
* Controlled components with real-time updates
* Supports:

  * Metadata fields (key-value)
  * Assignee and due date
  * Approval roles and thresholds
  * Dynamic API parameters

---

### 4. Mock API Integration

* `GET /automations` → fetch available automation actions
* `POST /simulate` → simulate workflow execution
* Simulated async behavior using delays

---

### 5. Workflow Simulation (Sandbox)

* Serializes workflow graph into JSON
* Validates structure:

  * Missing start/end nodes
  * Disconnected nodes
* Executes workflow step-by-step
* Displays execution logs in real-time

---

## 🧱 Tech Stack

* **Frontend:** React (Vite) + TypeScript
* **Canvas Engine:** @xyflow/react (React Flow)
* **State Management:** Zustand
* **Styling:** Tailwind CSS
* **API Layer:** Axios (mocked services)
* **Icons:** Lucide React

---

## 📁 Project Structure

```
src/
├── app/          # Application shell and layout
├── components/   # UI modules
│   ├── canvas/   # React Flow integration
│   ├── nodes/    # Custom node components
│   ├── forms/    # Node configuration forms
│   ├── sidebar/  # Drag-and-drop node palette
│   ├── panel/    # Config panel
│   └── sandbox/  # Simulation logs UI
├── hooks/        # Custom hooks
├── services/     # Mock API layer
├── store/        # Zustand store
├── types/        # TypeScript interfaces
├── utils/        # Graph logic & validation
└── styles/       # Global styles
```

---

## ⚙️ How to Run

```bash
npm install
npm run dev
```

Open: http://localhost:5173

---

## 🧠 Architecture & Design Decisions

### 1. Separation of Concerns

* Canvas logic, node rendering, forms, and API layer are decoupled
* Improves maintainability and scalability

### 2. Centralized State (Zustand)

* Stores nodes, edges, selected node, and simulation logs
* Enables reactive UI updates across components

### 3. Dynamic Form System

* Node forms are rendered based on node type
* Easily extendable for new node types

### 4. Workflow Simulation Engine

* Converts graph → adjacency structure
* Traverses workflow in execution order
* Simulates async operations



---

## ✅ What is Implemented vs Expected

| Requirement              | Status          |
| ------------------------ | --------------- |
| React Flow Canvas        | ✅ Implemented   |
| Custom Node Types        | ✅ Implemented   |
| Node Configuration Forms | ✅ Implemented   |
| Mock API Integration     | ✅ Implemented   |
| Workflow Simulation      | ✅ Implemented   |
| Clean Architecture       | ✅ Implemented   |
| Advanced Validation      | ✅   Implemented |
| Branching Logic          | ✅   Implemented |

---

## 🏁 Summary

This project demonstrates:

* Strong understanding of React Flow and graph-based UI systems
* Ability to design modular, scalable frontend architecture
* Effective state management using Zustand
* Clean abstraction of API and simulation logic

The implementation focuses on **functionality, extensibility, and architectural clarity**, as required for a production-grade workflow system prototype.
