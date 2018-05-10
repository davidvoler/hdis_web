import React from 'react';
import { connect } from 'react-redux';
import { requestLessonList } from '../../actions/editor';

class Editor extends React.Component {
	render() {
		return (
      <div>
           <h2> Editor </h2>
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
        fetchLessons: () => dispatch(requestLessonList({}))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Editor);
