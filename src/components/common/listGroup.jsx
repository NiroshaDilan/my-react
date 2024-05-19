import PropTypes from "prop-types";

const ListGroup = ({items, textProperty, valueProperty, onItemSelect}) =>  {
        return (
            <ul className="list-group">
                {items.map(item => (
                    <li
                        key={item[valueProperty]}
                        className="list-group-item">
                        {item[textProperty]}
                    </li>
                ))}
            </ul>
        );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id",
};

export default ListGroup;