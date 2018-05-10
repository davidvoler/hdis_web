import React from 'react';
import { connect } from 'react-redux';
import { createLesson } from '../../actions/editor';
import CreateLessonForm from './forms/create';
class CreateLesson extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
    this.props.createLesson(values);
  };
  
  render() {
		return (
      <div>
           <h2> CreateLesson </h2>
           <CreateLessonForm onSubmit={this.submit} />
      </div>
		);
	}
    componentWillMount() {
        console.log("componentDidMount")
    }
}

const mapStateToProps = (state) => ({
  lesson: state.editor.create,
});
const mapDispatchToProps = (dispatch) => {
    return {
      createLesson: (data) => dispatch(createLesson(data))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CreateLesson);
