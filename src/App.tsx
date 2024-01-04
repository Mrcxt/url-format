/*
 * @LastEditTime: 2024-01-04 19:17:46
 * @Description:
 * @Date: 2023-08-31 14:58:00
 * @Author: @周星星同学
 */
import urlFormat from "~/lib";
import { Button, Input, Typography, Descriptions, Space, Radio } from "antd";
import { useEffect, useMemo, useState } from "react";

const { Title, Text, Paragraph } = Typography;

const OPTIONS = [
  location.href,
  "http://www.history.com/path?query1=1&query2=2",
  "https://www.hash.com/path#hash?query1=1&query2=2",
  "https://www.hash.com/path?query=0#hash?query1=1&query2=2",
];

export default () => {
  const [url, setUrl] = useState(OPTIONS[0]);

  const urlInfo = useMemo(() => urlFormat(url), [url]);

  useEffect(() => {
    console.log(urlInfo);
  }, [urlInfo]);

  return (
    <div className="px-10">
      <Space direction="vertical" className="w-full">
        <Title>Demo</Title>
        <Paragraph>
          在单页应用中使用hash模式，url上面的query总是会出现在hash前面或者后面，这样会导致我们在获取url的query时候需要做一些额外的处理，这个库就是为了解决这个问题而生的。
        </Paragraph>
        <Input
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <Radio.Group
          className="flex flex-col"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          options={OPTIONS}
        />
        <Text>打开控制台查看解析结果</Text>
      </Space>
    </div>
  );
};
