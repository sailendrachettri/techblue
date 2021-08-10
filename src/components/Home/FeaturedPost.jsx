import React from 'react';
import {StyledFeaturedPost, H2, Items, Img, LeftSection, Tag, Title, Desc} from './StyledFeaturedPost';
import blog_img7 from '../../img/post/img7.jpg'
import blog_img9 from '../../img/post/img9.jpg'
import blog_img10 from '../../img/post/img10.jpg'
import blog_img13 from '../../img/post/img13.jpg'

function FeaturedPost() {
    return (
        <>
            <StyledFeaturedPost>
                <H2>Featured Posts</H2>

                <Items>
                    <Img src={blog_img7} />

                    <LeftSection>
                        <Tag>Javascript</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>
                
                <Items>
                    <Img src={blog_img9} />

                    <LeftSection>
                        <Tag>Reactjs</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

                <Items>
                    <Img src={blog_img10} />

                    <LeftSection>
                        <Tag>Django</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

                <Items>
                    <Img src={blog_img13} />

                    <LeftSection>
                        <Tag>Python</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

            </StyledFeaturedPost>
        </>
    );
}

export default FeaturedPost;