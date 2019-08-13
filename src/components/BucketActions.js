import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const BucketActions = ({ fillBucket, emptyBucket, transferBuckets }) => (
    <div className="actions">
        <div className="actionSet">
            <Button onClick={() => fillBucket('a')}>Fill Bucket A</Button>
            <Button onClick={() => transferBuckets('a', 'b')}>Transfer to Bucket B</Button>
            <Button onClick={() => emptyBucket('a')}>Empty Bucket A</Button>

        </div>
        <div className="actionSet">
            <Button onClick={() => fillBucket('b')}>Fill Bucket B</Button>
            <Button onClick={() => transferBuckets('b', 'a')}>Transfer to Bucket A</Button>
            <Button onClick={() => emptyBucket('b')}>Empty Bucket B</Button>
        </div>
    </div>
);

BucketActions.propTypes = {
    fillBucket: PropTypes.func,
    emptyBucket: PropTypes.func,
    transferBuckets: PropTypes.func,
};

export default BucketActions;