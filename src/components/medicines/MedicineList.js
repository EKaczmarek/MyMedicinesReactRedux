import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MedicineList = ({ medicines }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {medicines.map(medicine => {
        return (
          <tr key={medicine.id}>
            <td>              
            </td>
            <td>
              <Link to={"/medicine/" + medicine.slug}>{medicine.title}</Link>
            </td>
            <td>{medicine.categoryName}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

MedicineList.propTypes = {
  medicines: PropTypes.array.isRequired
};

export default MedicineList;
