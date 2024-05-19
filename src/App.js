import React, {Component} from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import Movies from "./components/movies";
import LoginForm from "./components/forms/loginForm";


class App extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 1},
            {id: 3, value: 3},
            {id: 4, value: 10}
        ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters
            .filter(counter => counter.id !== counterId);
        this.setState({counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters})
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }
    render() {
        return (
            <>
                <div className="container">
                    {/*<Movies />*/}
                    <LoginForm/>
                </div>
                {/*<Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>*/}
                {/*<main className="container">*/}
                {/*    <Counters*/}
                {/*        counters={this.state.counters}*/}
                {/*        onReset={this.handleReset}*/}
                {/*        onIncrement={this.handleIncrement}*/}
                {/*        onDecrement={this.handleDecrement}*/}
                {/*        onDelete={this.handleDelete}*/}
                {/*    />*/}
                {/*</main>*/}

            </>

        )
    }
}

export default App;
