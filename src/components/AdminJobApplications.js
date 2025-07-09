import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const JobApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axiosInstance.get("/job-applications");
        setApplications(res.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Job Applications</h1>

      {loading ? (
        <p>Loading...</p>
      ) : applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="overflow-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg text-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">City</th>
                <th className="px-4 py-2 border">Files</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{app.name}</td>
                  <td className="px-4 py-2 border">{app.phone}</td>
                  <td className="px-4 py-2 border">{app.category}</td>
                  <td className="px-4 py-2 border">{app.nearbyCity}</td>
                  <td className="px-4 py-2 border space-y-1">
                    {app.photoFile && (
                      <a
                        href={`http://localhost:5000/uploads/${app.photoFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline block"
                      >
                        📷 Photo
                      </a>
                    )}
                    {app.aadharFile && (
                      <a
                        href={`http://localhost:5000/uploads/${app.aadharFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline block"
                      >
                        🆔 Aadhar
                      </a>
                    )}
                    {app.resumeFile && (
                      <a
                        href={`http://localhost:5000/uploads/${app.resumeFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline block"
                      >
                        📄 Resume
                      </a>
                    )}
                    {app.otherIdFile && (
                      <a
                        href={`http://localhost:5000/uploads/${app.otherIdFile}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline block"
                      >
                        🧾 Other ID
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default JobApplications;
