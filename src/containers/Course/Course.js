import React, { Component } from 'react';

class Course extends Component {
    state = {
        loadedCourse: null 
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id) {
            if(!this.state.loadedCourse || (this.state.loadedCourse && this.state.loadedCourse.id != this.props.match.params.id)) {
                
            }
        }
    }

    render () {
        let course = <p style={{textAlign: 'center'}}>Select a course.</p>;
        if (this.state.loadedCourse) {
            course = (
                <div>
                    <h1>{this.props.title}</h1>
                    <p>You selected the Course with ID: {this.props.id}</p>
                </div>
            );
        }
        return course;
    }
}

export default Course;