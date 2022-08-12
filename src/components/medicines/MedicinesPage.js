import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import MedicineList from "./MedicineList";
import * as categoryAction from "../../redux/actions/categoryActions"
import * as medicineAction from "../../redux/actions/medicineActions"

class MedicinesPage extends React.Component {
  componentDidMount() {
     const { medicines, categories, actions } = this.props;

    if (medicines.length === 0) {
      actions.loadMedicines().catch(error => {
        alert("Loading medicines failed" + error);
      });
    }

    if (categories.length === 0) {
      actions.loadCategories().catch(error => {
        alert("Loading categories failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Medicines</h2>
        <MedicineList medicines={this.props.medicines} />
      </>
    );
  }
}

MedicinesPage.propTypes = {
  medicines: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    medicines:
      state.categories.length === 0
        ? []
        : state.medicines.map(medicine => {
            return {
              ...medicine,
              categoryName: state.categories.find(a => a.id === medicine.categoryId).name
            };
          }),
          categories: state.categories
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMedicines: bindActionCreators(medicineAction.loadMedicines, dispatch),
      loadCategories: bindActionCreators(categoryAction.loadCategories, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedicinesPage);
