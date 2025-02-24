import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  // Example data for reports
  const reports = [
    {
      serialNumber: 1,
      doctorName: "Dr. John Doe",
      doctorSpeciality: "Cardiology",
    },
    {
      serialNumber: 2,
      doctorName: "Dr. Jane Smith",
      doctorSpeciality: "Dermatology",
    },
  ];

  return (
    <div className="reports-layout">
      <h1>Reports</h1>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.serialNumber}>
              <td>{report.serialNumber}</td>
              <td>{report.doctorName}</td>
              <td>{report.doctorSpeciality}</td>
              <td>
                <button className="view-button">View Report</button>
              </td>
              <td>
                <button className="download-button">Download Report</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;