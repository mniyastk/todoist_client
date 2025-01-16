import React from 'react';
import { ChevronDown, Calendar, Bell, Layout, Hash, Plus, Search, Home } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  dueDate: string;
  project?: string;
  tags?: string[];
  isOverdue?: boolean;
}

interface Project {
  id: string;
  name: string;
  icon: string;
  count?: number;
}

const TodoistInterface = () => {
  const overdueTasks: Task[] = [
    {
      id: '1',
      title: 'Download Todoist on all your devices and email for 💻, 📱, 📱 and ✉️',
      dueDate: '26 Oct 2024',
      project: 'Inbox',
      isOverdue: true
    },
    {
      id: '2',
      title: 'Do a weekly review of my tasks and goals',
      dueDate: '27 Oct 2024',
      project: 'Home/Routines',
      isOverdue: true
    },
    {
      id: '3',
      title: 'Take the productivity method quiz',
      dueDate: '27 Oct 2024',
      project: 'Inbox',
      isOverdue: true
    },
    {
      id: '4',
      title: 'Browse the Todoist Inspiration Hub',
      dueDate: '28 Oct 2024',
      project: 'Inbox',
      isOverdue: true
    }
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r p-4 flex flex-col">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="text-sm font-medium">niyas75tk</span>
          <Bell className="w-4 h-4 ml-auto text-gray-500" />
          <Layout className="w-4 h-4 text-gray-500" />
        </div>

        <button className="flex items-center space-x-2 text-red-600 mb-4">
          <Plus className="w-4 h-4" />
          <span>Add task</span>
        </button>

        <div className="flex items-center space-x-2 bg-gray-100 rounded p-2 mb-4">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>

        <div className="space-y-1">
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
            <Layout className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Inbox</span>
          </div>
          <div className="flex items-center space-x-2 p-2 bg-red-50 text-red-600 rounded">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Today</span>
            <span className="ml-auto text-sm">4</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Upcoming</span>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
            <Hash className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Filters & Labels</span>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-sm font-medium mb-2">My Projects</div>
          <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
            <Home className="w-4 h-4 text-gray-500" />
            <span className="text-sm">Home</span>
            <span className="ml-auto text-sm text-gray-500">5</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Today</h1>
          <div className="text-sm text-gray-500">4 tasks</div>
        </div>

        <div className="space-y-4">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-red-600">Overdue</span>
              <button className="text-sm text-red-600">Reschedule</button>
            </div>
            
            {overdueTasks.map((task) => (
              <div key={task.id} className="flex items-start space-x-3 py-2">
                <input type="radio" className="mt-1" />
                <div className="flex-1">
                  <div className="text-sm">{task.title}</div>
                  {task.dueDate && (
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-red-600">📅 {task.dueDate}</span>
                      <span className="text-xs text-gray-500">{task.project}</span>
                    </div>
                  )}
                </div>
                <Hash className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <div className="text-sm text-gray-500">8 Jan · Today · Wednesday</div>
          <button className="flex items-center space-x-2 text-gray-500 mt-2">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add task</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoistInterface;