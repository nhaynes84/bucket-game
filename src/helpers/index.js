import React from 'react';
import { notification, Icon } from 'antd';

export const notifyBucketFull = bucket => notification.warning({ 
    message: `Bucket ${bucket.toUpperCase()} is already full.` 
});
  
export const notifyBucketEmpty = bucket => notification.warning({ 
    message: `Bucket ${bucket.toUpperCase()} is already empty.` 
});
  
export const notifySuccess = (totalSteps, onClose) => {
    notification.open({
      onClose,
      duration: 0,
      message: 'VICTORY!',
      description: `You made 4 gallons in only ${totalSteps} steps!`,
      icon: <Icon type="rocket" style={{ color: '#52c41a' }} />
    });
  };

export const buildNewBuckets = (buckets, from, to) => {
    const availableSpace = buckets[to].capacity - buckets[to].level;
    const remainingAmount = buckets[from].level - availableSpace;
    const bucketTotal = buckets[from].level + buckets[to].level;

    return {
      [from]: {
        capacity: buckets[from].capacity,
        level: remainingAmount > 0 ? remainingAmount : 0
      },
      [to]: {
        capacity: buckets[to].capacity,
        level: remainingAmount > 0
          ? bucketTotal - remainingAmount
          : bucketTotal
      }
    };
}