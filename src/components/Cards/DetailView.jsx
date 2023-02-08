import React, {useState} from 'react';
import { Card, Space, Image, Progress, Typography,  } from 'antd';
import Button from '@mui/material/Button';

function DetailView ({showDetails,dataset, selectedCard, ID}) {
    return (
        <>
            { (selectedCard !== -1 && dataset.length > 0) && (
                    <Card className={'dataCard'} style={Math.floor(showDetails) === ID ? {display: "block"} : {display: 'none'}} >

                    <div className='dataCard-Wrapper' >
                    {/* <Space direction='horizontal'  size={48}> */}

                        <div className='dataCard-Poster-Wrapper'>
                            <Image className='dataCard-Poster' src={dataset[selectedCard].Poster} preview={false}></Image>
                        </div>

                        <Space className='dataCard-Data-Wrapper' direction='vertical' size={24}>
                            <Space direction='vertical' size={8}>
                                <Typography.Title level={2} style={{ margin: 0, color: 'white' }}>
                                {dataset[selectedCard].Title}
                                </Typography.Title>

                                <Space direction='horizontal' align='start' size={4}>
                                <Progress percent={dataset[selectedCard].imdbRating * 10} showInfo={false} strokeColor="#00E0FF" style={{width: "111px"}} /> 
                                <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white' }}>{dataset[selectedCard].imdbRating}/10</Typography.Paragraph>
                                </Space>
                                <Space direction='vertical' size={16}>
                                
                                <Space direction='vertical' size={4}>
                                    <Space> 
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white', width: 104 }}>Year: </Typography.Paragraph>
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white' }}>{dataset[selectedCard].Year}</Typography.Paragraph>
                                    </Space>

                                    <Space> 
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white', width: 104 }}>Running Time: </Typography.Paragraph>
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white' }}>{dataset[selectedCard].Runtime}</Typography.Paragraph>
                                    </Space>
                                    
                                    <Space> 
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white', width: 104 }}>Directed by: </Typography.Paragraph>
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white' }}>{dataset[selectedCard].Director}</Typography.Paragraph>
                                    </Space>                        
                                    
                                    <Space> 
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white', width: 104 }}>Language: </Typography.Paragraph>
                                    <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white' }}>{dataset[selectedCard].Language}</Typography.Paragraph>
                                    </Space>                        
                                </Space>

                                <Typography.Paragraph  level={5} style={{ margin: 0, color: 'white' }}>{dataset[selectedCard].Plot}</Typography.Paragraph>
                                </Space>
                            </Space>
                            
                            <Space direction='horizontal' size={12}>
                                <Button
                                variant="contained">
                                    Play Movie
                                </Button>
                                <Button 
                                variant="outlined">
                                    Watch Trailer
                                </Button>
                            </Space>


                        </Space>

                    </div>
                    </Card>
            )}
        </>
    );
}

export default DetailView;