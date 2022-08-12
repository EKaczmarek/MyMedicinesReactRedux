import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as medicineActions from "../../redux/actions/medicineActions";
import * as categoryActions from "../../redux/actions/categoryActions"
import PropTypes from "prop-types";

function ManageMedicinePage({ medicines, categories, loadMedcines, loadCategories }) {
  useEffect(() => {
    if (medicines.length === 0) {
      loadMedcines().catch((error) => {
        alert("Loading medicines failed" + error);
      });
    }

    if (categories.length === 0) {
      loadCategories().catch((error) => {
        alert("Loading categories failed" + error);
      });
    }
  }, []);

  return (
    <>
      <h2>Manage medicines</h2>
    </>
  );
}

ManageMedicinePage.propTypes = {
  medicines: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  loadMedcines: PropTypes.func.isRequired,
  loadCategories: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    medicines: state.medicines,
    categories: state.categories,
  };
}

const mapDispatchToProps = {
  loadMedcines: medicineActions.loadMedicines,
  loadCategories: categoryActions.loadCategories,
};

//connect component do Redux
export default connect(mapStateToProps, mapDispatchToProps)(ManageMedicinePage);
