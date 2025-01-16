import React, { useState } from 'react';
import { Calendar, AlertCircle, MoreHorizontal } from 'lucide-react';

interface AddTaskPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: { title: string; dueDate?: string }) => void;
}

const AddTaskPopup = ({ isOpen, onClose, onAddTask }: AddTaskPopupProps) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask({ title: taskTitle });
      setTaskTitle('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl">
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Task name"
              className="w-full text-base outline-none"
              autoFocus
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full text-sm text-gray-500 outline-none mt-2"
            />
          </div>
          
          <div className="border-t border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="flex items-center space-x-1 text-sm text-gray-600 hover:bg-gray-100 rounded px-2 py-1"
              >
                <Calendar className="w-4 h-4" />
                <span>Today</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 text-sm text-gray-600 hover:bg-gray-100 rounded px-2 py-1"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Priority</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 text-sm text-gray-600 hover:bg-gray-100 rounded px-2 py-1"
              >
                <Calendar className="w-4 h-4" />
                <span>Reminders</span>
              </button>
              <button
                type="button"
                className="flex items-center text-gray-600 hover:bg-gray-100 rounded px-2 py-1"
              >
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                disabled={!taskTitle.trim()}
              >
                Add task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Example usage in the TodoistInterface component
const TodoistInterfaceWithPopup = () => {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const handleAddTask = (task: { title: string; dueDate?: string }) => {
    // Handle adding the task to your tasks list
    console.log('Adding task:', task);
  };

  return (
    <div>
      <button onClick={() => setIsAddTaskOpen(true)} className="flex items-center space-x-2 text-red-600">
        <span>Add task</span>
      </button>
      
      <AddTaskPopup
        isOpen={isAddTaskOpen}
        onClose={() => setIsAddTaskOpen(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default AddTaskPopup;