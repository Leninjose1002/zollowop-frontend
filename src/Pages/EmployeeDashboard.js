import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../api/axiosInstance";

const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("employee");
    localStorage.removeItem("employeeToken");
    navigate("/employee-login");
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const empData = JSON.parse(localStorage.getItem("employee"));
        if (!empData) {
          navigate("/employee-login");
          return;
        }

        setEmployee(empData);

        // Replace with real task API if available
        setTasks([
          { title: "Clean kitchen", status: "Completed" },
          { title: "Assist elderly care", status: "In Progress" },
          { title: "Inventory Check", status: "Pending" }
        ]);
      } catch (err) {
        console.error("Failed to load employee", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [navigate]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <img
            src={employee.photo || "https://via.placeholder.com/60"}
            alt="Profile"
            className="w-14 h-14 rounded-full border"
          />
          <div>
            <h2 className="text-2xl font-bold">Welcome, {employee.name}</h2>
            <p className="text-sm text-gray-500">{employee.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-4">Your Tasks</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">Task</th>
              <th className="p-3 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="p-3 border-b">{task.title}</td>
                <td className="p-3 border-b">
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${
                      task.status === "Completed"
                        ? "bg-green-200 text-green-800"
                        : task.status === "In Progress"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
            {tasks.length === 0 && (
              <tr>
                <td className="p-3 text-center" colSpan={2}>
                  No tasks assigned yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
