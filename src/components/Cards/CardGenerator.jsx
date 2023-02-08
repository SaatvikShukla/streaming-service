import React, {useState} from 'react';
import { Card, Space, Image, Progress, Typography,  } from 'antd';
import Button from '@mui/material/Button';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import DetailView from './DetailView';


function CardGenerator ({cols, showDetails,selectedCard, dataset, handleClick}) {
    let resultSet = [];
    dataset.map((row, index) => {
        if(index%cols === 0) {
          resultSet.push(<DetailView ID={index/cols} showDetails={showDetails} dataset={dataset} selectedCard={selectedCard} />)
        }
        resultSet.push(
          <>
            <Card
              hoverable
              cover={<img className='posterImage' alt="example" src={row.Poster} />}
              className={"movieCard movieCard-" + index}
              onClick={() => {handleClick(row, index)}}
              key={'movieCard-'+index}
            >
              <Space direction='vertical' size={16}>
                <div className='dataCard-Title'>
                  <Typography.Text style={{color: 'white'}}>{row.Title}</Typography.Text>
                </div>
                <Space direction="horizontal" size="middle">
                  <PlayCircleOutlinedIcon style={{ fontSize: '24px'}} />
                  <ControlPointOutlinedIcon style={{ fontSize: '24px'}} />
                </Space>
              </Space>
            </Card>
          </>
        );
      })
      return resultSet
}

export default CardGenerator;