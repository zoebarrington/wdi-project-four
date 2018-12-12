import React from 'react';

import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormButton from './FormButton';

function ArtworkForm({ handleChange, handleSubmit }) {
  return(
    <section className="hero is-light-title is-fullheight">
    <div className="hero-body">
    <div className="card is-shady container has-text-centered">
    <div className="column is-4 is-offset-4">
      <h3 className="title has-text-black">Add some artwork</h3>
      <img src="../../assets/logo.png"/>
    <form onSubmit={handleSubmit}>
      <FormInput name="name" type="text" handleChange={handleChange} />
      <FormInput name="price" type="number" handleChange={handleChange}/>
      <FormTextarea name="description" handleChange={handleChange}/>
      <FormInput name="image" type="text" handleChange={handleChange}/>
      <FormButton text="Create"/>
    </form>
    </div>
    </div>
    </div>
    </section>
  );
}







export default ArtworkForm;
