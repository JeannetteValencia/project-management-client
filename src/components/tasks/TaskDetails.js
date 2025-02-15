import React, { Component } from 'react';
import axios from 'axios';


class TaskDetails extends Component {
  state = {}

  componentDidMount(){
    this.getTheTask();
  }

  getTheTask = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/tasks/${params.taskId}`, {withCredentials: true})
    .then( responseFromApi =>{
      const theTask = responseFromApi.data;
      this.setState(theTask);
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default TaskDetails;
