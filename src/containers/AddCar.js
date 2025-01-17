import { connect } from 'react-redux'
import { addCar } from '../redux/actions'
import AddCar from '../components/AddCar'

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
    // removeCar: (index) => dispatch(removeCar(index)),
  };
};


export default connect(null, mapDispatchToProps)(AddCar);