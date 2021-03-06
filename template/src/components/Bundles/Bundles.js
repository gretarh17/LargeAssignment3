import React from 'react';
import PropTypes from 'prop-types';
import BubbleDetail from '../BubbleDetail/BubbleDetail';
import Bubbles from '../Bubbles/Bubbles';
import { BundleConsumer } from '../../context/BundleContext';
import { BubbleConsumer } from '../../context/BubbleContext';

const Bundles = props => {
    const {id, name, items} = props;
    return (
        <BundleConsumer>
            {
                BundleContext => {
                    var bundleBubbles = [];
                    for(var i = 0; i < items.length; i++){
                        bundleBubbles.push(<div key={i}>{<BubbleDetail bubbleId={items[i]}/>}</div>);
                    }
                    return (
                        <div className="card text-black bg-secondary mb-3">
                            <div className="card-header">{ name }</div>
                            {bundleBubbles}
                        </div>
                    );
                }
            }
        </BundleConsumer>
        
    );
};

Bundles.propTypes = {
    // id of bundle
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    // name of bundle
    name: PropTypes.string.isRequired,
    // id's of bubbles included in bundle
    items: PropTypes.array.isRequired
};

export default Bundles;