import React from 'react';
import PropTypes from 'prop-types';
import { CardObj } from './CardStyles';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="flexy">
                <CardObj>
                    hello
                </CardObj>
                <CardObj>
                    Sup
                </CardObj>
            </div>
        );
    }
}

Card.propTypes = {};

export default Card;
