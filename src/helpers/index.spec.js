import { buildNewBuckets } from './';

it('buildNewBuckets returns a new bucket with b full', () => {
    // ARRANGE
    const buckets = { 
        a: {level: 3, capacity: 3 }, 
        b: { level: 0, capacity: 5 }
    };

    // ACT
    const newBuckets = buildNewBuckets(buckets, 'a', 'b');

    // ASSERT
    expect(Object.keys(newBuckets)).toEqual(['a', 'b']);
    expect(newBuckets.b.level).toEqual(3);
    expect(newBuckets.a.level).toEqual(0);
});

it('buildNewBuckets defaults to: from = a, to = b if not provided', () => {
    // ARRANGE
    const buckets = { 
        a: {level: 3, capacity: 3 }, 
        b: { level: 5, capacity: 5 }
    };

    // ACT
    const newBuckets = buildNewBuckets(buckets);

    // ASSERT
    expect(Object.keys(newBuckets)).toEqual(['a', 'b']);
    expect(newBuckets.b.level).toEqual(5);
});