/*

Given a list of time intervals, find if any of them overlap.

For example:
Intervals -> ​[5,7], [1,3], [6,9]​ -> Intervals ​[5,7]​ and ​[6,9]​ overlap, so we return true.

Time Complexity:​ O(NlogN), where N is the number of intervals​.NlogN time is for sorting the Points.
Space Complexity:​ O(N)

*/

export class Point {
  time: number;
  isStart: boolean;

  constructor(time: number, isStart: boolean) {
    this.time = time;
    this.isStart = isStart;
  }
}

export class Interval {
  start: number;
  end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

export function hasOverlap(intervals: Interval[]) {
  let points: Point[] = [];

  for (let interval of intervals) {
    points.push(new Point(interval.start, true));
    points.push(new Point(interval.end, false));
  }

  points.sort((a, b) => a.time - b.time);

  let count = 0;

  for (let i = 0; i < points.length; i++) {
    count = points[i].isStart ? count + 1 : count - 1;

    if (count > 1) {
      return true;
    }
  }

  return false;
}