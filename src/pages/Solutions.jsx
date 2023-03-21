import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fakeFetchSolutions } from '../fake-fetch';

class Solutions extends Component {

  state = {
    data: []
  };

  async componentDidMount() {
    const response = await fakeFetchSolutions();
    const object = await response.json();

    this.setState({
      data: object.results
    });
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>GABARITO</h1>
        <ul>
          {
            data.map((solution) => (
              <li key={ solution.name }>
                <Link to={`/solutions/${solution.lecture}`} >{ `${solution.lecture}: ${solution.name}` }</Link>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}

export default Solutions;
