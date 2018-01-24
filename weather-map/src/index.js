import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Components/search_bar';
import axios from 'axios';
import TableRows from './Components/table-rows';

class App extends Component {
    constructor(props) {
        super(props);
        this.data = null;
        this.state = {
            WhetherDetails: []
        }


        this.getWhether = this.getWhether.bind(this);
    }



    getWhether(event) {
        let city = event.target.parentNode.firstChild.value;
        var self = this;
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&mode=json&appid=69e3a8399c6e5c77c9bdfa77af977b61")
            .then(function (response) {
                console.log(response.data);
                let whetherReport = {
                    temp: response.data.main.temp,
                    humidity: response.data.main.humidity,
                    city: city,
                    country: response.data.sys.country
                }
                self.setState({
                    WhetherDetails: self.state.WhetherDetails.concat(whetherReport)
                })

            })
            .catch(function (error) {
                console.log(error);
            })


    }

    render() {
        return (
            <div>
                <div>
                    <input />
                    <button className="btn btn-primary" onClick={this.getWhether}>Get Whether</button>
                </div>
                <table className="table table-striped" id="table">
                    <thead className = "thead-light">
                        <tr>
                            <th>
                                #
                        </th>
                            <th>
                                City
                        </th>
                            <th>
                                Country
                        </th>
                            <th>
                                Temperature
                        </th>
                            <th>
                                Humidity
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows WhetherDetails={this.state.WhetherDetails} />
                    </tbody>
                </table>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
// document.qureySelector('#root');