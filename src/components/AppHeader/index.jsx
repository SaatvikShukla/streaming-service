import React, {useState, useEffect} from 'react';
import {  Space,Input, Tooltip, Image } from 'antd';
import { CloseOutlined, UserOutlined, MoreOutlined } from '@ant-design/icons';
import brightnessIcon from './Vector.svg';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

function AppHeader({config,setConfig, originalData}) {
    // filter util
    function filterByValue(array, value) {
      return array.filter((data) =>  (JSON.stringify(data.Title)).toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    // control for wide or collapsed search
    const [isSearchClicked, setIsSearchClicked] = useState(false);

    const toggleClick = () => {
      setIsSearchClicked(!isSearchClicked);
      let _config = Object.assign({}, config);
      _config.searchKey = "";
      _config.showSearch = false;
      setConfig(_config);
    }
    
    useEffect(() => {
      const _config = Object.assign({}, config);
      _config.filteredData = filterByValue(originalData, config.searchKey);
      _config.showSearch = _config.searchKey === "" ? true : false;
      setConfig(_config);
    }, [config.searchKey]);

    const changeHandler = (e) => {
      let _config = Object.assign({}, config);
      _config.searchKey = e.target.value;
      setConfig(_config);
    }

    return (
      <>
        <div className='AppHeader'>
          <Space style={{width: '100%', justifyContent: 'space-between'}} align="baseline">
            <Space style={{width: '100%'}}>
              {!isSearchClicked && (<SearchOutlinedIcon onClick={() => {toggleClick() }} />)}
              {isSearchClicked && (
                <Input
                  placeholder="Title, Movies, Keywords"
                  prefix={
                    <SearchOutlinedIcon style={{ color: '#FFF' }} />
                  }
                  suffix={
                    <Tooltip title="Clear search">
                      <CloseOutlined style={{ color: '#FFF' }} onClick={() => {toggleClick()}} />
                    </Tooltip>
                  }
                  value={config.searchKey}
                  onChange={e => {changeHandler(e)}}
                  id={"searchInputBox"}
                />
              )}
            </Space>
            <Space direction='horizontal' justifyContent="baseline" id="Nav-optionsWrapper">
              {!isSearchClicked && (
                <>
                  <LightModeOutlinedIcon style={{ color: '#FFF' }} />
                  <MoreVertOutlinedIcon style={{ color: '#FFF' }} />
                </>
              )}
            </Space>
          </Space>
        </div>
      </>
    );
  }
  
  export default AppHeader; 