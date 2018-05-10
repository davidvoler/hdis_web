import React from 'react';
import { connect } from 'react-redux';
import { requestStudents, requestContents, requestPayments } from '../actions/dashboard';

class Dashboard extends React.Component {
	render() {
		return (
      <div>
          <h2> Home </h2>
      </div>
		);
	}
    componentWillMount() {
        console.log("componentDidMount")
    }
}

const mapStateToProps = (state) => ({
  students: state.students,
  contents: state.contents,
  payments: state.payments,

});
const mapDispatchToProps = (dispatch) => {
    return {
        fetchStudents: () => dispatch(requestStudents({})),
        fetchContents: () => dispatch(requestContents({})),
        fetchPayments: () => dispatch(requestPayments({})),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
