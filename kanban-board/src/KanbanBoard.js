import React, { useState } from "react";

const KanbanBoard = () => {
  const [columns, setColumns] = useState({
    todo: ["Task 1", "Task 2"],
    inProgress: ["Task 3"],
    done: [],
  });

  const handleDragStart = (e, task, column) => {
    e.dataTransfer.setData("task", task);
    e.dataTransfer.setData("sourceColumn", column);
  };

  const handleDrop = (e, targetColumn) => {
    const task = e.dataTransfer.getData("task");
    const sourceColumn = e.dataTransfer.getData("sourceColumn");

    if (sourceColumn !== targetColumn) {
      setColumns((prev) => {
        const newSource = prev[sourceColumn].filter((t) => t !== task);
        const newTarget = [...prev[targetColumn], task];

        return {
          ...prev,
          [sourceColumn]: newSource,
          [targetColumn]: newTarget,
        };
      });
    }
  };

  const allowDrop = (e) => e.preventDefault();

  const addTask = () => {
    const task = prompt("Enter a new task:");
    if (task) {
      setColumns((prev) => ({
        ...prev,
        todo: [...prev.todo, task],
      }));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <button
        onClick={addTask}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Task
      </button>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(columns).map(([column, tasks]) => (
          <div
            key={column}
            className="p-4 bg-gray-100 rounded shadow-md"
            onDragOver={allowDrop}
            onDrop={(e) => handleDrop(e, column)}
          >
            <h2 className="text-xl font-semibold capitalize mb-4">{column}</h2>
            <div>
              {tasks.map((task, index) => (
                <div
                  key={index}
                  draggable
                  onDragStart={(e) => handleDragStart(e, task, column)}
                  className="p-2 mb-2 bg-white rounded shadow cursor-pointer"
                >
                  {task}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
