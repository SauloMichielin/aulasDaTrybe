import React, { Component } from 'react';
import { fakeFetchSolutionsId } from '../fake-fetch';

class SolutionItem extends Component {
  constructor() {
    super();

    this.state = {
      exercises: []
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await fakeFetchSolutionsId(id);
    const object = await response.json();

    this.setState({
      exercises: object.exercises
    })
  }

  handleBackButton = () => {
    const { history } = this.props;
    console.log(history);
    history.push('/');
  }

  render() {
    const { id } = this.props.match.params;
    const { exercises } = this.state;
    return (
      <div>
        <button onClick={this.handleBackButton}>Voltar</button>
        <h1>Dia: { id }</h1>

        <ul>
          {
            exercises.map((exercise) => <li key={exercise}>{exercise}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default SolutionItem;