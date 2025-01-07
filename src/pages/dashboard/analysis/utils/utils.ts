// 从 antd/es/date-picker/generatePicker 模块中导入 RangePickerProps 类型
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
// 从 dayjs 库中导入 dayjs 对象
import dayjs from 'dayjs';

/**
 * 定义一个类型别名，用于表示 RangePickerProps 组件的 value 属性的类型
 */
type RangePickerValue = RangePickerProps<dayjs.Dayjs>['value'];

/**
 * 将数值转换为两位数字，如果小于10则在前面补0
 * @param {number} val - 要格式化的数字
 * @returns {string} - 格式化后的字符串
 */
export function fixedZero(val: number) {
  // 如果 val 乘以 1 后小于 10，则在前面补0
  return val * 1 < 10 ? `0${val}` : val;
}

/**
 * 根据指定的时间类型获取对应的时间范围
 * @param {string} type - 时间类型，可选值为 'today'、'week'、'month'、'year'
 * @returns {RangePickerValue} - 返回一个包含开始时间和结束时间的数组
 */
export function getTimeDistance(type: 'today' | 'week' | 'month' | 'year'): RangePickerValue {
  // 获取当前时间
  const now = new Date();
  // 计算一天的毫秒数
  const oneDay = 1000 * 60 * 60 * 24;

  // 如果时间类型为 'today'
  if (type === 'today') {
    // 设置小时、分钟、秒为0
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    // 返回当前时间和当前时间加上一天减去1000毫秒的时间
    return [dayjs(now), dayjs(now.getTime() + (oneDay - 1000))];
  }

  // 如果时间类型为 'week'
  if (type === 'week') {
    // 获取当前是星期几
    let day = now.getDay();
    // 设置小时、分钟、秒为0
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    // 如果是星期天，则设置为星期六
    if (day === 0) {
      day = 6;
    } else {
      // 否则减去1
      day -= 1;
    }

    // 计算本周的开始时间
    const beginTime = now.getTime() - day * oneDay;
    // 返回本周的开始时间和开始时间加上7天减去1000毫秒的时间
    return [dayjs(beginTime), dayjs(beginTime + (7 * oneDay - 1000))];
  }

  // 获取当前年份
  const year = now.getFullYear();

  // 如果时间类型为 'month'
  if (type === 'month') {
    // 获取当前月份
    const month = now.getMonth();
    // 使用 dayjs 获取下个月的日期
    const nextDate = dayjs(now).add(1, 'months');
    // 获取下个月的年份
    const nextYear = nextDate.year();
    // 获取下个月的月份
    const nextMonth = nextDate.month();

    // 返回本月的开始时间和下个月的开始时间减去1000毫秒的时间
    return [
      dayjs(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      dayjs(dayjs(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  // 如果时间类型为 'year'
  // 返回本年的开始时间和本年的结束时间
  return [dayjs(`${year}-01-01 00:00:00`), dayjs(`${year}-12-31 23:59:59`)];
}
