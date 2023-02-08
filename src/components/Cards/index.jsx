import React, {useState} from 'react';
import { Card, Space, Image, Progress, Typography,  } from 'antd';

  
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';

import CardGenerator from './CardGenerator';

function Cards({config, dataset}) {
  // control for detailview
  const [showDetails, setShowDetails] = useState(false);
  
  // var mapping rows 
  // 2 rows - mobile
  // 5 rows - Desktop

  const [cols, setCols] = useState(window.innerWidth < 480 ? 2 : 5);

  const [selectedCard, setSelectedCard] = useState(-1);
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
      setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
      });
      setCols(window.innerWidth < 480 ? 2 : 5);
    }
  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
    
    const handleClick = (row, index) => { 
      setSelectedCard(index);
      setShowDetails(index/cols);
    }

    return (
      <>
        <Space id='mainContentWrapper' direction='vertical' size={24} style={{padding: '48px'}}>
          <div className='cardWrapper'>

            {!config.showSearch && (
              <>
                {config.filteredData.length === 0 && ("No results found for your search.")}
                <CardGenerator cols={cols} showDetails={showDetails} selectedCard={selectedCard} dataset={config.filteredData} handleClick={handleClick} />
              </>)}
             {
               config.showSearch && (
                 <CardGenerator cols={cols} showDetails={showDetails} selectedCard={selectedCard} dataset={dataset} handleClick={handleClick} />
                 )
                }
          </div>
        </Space>
      </>
    );
  }
  
  export default Cards;
  