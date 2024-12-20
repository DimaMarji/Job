import { UserOutlined, VideoCameraOutlined, UploadOutlined, MenuUnfoldOutlined, MenuFoldOutlined, RightOutlined, LeftOutlined } from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
import React, { useState } from 'react'

const { Header, Sider, Content } = Layout;
const DashboardLayout = () => {

    const [collapsed, setCollapsed] = useState(false);
    
  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
          },
        ]}
      />
        <Button onClick={()=>setCollapsed(!collapsed)}
                         className={"collapse-button"}
                         type={"text"}>
                    {collapsed ? <RightOutlined/> : <LeftOutlined/>}
                </Button>
    </Sider>
 
    <Layout>

      <Header style={{ padding: 0, background: "white" }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280
        }}
      >
        Content
      </Content>
    </Layout>
  </Layout>
  )
}

export default DashboardLayout