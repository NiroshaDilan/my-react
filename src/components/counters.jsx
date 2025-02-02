import {Component} from "react";
import Counter from "./counter";


class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;

        return (
            <>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2">
                    Reset
                </button>
                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                )
                }
            </>

        )
    }
}

export default Counters;