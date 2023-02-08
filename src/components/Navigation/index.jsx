import React, {useState} from 'react';
import UserImg from './user.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {  Layout, Menu, theme, Space, Image, Typography } from 'antd';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
    const getItem = (label,
        key,
        icon,
        children) => {
            return {
                key,
                icon,
                children,
                label,
              }
    }
  const items = [
    { type: 'divider' },
    getItem('Discover', '1', <SearchOutlinedIcon className='navIcon' />),
    getItem('Playlist', '2', <PlaylistPlayOutlinedIcon className='navIcon' />),
    getItem('Movie', '3', <LiveTvOutlinedIcon className='navIcon' />),
    getItem('TV Shows', '4', <DesktopWindowsOutlinedIcon className='navIcon' />),
    getItem('My List', '5', <ListOutlinedIcon className='navIcon' />),
    { type: 'divider' },
    getItem('Watch Later', '6', <UpdateOutlinedIcon className='navIcon' />),
    getItem('Recommened', '7', <FavoriteBorderOutlinedIcon className='navIcon' />),
    { type: 'divider' },
    getItem('Settings', '8', <SettingsOutlinedIcon className='navIcon' />),
    getItem('Logout', '9', <LogoutOutlinedIcon className='navIcon' />),
  ];

function Navigation() {
    const [collapsed, setCollapsed] = useState(window.innerWidth < 480 ? true : false);

    // viewport dimensions for dynamically switching between mobile or desktop view
    const [dimensions, setDimensions] = React.useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const handleResize = () => {
        setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        });
        setCollapsed(window.innerWidth < 480 ? true : false);
      }
      
    React.useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);
  

    return (
        <div className='AppNav'>
            <Layout style={{  }}>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <div id="siderWrapper" style={{ paddingTop: 12, minHeight: 166 }}>
                      <Space direction="vertical" size={0} style={{maxWidth: '50%'}}>
                        <Image id={"navUserIcon"} src={UserImg} preview={false} />
                        <div id={'navUserTitle'}>
                          {/* wide view */}
                          <Title level={5} style={{color: 'white', margin: 0}}>Eric Hoffman</Title>
                        </div>
                        <div id={'navUserTitle-mobile'}>
                          {/* mobile view */}
                          <Title level={5} style={{color: 'white', margin: 0}}>EH</Title>
                        </div>
                      </Space>
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
            </Layout>
        </div>
    );
  }
  
  export default Navigation;

