import { useIntl } from '@umijs/max';
import { Button, message, notification } from 'antd';
import defaultSettings from '../config/defaultSettings';

/**
 * 从默认设置中解构出PWA设置
 * @type {boolean}
 */
const { pwa } = defaultSettings;
/**
 * 检查当前页面是否使用HTTPS协议
 * @type {boolean}
 */
const isHttps = document.location.protocol === 'https:';

/**
 * 清除所有缓存
 */
const clearCache = () => {
  // 如果浏览器支持缓存
  if (window.caches) {
    // 获取所有缓存的键
    caches
      .keys()
      .then((keys) => {
        // 遍历所有键并删除缓存
        keys.forEach((key) => {
          caches.delete(key);
        });
      })
      // 如果发生错误，打印错误信息
      .catch((e) => console.log(e));
  }
};

/**
 * 如果PWA设置为true
 */
if (pwa) {
  // 监听离线事件
  window.addEventListener('sw.offline', () => {
    // 显示离线警告消息
    message.warning(useIntl().formatMessage({ id: 'app.pwa.offline' }));
  });

  // 监听Service Worker更新事件
  window.addEventListener('sw.updated', (event: Event) => {
    const e = event as CustomEvent;
    const reloadSW = async () => {
      // 检查是否有等待状态的Service Worker
      const worker = e.detail && e.detail.waiting;
      if (!worker) {
        return true;
      }
      // 向等待状态的Service Worker发送skip-waiting事件
      await new Promise((resolve, reject) => {
        const channel = new MessageChannel();
        channel.port1.onmessage = (msgEvent) => {
          if (msgEvent.data.error) {
            reject(msgEvent.data.error);
          } else {
            resolve(msgEvent.data);
          }
        };
        worker.postMessage({ type: 'skip-waiting' }, [channel.port2]);
      });

      // 清除缓存并重新加载页面
      clearCache();
      window.location.reload();
      return true;
    };
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        type="primary"
        onClick={() => {
          // 关闭通知并重新加载Service Worker
          notification.destroy(key);
          reloadSW();
        }}
      >
        {useIntl().formatMessage({ id: 'app.pwa.serviceworker.updated.ok' })}
      </Button>
    );
    // 显示更新通知
    notification.open({
      message: useIntl().formatMessage({ id: 'app.pwa.serviceworker.updated' }),
      description: useIntl().formatMessage({ id: 'app.pwa.serviceworker.updated.hint' }),
      btn,
      key,
      onClose: async () => null,
    });
  });
} else if ('serviceWorker' in navigator && isHttps) {
  // 取消注册Service Worker
  const { serviceWorker } = navigator;
  if (serviceWorker.getRegistrations) {
    serviceWorker.getRegistrations().then((sws) => {
      sws.forEach((sw) => {
        sw.unregister();
      });
    });
  }
  serviceWorker.getRegistration().then((sw) => {
    if (sw) sw.unregister();
  });

  // 清除缓存
  clearCache();
}
