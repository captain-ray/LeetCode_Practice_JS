/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {

    //sort intervals by the start value of each interval
    intervals.sort((a, b) => { return a[0] - b[0] });

    let outputIntervals = [];

    let i, j, intervalStart, intervalEnd;
    const length = intervals.length;

    for (i = 0; i < length; i++) {

        if (i === length - 1) {
            outputIntervals.push(intervals[i]);
            continue;
        }

        if (intervals[i][1] < intervals[i + 1][0]) {
            outputIntervals.push(intervals[i]);
            continue;
        }

        intervalStart = intervals[i][0];
        intervalEnd = intervals[i][1];
        j = i + 1;

        while (j < length && intervalEnd >= intervals[j][0]) {
            intervalEnd = Math.max(intervalEnd, intervals[j][1]);
            j = j + 1;
        }

        outputIntervals.push([intervalStart, intervalEnd]);

        i = j - 1;
    }

    return outputIntervals;


};


// test
// let input = [[2, 6], [1, 3], [8, 10], [15, 18]];
// let input = [[4, 5], [1, 4]];
let input = [[2, 5], [1, 4], [3, 4], [1, 100]];
console.log(merge(input));
