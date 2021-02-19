import React, { Fragment } from 'react';
import { Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';


function ExtractionModelTip(params) {
  const { title } = params;
  console.log('title', title);

  const tips = {
    '句级提取模型': '正文一句话、各级标题',
    '要素级提取模型': '日期、人名、机构名、事件名，等',
    '表格提取模型': '单元格内整体',
    '段落提取模型': '正文中的一个自然段落',
    '章节提取模型': '某级标题及其涵盖所有文本内容',
    '多事件提取模型': '多个基本要素构成的信息组合',
  }

  return <Fragment>
    <Tooltip placement="top" title={title ? tips[title] : '请选择模型级别'}>
      <ExclamationCircleOutlined
        style={{
          right: '45px',
          position: 'absolute',
          top: '6px',
          fontSize: '19px',
          color: '#faad14',
        }} />
    </Tooltip>
  </Fragment>
}

export default ExtractionModelTip;