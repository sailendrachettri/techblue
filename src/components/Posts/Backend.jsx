import React from 'react';
import {StyledPost, Items, Img, LeftSection, Tag, Title, Desc} from './StyledPost';
import blog_img from '../../img/post/img2.jpg';

function Backend() {
    return (
        <>
            <StyledPost>
                <Items>
                    <Img src={blog_img} />

                    <LeftSection>
                        <Tag>Javascript</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>
                
                <Items>
                    <Img src={blog_img} />

                    <LeftSection>
                        <Tag>Javascript</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

                <Items>
                    <Img src={blog_img} />

                    <LeftSection>
                        <Tag>Javascript</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

                <Items>
                    <Img src={blog_img} />

                    <LeftSection>
                        <Tag>Javascript</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

            </StyledPost>
        </>
    );
}

export default Backend;