import React from 'react';
import { connect } from 'react-redux';
import { requestDashboard } from '../../actions/dashboard';

class Dashboard extends React.Component {
	render() {
    const students = () => {
      if(this.props.dashboard.fetched){
          return this.props.dashboard.dashboard.students.map(student=> <div key={student.id}>{student.name}</div>);
      }else{
        return "";
      }
    }
		return (
      <div>
           <h2> Dashbaord </h2>
           {students()}
      </div>
		);
	}
    componentWillMount() {
        console.log("componentDidMount");
        this.props.fetchDashboard();
    }
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard
});
const mapDispatchToProps = (dispatch) => {
    return {
      fetchDashboard: () => dispatch(requestDashboard({}))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
