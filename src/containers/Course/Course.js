import React, { Component } from 'react';

class Course extends Component {

    render () {
        let course = <p style={{textAlign: 'center'}}>Select a course.</p>;
        if (this.state.loadedCourse) {
            course = (
                <div>
                    <h1>{this.props.match.params.courseTitle}</h1>
                    <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
                </div>
            );
        }
        return course;
    }
}

export default Course;