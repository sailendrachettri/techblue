import React from 'react';
import {StyledFeaturedPost, H2, Items, Img, LeftSection, Tag, Title, Desc} from './StyledFeaturedPost';
import blog_img from '../../img/post/img1.jpg';

function FeaturedPost() {
    return (
        <>
            <StyledFeaturedPost>
                <H2>Featured Posts</H2>

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

            </StyledFeaturedPost>
        </>
    );
}

export default FeaturedPost;