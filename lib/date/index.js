"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDateArray = getDateArray;
exports.getHours = getHours;

var _moment = _interopRequireDefault(require("moment"));

async function getDateArray({
  startDate,
  endDate,
  isDefault
}) {
  let periods = [];

  if (isDefault) {
    for (let index = 1; index < 8; index++) {
      const now = (0, _moment.default)().subtract(index, 'day');
      periods.push(now);
    }

    periods = periods.sort((a, b) => a - b).map(i => i.format('YYYY-MM-DD'));
  } else if (startDate === endDate) {
    periods.push((0, _moment.default)(startDate).format('YYYY-MM-DD'));
  } else {
    let point = startDate;
    const endPoint = (0, _moment.default)(endDate).format('YYYY-MM-DD');

    while (true) {
      if ((0, _moment.default)(point).format('YYYY-MM-DD') < endPoint) {
        periods.push((0, _moment.default)(point).format('YYYY-MM-DD'));
        point = (0, _moment.default)(point).add(1, 'days');
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


function getHours() {
  const hours = [];

  for (let index = 0; index < 24; index++) {
    hours.push((0, _moment.default)().startOf('day').add(index, 'hours').format('HH:00'));
  }

  return hours;
}