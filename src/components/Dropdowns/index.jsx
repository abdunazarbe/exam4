
import React from 'react';
import { Select } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                firs target
            </a>
        ),
        icon: <SmileOutlined />,
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                 second target
            </a>
        ),
        icon: <SmileOutlined />,
       
    },
  
];

const { Option } = Select;

function MyDropdowns() {

    return (
        <>
        <Dropdown
            menu={{
                items,
            }}
        >
            <Space>
            Sort by
                <DownOutlined />
            </Space>
        </Dropdown>

        <Dropdown
            menu={{
                items,
            }}
        >
            <Space>
                Color
                <DownOutlined />
            </Space>
        </Dropdown>

        <Dropdown
            menu={{
                items,
            }}
        >
            <Space>
                Price
                <DownOutlined />
            </Space>
        </Dropdown>

        <Dropdown
            menu={{
                items,
            }}
        >
            <Space>
            Flower type 
                <DownOutlined />
            </Space>
        </Dropdown>

        <Dropdown
            menu={{
                items,
            }}
        >
            <Space>
            Occasion
                <DownOutlined />
            </Space>
        </Dropdown>
        </>
    );
}

export default MyDropdowns;