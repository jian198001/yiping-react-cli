import dayjs from "dayjs";
/**
 * 生成唯一ID
 * @returns {string} 唯一ID
 */
export function uuid(): string {
  // 使用dayjs生成当前时间的字符串格式，精确到毫秒
  const id = dayjs().format('YYYYMMDDHHmmssSSS').toString();
  // 返回生成的唯一ID
  return id;
}

/**
 * 从表单项中提取列配置
 * @param {any[]} formItems - 表单项数组
 * @returns {any[]} 列配置数组
 */
export function getColumns(formItems: any[] = []): any[] {
  // 复制表单项数组，避免修改原始数组
  const newItems = [...formItems];
  // 遍历表单项数组
  for (const item of newItems) {
    // 如果当前项不是分组类型，或者没有列配置，或者列配置为空数组，则跳过
    if (!item?.valueType || item?.valueType !== 'group' || !item?.columns || !item?.columns.length) {
      continue;
    }
    // 将当前项的列配置添加到新数组中
    newItems.push(...item?.columns);
  }
  // 返回过滤后的新数组，只保留非分组类型的项
  return newItems.filter(item => { return item.valueType !== 'group' });
}
