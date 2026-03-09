import React from 'react';

const ResultTable = ({ students }) => {
  return (
    <table border="1" style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          <th>Roll No</th>
          <th>Name</th>
          <th>Maths</th>
          <th>Science</th>
          <th>English</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => {
          const total = s.maths + s.science + s.english;
          const status = total > 120 ? "Pass" : "Fail";
          return (
            <tr key={s.id} style={{ textAlign: "center" }}>
              <td>{s.rollNo}</td>
              <td>{s.name}</td>
              <td>{s.maths}</td>
              <td>{s.science}</td>
              <td>{s.english}</td>
              <td>{total}</td>
              <td style={{ color: status === "Pass" ? "green" : "red", fontWeight: "bold" }}>
                {status}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultTable;