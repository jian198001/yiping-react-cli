
import { Editor, } from "amis-editor";
import axios from "axios";
// import copy from 'copy-to-clipboard';
import "amis-editor-core/lib/style.css";
import "amis/lib/themes/cxd.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
import { setDefaultTheme } from "amis";
import "./index.scss";
import { useEffect, useState } from "react";
import { DesktopOutlined, MobileOutlined } from "@ant-design/icons";

setDefaultTheme("cxd");
const MyEditor = () => {
  const [schema, setSchema] = useState({
    type: "page",
    title: "Hello world",
    body: [],
    id: "u:22f85d1816f4",
    asideResizor: false,
    pullRefresh: {
      disabled: true,
    },
  });

  const [isMobile, setIsMobile] = useState(false);
  const [preview, setPreview] = useState(false);

  const onChange = (val: any) => {
    setSchema(val);
  };

  useEffect(() => {
    const schema = localStorage.getItem("schema");
    if (schema) {  
      return setSchema(JSON.parse(schema));
    }
    
    // 初始化
    const schemaNew = {
      type: "page1",
      title: "Hello world",
      body: [],
      id: "u:22f85d1816f4",
      asideResizor: false,
      pullRefresh: {
        disabled: true,
      },
    }

    setSchema(schemaNew);

    localStorage.setItem("schema", JSON.stringify(schemaNew));

  }, []);

  return (
    <div className="Editor-Demo">
      <div className="Editor-header">
        <div className="Editor-title">amis 可视化编辑器</div>
        <div className="Editor-view-mode-group-container">
          <div className="Editor-view-mode-group">
            <div
              className={`Editor-view-mode-btn editor-header-icon ${
                !isMobile ? "is-active" : ""
              }`}
              onClick={() => {
                setIsMobile(false);
              }}
            >
              <DesktopOutlined />
            </div>
            <div
              className={`Editor-view-mode-btn editor-header-icon ${
                isMobile ? "is-active" : ""
              }`}
              onClick={() => {
                setIsMobile(true);
              }}
            >
              <MobileOutlined />
            </div>
          </div>
        </div>

        <div className="Editor-header-actions">
          <div
            className={`header-action-btn m-1 ${preview ? "primary" : ""}`}
            onClick={() => {
              setPreview((pre) => !pre);
            }}
          >
            {preview ? "编辑" : "预览"}
          </div>

          {!preview && <div className={`header-action-btn exit-btn`}>发布</div>}
        </div>
      </div>
      <div className="Editor-inner">
        <Editor
          theme={"cxd"}
          isMobile={isMobile}
          value={schema}
          onChange={onChange}
          preview={preview}
          onPreview={() => setPreview(true)}
          onSave={() => {}}
          className="is-fixed"
          showCustomRenderersPanel={true}
          // $schemaUrl={'./schema.json'}
          amisEnv={{
            fetcher: ({
              url, // 接口地址
              method, // 请求方法 get、post、put、delete
              data, // 请求数据
              responseType,
              config, // 其他配置
              headers, // 请求头
            }: any) => {
              config = config || {};
              config.withCredentials = true;
              responseType && (config.responseType = responseType);

              if (config.cancelExecutor) {
                config.cancelToken = new (axios as any).CancelToken(
                  config.cancelExecutor
                );
              }

              config.headers = headers || {};
              //添加token
              const token = localStorage.getItem("unionLoginToken");
              if (token && !config.headers["Authorization"]) {
                config.headers["Authorization"] = token;
              }

              if (method !== "post" && method !== "put" && method !== "patch") {
                if (data) {
                  config.params = data;
                }
                return (axios as any)[method](url, config);
              } else if (data && data instanceof FormData) {
                config.headers = config.headers || {};
                config.headers["Content-Type"] = "multipart/form-data";
              } else if (
                data &&
                typeof data !== "string" &&
                !(data instanceof Blob) &&
                !(data instanceof ArrayBuffer)
              ) {
                data = JSON.stringify(data);
                config.headers = config.headers || {};
                config.headers["Content-Type"] = "application/json";
              }

              return (axios as any)[method](url, data, config);
            },
          }}
        />
      </div>
    </div>
  );
};

export default MyEditor;
