import React from "react";

export default class EnterWeight extends React.Component {
    constructor (props) {
        super (props);

        this.OnChangeWeight = this.OnChangeWeight.bind(this);
        this.OnChangeDate = this.OnChangeDate.bind(this);
        this.OnSubmit = this.OnSubmit.bind(this);

        this.state = {
            weight: "",
            date: ""
        }
    }

    OnChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    OnChangeWeight(e) {
        this.setState({
            weight: e.target.value
        });
    }

    OnSubmit(e) {
        e.preventDefault();
        
        console.log("Weight submitted");
        console.log(this.state.weight);
        console.log(this.state.date);

        this.setState({
            weight: "",
            date: ""
        })
    }

    render() {
        return(
            <div className="weight-container">
                <h3>Enter weight</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Weight: </label>
                        <input 
                            type="number"
                            className="form-control"
                            value={this.state.weight}
                            onChange={this.OnChangeWeight}
                            />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input 
                            type="date"
                            className="form-control"
                            value={this.state.date}
                            onChange={this.OnChangeDate}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            value="Enter Weight"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}