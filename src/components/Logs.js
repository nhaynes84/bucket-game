import React from 'react';
import PropTypes from 'prop-types';
import { Steps } from 'antd';

const { Step } = Steps;

const Logs = ({ logs }) => (
    <section className="logs">
        <h3>Steps</h3>
        {logs.length ? <Steps
            className="steps"
            direction="vertical"
            current={logs.length - 1}
        >
            {logs.map((log, i) => (
                <Step title={log} key={i} />
            ))}
        </Steps> : 'Begin...'}
    </section>
);

Logs.propTypes = {
    logs: PropTypes.array,
}

export default Logs;