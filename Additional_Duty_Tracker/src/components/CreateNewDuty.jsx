import React, { Component } from "react";

class CreateNewDuty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: ''
    }
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.saveOrUpdateDuty = this.saveOrUpdateDuty.bind(this);
}

// step 3
componentDidMount(){

    // step 4
    if(this.state.id === '_add'){
        return
    }      
}
saveOrUpdateDuty = (e) => {
    e.preventDefault();
    let name = {name: this.state.name};

    // step 5
    if(this.state.id === '_add'){
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employees');
        });
    }else{
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/additional-duties');
        });
    }
}

changeNameHandler= (event) => {
    this.setState({name: event.target.value});
}

cancel(){
    this.props.history.push('/additional-duties');
}

getTitle(){
    if(this.state.id === '_add'){
        return <h3 className="text-center">Add Employee</h3>
    }else{
        return <h3 className="text-center">Update Employee</h3>
    }
  }

  render() {
    return (
      <div>
      <br></br>
         <div className = "container">
              <div className = "row">
                  <div className = "card col-md-6 offset-md-3 offset-md-3">
                      {
                          this.getTitle()
                      }
                      <div className = "card-body">
                          <form>
                              <div className = "form-group">
                                  <label> Name: </label>
                                  <input placeholder="Name" name="name" className="form-control" 
                                      value={this.state.name} onChange={this.changeNameHandler}/>
                              </div>
                              <button className="btn btn-success" onClick={this.saveDuty}>Save</button>
                              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                          </form>
                      </div>
                  </div>
              </div>

          </div>
    </div>
    );
  }
}

export default CreateNewDuty;
