import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const AdminMaidTable = () => {
  const [maids, setMaids] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    fetchMaids();
  }, []);

  const fetchMaids = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/maids");
      const data = await res.json();
      setMaids(data);
    } catch (err) {
      console.error("Error fetching maids:", err);
    }
  };

  const handleStatusChange = async (maidId, newStatus) => {
    try {
      const res = await fetch(`http://localhost:5000/api/maids/${maidId}/status`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      await fetchMaids();
    } catch (err) {
      console.error("Status update failed:", err.message);
    }
  };

  const filteredMaids =
    filterStatus === "All"
      ? maids
      : maids.filter((maid) => maid.status === filterStatus);

  const exportToExcel = () => {
    const worksheetData = filteredMaids.map((maid) => ({
      Name: maid.name,
      Age: maid.age,
      Experience: maid.experience,
      Religion: maid.religion,
      Language: maid.language,
      Speciality: maid.speciality,
      State: maid.state,
      MaritalStatus: maid.maritalStatus,
      AvailableHours: maid.availableHours?.join(", "),
      PricePerHour: maid.pricePerHour,
      Status: maid.status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Maids");
    const excelBuffer = XLSX.write(workbook, { type: "array", bookType: "xlsx" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, "maids_export.xlsx");
  };

  return (
    <div className="overflow-x-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">All Maids</h2>
        <div className="flex items-center gap-4">
          <select
            className="border rounded px-2 py-1"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Booked">Booked</option>
            <option value="Offline">Offline</option>
          </select>

          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
          >
            Export to Excel
          </button>
        </div>
      </div>

      <table className="min-w-full border border-gray-300 bg-white shadow">
        <thead className="bg-gray-100 text-sm font-medium">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Experience</th>
            <th className="p-2 border">Religion</th>
            <th className="p-2 border">Language</th>
            <th className="p-2 border">Speciality</th>
            <th className="p-2 border">State</th>
            <th className="p-2 border">Marital Status</th>
            <th className="p-2 border">Available Hours</th>
            <th className="p-2 border">Price/Hour</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Image</th>
            <th className="p-2 border">Video</th>
          </tr>
        </thead>
        <tbody>
          {filteredMaids.map((maid) => (
            <tr key={maid._id} className="text-sm text-center">
              <td className="p-2 border">{maid.name}</td>
              <td className="p-2 border">{maid.age}</td>
              <td className="p-2 border">{maid.experience}</td>
              <td className="p-2 border">{maid.religion}</td>
              <td className="p-2 border">{maid.language || "—"}</td>
              <td className="p-2 border">{maid.speciality || "—"}</td>
              <td className="p-2 border">{maid.state || "—"}</td>
              <td className="p-2 border">{maid.maritalStatus || "—"}</td>
              <td className="p-2 border">{maid.availableHours?.join(", ")}</td>
              <td className="p-2 border">{maid.pricePerHour}</td>
              <td className="p-2 border">
                <select
                  value={maid.status}
                  onChange={(e) => handleStatusChange(maid._id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                  <option value="Offline">Offline</option>
                </select>
              </td>
              <td className="p-2 border">
                {maid.image ? (
                  <img
                    src={`http://localhost:5000${maid.image}`}
                    alt="maid"
                    className="w-12 h-12 rounded object-cover"
                  />
                ) : (
                  "—"
                )}
              </td>
              <td className="p-2 border">
                {maid.video ? (
                  <video src={`http://localhost:5000/uploads/${maid.video}`} className="w-24 h-14" controls />
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMaidTable;
