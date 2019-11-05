
import moment from 'moment';

export async function getDateArray({ startDate, endDate, isDefault }) {
  let periods = [];
  if (isDefault) {
    for (let index = 1; index < 8; index++) {
      const now = moment().subtract(index, 'day');
      periods.push(now);
    }
    periods = periods.sort((a, b) => a - b).map((i) => i.format('YYYY-MM-DD'));
  } else if (startDate === endDate) {
    periods.push(moment(startDate).format('YYYY-MM-DD'));
  } else {
    let point = startDate;
    const endPoint = moment(endDate).format('YYYY-MM-DD');
    while (true) {
      if (moment(point).format('YYYY-MM-DD') < endPoint) {
        periods.push(moment(point).format('YYYY-MM-DD'));
        point = moment(point).add(1, 'days');
      } else {
        return periods;
      }
    }
  }
  return periods;
}

/**
 * @description 获取一天内的正点时间数组
 */
export function getHours() {
  const hours = [];
  for (let index = 0; index < 24; index++) {
    hours.push(moment().startOf('day').add(index, 'hours').format('HH:00'));
  }
  return hours;
}

