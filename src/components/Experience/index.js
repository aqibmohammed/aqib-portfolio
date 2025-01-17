import React from 'react'
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {experiences} from "../../data/constants"
import Experiencecard from '../cards/Experiencecard';


const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`;


const Wrapper=styled.div`
max-width: 1100px;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 12px;
`;

const Title =styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top: 12px;
color: ${({theme})=> theme.card_light};
@media (max-width: 768px){
margin-top: 12px;
font-size: 32px;
}
`;
const Desc =styled.div`
font-size: 18px;
max-width: 600px;
text-align: center;
color: ${({theme})=> theme.card_light};
@media (max-width: 768px){
font-size: 16px;
} 

`;

const TimeLineSection=styled.div`
width : 100px;
max-width: 1000px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;

`;


const  Experience= () => {
  return (
    <Container id='experience'>
        <Wrapper>
            <Title>
                Experience
            </Title>
                <Desc>

                </Desc>
                <TimeLineSection>
                  <Timeline>
                    {experiences.map((experiences,index)=>(
                      <TimelineItem >
                        <TimelineSeparator>
                          <TimelineDot/>{
                            index!== experiences.length-1 && <TimelineConnector/>}
                        </TimelineSeparator>
                        <TimelineContent>
                          <Experiencecard experiences={experiences}/>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                    </Timeline>
                </TimeLineSection>
        </Wrapper>
    </Container>
  );
};

export default Experience;
