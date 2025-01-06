// 从 @ant-design/icons 中导入 UploadOutlined 图标组件
import { UploadOutlined } from '@ant-design/icons';
// 从 @ant-design/pro-components 中导入 BetaSchemaForm 组件
import {
  BetaSchemaForm,
} from '@ant-design/pro-components';
// 从 @umijs/max 中导入 useRequest 钩子函数，用于请求数据
import { useRequest } from '@umijs/max';
// 从 antd 中导入 Button 和 Upload 组件
import { Button, Upload } from 'antd';
// 从 '../service' 中导入 queryCurrent 函数，用于查询当前用户信息
import { queryCurrent, } from '../service';
// 从 './index.style' 中导入 useStyles 钩子函数，用于获取样式
import useStyles from './index.style';
// 从 '@/utils' 中导入 getColumns 函数，用于获取表格列配置
import { getColumns } from '@/utils';
// 从 './FormText' 中导入 formItems 常量，用于表单配置
import { formItems } from './FormText';

/**
 * 基础设置组件
 * 显示用户基本信息表单和头像
 * @returns {JSX.Element} 基础设置组件的 JSX 元素
 */
export default () => {
  // 使用 useStyles 钩子函数获取样式
  const { styles } = useStyles();

  /**
   * 头像组件
   * 显示用户头像，并提供更换头像的功能
   * @param {Object} props - 组件的属性
   * @param {string} props.avatar - 用户头像的 URL
   * @returns {JSX.Element} 头像组件的 JSX 元素
   */
  const AvatarView = ({ avatar }: { avatar: string }) => (
    <>
      <div className={styles.avatar_title}>头像</div>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <Upload showUploadList={false}>
        <div className={styles.button_view}>
          <Button>
            <UploadOutlined />
            更换头像
          </Button>
        </div>
      </Upload>
    </>
  );

  // 使用 useRequest 钩子函数获取当前用户信息
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });

  /**
   * 获取用户头像的 URL
   * @returns {string} 用户头像的 URL
   */
  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }
      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }
    return '';
  };

  return (
    <div className={styles.baseView}>
      {loading ? null : (
        <>
          <div className={styles.left}>
            <BetaSchemaForm
              layoutType="Form" columns={getColumns(formItems)} />
          </div>
          <div className={styles.right}>
            <AvatarView avatar={getAvatarURL()} />
          </div>
        </>
      )}
    </div>
  );
};
