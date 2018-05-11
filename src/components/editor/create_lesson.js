import React from 'react';
import { connect } from 'react-redux';
import { createLesson } from '../../actions/editor';
import CreateLessonForm from './forms/create';
import { Redirect } from 'react-router';
class CreateLesson extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values)
    this.props.createLesson(values);
  };
  isSaving() {
    if (this.props.lesson.fetching) {
      return (<div >Saving</div>)
    }

  };
  getRedirect () {
    if(this.props.lesson.fetched){
      return (<Redirect to="/editor" />)
    }
  }    
  render() {
		return (
      
      <div className={"full-size"}>
           <h2> CreateLesson </h2>
           {this.getRedirect()}
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
