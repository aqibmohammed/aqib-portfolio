import React from 'react'
import  styled  from 'styled-components';


const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`;
const Card=styled.div`
width: 650px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
padding: 12px 16px;
justify-content: space-between;
position: relative;
overflow: hidden;
display: flex;
flex-direction: column;
gap: 12px;
transition: all 0.3s ease-in-out;
&:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
    transform: translateY(-5px);
}
@media (max-width: 768px){
    padding: 10px;
    gap: 8px;
    width: 300px;

}

&:hover ${Document}{
    display: flex;
}
border: 0.1px solid {background-image: linear-gradient(135deg, #C33764 10%, #1D2671 100%)};
;
box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
`;

const Top=styled.div`
       width: 100%;
    display: flex;
    gap: 12px
`;

const Logo=styled.img`
height: 50px;
background-color: #000;
border-radius: 10px;
margin-top: 4px;

@media (max-width: 768px){
    height: 40px;
}
`;
const Body =styled.div`
width: 100%;
display: flex;
flex-direction: column; 

`;

const Name=styled.div`
font-size: 18px;
font-weight: 600;
color: ${({ theme }) => theme.text_primary + 99};
@media  (max-width: 768px){
    font-size: 14px;
}
    `;

    const Name1=styled.div`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 99};
@media  (max-width: 768px){
    font-size: 14px;
}
    `;

const Degree=styled.div`
font-size: 14px;
font-weight: 500;
color: ${({theme})=> theme.text_primary +99};

    @media (max-widht: 768px){
        font-size: 12px;
    }


`;

const Date =styled.div`
    font-size: 12px;
    font-weight: 400px;
    color: ${({theme})=> theme.text_primary +80};
    @media (max-widht: 768px){
        font-size: 10px;
    }


`;

const Description=styled.div`
width: 100%;
font-size: 15px;
font-weight: 400;
color: ${({ theme }) => theme.text_primary + 99};
margin-bottom: 10px;
@media only screen and (max-width: 768px){
    font-size: 12px;
}
`;


const Span=styled.div`
overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 3; /* number of lines to be displayed */
-webkit-box-orient: vertical;
max-width: 100%;
text-overflow: ellipsis;
`;

const Grade=styled.div`
font-size: 12px;
font-weight: 400px;
color: ${({theme})=> theme.white +80};

@media (max-width: 768px){
  font-size: 10px;
}
`;

const Educationcard = ({education}) => {
  return (
    <Card>
       <Top>
                <Logo src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <br/>
                    <Name1>{education.ins}</Name1>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade>{education.grade}</Grade>
      <Description>
       <Span>{education.desc}</Span> 
     
            </Description>
            {education.doc &&
                <a href={education.doc} target="new">
                    <Document src={education.doc} />
                </a>
            }
    </Card>
  )
}
 
export default Educationcard
