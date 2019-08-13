import React from 'react';
import PropTypes from 'prop-types';

const Buckets = ({ buckets: { a, b } }) => (
    <div className="bucketWrap">
        <div className="bucket" style={{
            height: `${a.capacity * 50}px`,
        }}>
            <div className={`bucketA bucketA-${a.capacity - a.level}`} style={{
                backgroundColor: 'white'
            }}></div>
            <div className={`bucketA bucketA-${a.level}`} style={{
                backgroundColor: '#B5CEDF'
            }}></div>
        </div>
        <div>
            <h6>Bucket A</h6>
            <p>{a.level} of {a.capacity}</p>
            <h6>Bucket B</h6>
            <p>{b.level} of {b.capacity}</p>
        </div>
        <div className="bucket" style={{
            height: `${b.capacity * 50}px`,
        }}
        >
            <div className={`bucketB bucketB-${b.capacity - b.level}`} style={{
                backgroundColor: 'white'
            }}></div>
            <div className={`bucketB bucketB-${b.level}`} style={{
                backgroundColor: '#50799E'
            }}></div>
        </div>
    </div>
);

Buckets.propTypes = {
    buckets: PropTypes.shape({
        a: PropTypes.shape({
            level: PropTypes.number,
            capacity: PropTypes.number
        }),
        b: PropTypes.shape({
            level: PropTypes.number,
            capacity: PropTypes.number
        })
    })
};

export default Buckets;