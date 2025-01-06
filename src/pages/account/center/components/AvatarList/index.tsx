// 引入 Ant Design 库中的 Avatar 和 Tooltip 组件
import { Avatar, Tooltip } from 'antd';
// 引入 classnames 库，用于合并类名
import classNames from 'classnames';
// 引入 React 库
import React from 'react';
// 引入样式文件
import useStyles from './index.style';

/**
 * 头像项组件的大小类型
 * @typedef {number | 'small' | 'default' | 'large'} SizeType
 */
export declare type SizeType = number | 'small' | 'default' | 'large';

/**
 * 头像项组件的属性类型
 * @typedef {Object} AvatarItemProps
 * @property {React.ReactNode} tips - 提示信息
 * @property {string} src - 头像图片的 URL
 * @property {SizeType} [size] - 头像的大小
 * @property {React.CSSProperties} [style] - 自定义样式
 * @property {() => void} [onClick] - 点击事件处理函数
 */
export type AvatarItemProps = {
  tips: React.ReactNode;
  src: string;
  size?: SizeType;
  style?: React.CSSProperties;
  onClick?: () => void;
};

/**
 * 头像列表组件的属性类型
 * @typedef {Object} AvatarListProps
 * @property {React.ReactElement<AvatarItemProps>} [Item] - 自定义的头像项组件
 * @property {SizeType} [size] - 头像的大小
 * @property {number} [maxLength] - 显示的最大头像数量
 * @property {React.CSSProperties} [excessItemsStyle] - 超出最大数量的头像的样式
 * @property {React.CSSProperties} [style] - 自定义样式
 * @property {React.ReactElement<AvatarItemProps> | React.ReactElement<AvatarItemProps>[]} children - 头像项组件或组件数组
 */
export type AvatarListProps = {
  Item?: React.ReactElement<AvatarItemProps>;
  size?: SizeType;
  maxLength?: number;
  excessItemsStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  children: React.ReactElement<AvatarItemProps> | React.ReactElement<AvatarItemProps>[];
};

/**
 * 头像项组件
 * 显示单个头像，并在鼠标悬停时显示提示信息
 * @param {AvatarItemProps} props - 组件的属性
 * @returns {JSX.Element} 头像项组件的 JSX 元素
 */
const Item: React.FC<AvatarItemProps> = ({ src, size, tips, onClick = () => {} }) => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();

  /**
   * 根据头像大小返回对应的样式类名
   * @param {SizeType | 'mini'} [size] - 头像的大小
   * @returns {string} 样式类名
   */
  const avatarSizeToClassName = (size?: SizeType | 'mini') =>
    classNames(styles.avatarItem, {
      [styles.avatarItemLarge]: size === 'large',
      [styles.avatarItemSmall]: size === 'small',
      [styles.avatarItemMini]: size === 'mini',
    });

  // 获取样式类名
  const cls = avatarSizeToClassName(size);

  return (
    <li className={cls} onClick={onClick}>
      {tips ? (
        // 如果有提示信息，则使用 Tooltip 组件显示提示信息
        <Tooltip title={tips}>
          <Avatar
            src={src}
            size={size}
            style={{
              cursor: 'pointer',
            }}
          />
        </Tooltip>
      ) : (
        // 如果没有提示信息，则直接显示头像
        <Avatar src={src} size={size} />
      )}
    </li>
  );
};

/**
 * 头像列表组件
 * 显示一组头像，并根据设置显示指定数量的头像，超出部分显示为一个带有剩余数量的头像
 * @param {AvatarListProps} props - 组件的属性
 * @returns {JSX.Element} 头像列表组件的 JSX 元素
 */
const AvatarList: React.FC<AvatarListProps> & {
  Item: typeof Item;
} = ({ children, size, maxLength = 5, excessItemsStyle, ...other }) => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();

  // 获取子元素的数量
  const numOfChildren = React.Children.count(children);

  // 计算需要显示的头像数量
  const numToShow = maxLength >= numOfChildren ? numOfChildren : maxLength;

  // 将子元素转换为数组
  const childrenArray = React.Children.toArray(children) as React.ReactElement<AvatarItemProps>[];

  // 克隆子元素并设置头像大小
  const childrenWithProps = childrenArray.slice(0, numToShow).map((child) =>
    React.cloneElement(child, {
      size,
    }),
  );

  // 如果需要显示的头像数量小于子元素的数量，则添加一个带有剩余数量的头像
  if (numToShow < numOfChildren) {
    const cls = avatarSizeToClassName(size);
    childrenWithProps.push(
      <li key="exceed" className={cls}>
        <Avatar size={size} style={excessItemsStyle}>{`+${numOfChildren - maxLength}`}</Avatar>
      </li>,
    );
  }

  return (
    <div {...other} className={styles.avatarList}>
      <ul> {childrenWithProps} </ul>
    </div>
  );
};

// 将 Item 组件添加到 AvatarList 组件的属性中
AvatarList.Item = Item;

// 导出 AvatarList 组件作为默认导出
export default AvatarList;
