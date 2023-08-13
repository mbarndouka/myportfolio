import React from 'react';
import Frontend from './Frontend';
import Backend from './Backend';

import "./skills.css";
import Datascience from './datascience';

const skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Frontend/>

            <Backend />
            <Datascience/>
        </div>
    </section>
  )
}

export default skills