import React, { useState } from 'react';
import { Button } from 'antd';

import "antd/dist/antd.css";
import './App.css';

import Header from './components/Header';
import Buckets from './components/Buckets';
import Logs from './components/Logs';
import Actions from './components/BucketActions';

import { notifyBucketEmpty, notifyBucketFull, notifySuccess,
  buildNewBuckets } from './helpers';

const App = () => {
  const initialBuckets = { a: { capacity: 3, level: 0 }, b: { capacity: 5, level: 0 } };
  const [buckets, setBuckets] = useState({ ...initialBuckets });
  const [logs, setLogs] = useState([]);
  
  const writeBucketLog = (action, bucket) => setLogs([...logs, `${action} Bucket ${bucket}.`]);
  const clearGame = () => {
    setLogs([]);
    setBuckets({ ...initialBuckets });
  };

  // IF bucket B has 4 gallons of water in it... You win, yay!
  if (buckets['b'].level === 4) notifySuccess(logs.length, clearGame);

  const fillBucket = targetBucket => {
    const { level, capacity } = buckets[targetBucket];
    if (level === capacity) return notifyBucketFull(targetBucket);

    writeBucketLog('Fill', targetBucket.toUpperCase());
    setBuckets({ ...buckets, ...{ [targetBucket]: { level: capacity, capacity } } });
  };

  const emptyBucket = targetBucket => {
    const { level, capacity } = buckets[targetBucket];
    if (!level) return notifyBucketEmpty(targetBucket);

    writeBucketLog('Empty', targetBucket.toUpperCase());
    setBuckets({ ...buckets, ...{ [targetBucket]: { level: 0, capacity } } });
  };

  const transferBuckets = (from, to) => {
    // IF bucket to is full (no capacity for transfer)
    if (buckets[to].capacity === buckets[to].level) return notifyBucketFull(to);

    // IF bucket from is empty (nothing to transfer)
    if (!buckets[from].level) return notifyBucketEmpty(from);

    writeBucketLog('Transfer', `${from.toUpperCase()} to Bucket ${to.toUpperCase()}`)
    return setBuckets(buildNewBuckets(buckets, from, to));
  }

  return (
    <div className="App">
      <Header />
      <section className="game">
        <Buckets buckets={buckets} />
        <Actions
          fillBucket={fillBucket}
          emptyBucket={emptyBucket}
          transferBuckets={transferBuckets}
        />
        <Button onClick={clearGame}>
          Restart
        </Button>
      </section>
      <Logs logs={logs} />
    </div>
  );
}

export default App;
