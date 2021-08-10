import React from 'react';
import {StyledPost, Items, Img, LeftSection, Tag, Title, Desc} from './StyledPost';
import blog_img1 from '../../img/post/img1.jpg';
import blog_img2 from '../../img/post/img2.jpg';
import blog_img3 from '../../img/post/img3.jpg';
import blog_img4 from '../../img/post/img4.jpg';
import blog_img5 from '../../img/post/img5.jpg';

function Frontend() {
    return (
        <>
            <StyledPost>
                <Items>
                    <Img src={blog_img3} />

                    <LeftSection>
                        <Tag>Html/Css</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>
                
                <Items>
                    <Img src={blog_img2} />

                    <LeftSection>
                        <Tag>Angular</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

                <Items>
                    <Img src={blog_img1} />

                    <LeftSection>
                        <Tag>React</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

                <Items>
                    <Img src={blog_img4} />

                    <LeftSection>
                        <Tag>Nextjs</Tag>
                        <Title>Lorem ipsum dolor sit.</Title>
                        <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, ea!</Desc>
                    </LeftSection>
                </Items>

                <Items>
                    <Img src={blog_img5} />

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

export default Frontend;