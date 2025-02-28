import React from "react";
import "./ReportsLayout.css";

const ReportsLayout = () => {
  // Example data for reports
  const reports = [
    {
      serialNumber: 1,
      doctorName: "Dr. John Doe",
      doctorSpeciality: "Cardiology",
      reportUrl: "/patient_report.pdf", // Path to the PDF file in the public folder
    },
    {
      serialNumber: 2,
      doctorName: "Dr. Jane Smith",
      doctorSpeciality: "Dermatology",
      reportUrl: "/patient_report.pdf", // Path to the PDF file in the public folder
    },
  ];

  // Function to open the report in a new tab
  const handleViewReport = (reportUrl) => {
    window.open(reportUrl, "_blank");
  };

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
                <button
                  className="view-button"
                  onClick={() => handleViewReport(report.reportUrl)}
                >
                  View Report
                </button>
              </td>
              <td>
                <a
                  href={report.reportUrl}
                  download={`report_${report.serialNumber}.pdf`}
                  className="download-button"
                >
                  Download Report
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;