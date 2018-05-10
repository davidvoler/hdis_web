
import React from 'react';
import { reduxForm, Field } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from 'redux-form-material-ui'


let CreateLessonForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} >
      <Field placeholder="Title" name="Title" component={TextField} label="Title" />
      <br />
      <Field placeholder="videoURL" name="videoURL" component={TextField} label="Video URL" />
      <br />
      <RaisedButton type="submit">Save</RaisedButton>
    </form>
  )
}

// Decorate with redux-form
CreateLessonForm = reduxForm({
  form: 'createLessonForm'
})(CreateLessonForm)

export default CreateLessonForm