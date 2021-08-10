import React from 'react';
import { StyledHero, Items, Img, Tags, PublishDate, Desc, AuthorName, TagAndDate, BlockDesc } from './StyledHero';
import blog_img7 from '../../img/post/img7.jpg'
import blog_img14 from '../../img/post/img14.jpg'
import blog_img9 from '../../img/post/img9.jpg'
import blog_img10 from '../../img/post/img10.jpg'
import blog_img13 from '../../img/post/img13.jpg'

function Hero() {
    return (
        <>
            <StyledHero>
                <Items>
                    <Img src={blog_img7} />
                    <BlockDesc>
                        <TagAndDate>
                            <Tags>PHP</Tags>
                            <PublishDate>Feb 2021</PublishDate>
                        </TagAndDate>
                        <Desc>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Incidunteaque!</Desc>
                        <AuthorName>By Sailendra Chettri</AuthorName>
                    </BlockDesc>
                </Items>

                <Items>
                    <Img src={blog_img14} />
                    <BlockDesc>
                        <TagAndDate>
                            <Tags>Python</Tags>
                            <PublishDate>March 2021</PublishDate>
                        </TagAndDate>
                        <Desc>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Incidunteaque!</Desc>
                        <AuthorName>By Sailendra Chettri</AuthorName>
                    </BlockDesc>
                </Items>

                <Items>
                    <Img src={blog_img9} />
                    <BlockDesc>
                        <TagAndDate>
                            <Tags>Javascript</Tags>
                            <PublishDate>Jan 2021</PublishDate>
                        </TagAndDate>
                        <Desc>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Incidunteaque!</Desc>
                        <AuthorName>By Sailendra Chettri</AuthorName>
                    </BlockDesc>
                </Items>

                <Items>
                    <Img src={blog_img10} />
                    <BlockDesc>
                        <TagAndDate>
                            <Tags>React</Tags>
                            <PublishDate>Jan 2020</PublishDate>
                        </TagAndDate>
                        <Desc>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Incidunteaque!</Desc>
                        <AuthorName>By Sailendra Chettri</AuthorName>
                    </BlockDesc>
                </Items>

                <Items>
                    <Img src={blog_img14} />
                    <BlockDesc>
                        <TagAndDate>
                            <Tags>Django</Tags>
                            <PublishDate>Jan 2021</PublishDate>
                        </TagAndDate>
                        <Desc>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Incidunteaque!</Desc>
                        <AuthorName>By Sailendra Chettri</AuthorName>
                    </BlockDesc>
                </Items>

                <Items>
                    <Img src={blog_img13} />
                    <BlockDesc>
                        <TagAndDate>
                            <Tags>Javascript</Tags>
                            <PublishDate>Jan 20119</PublishDate>
                        </TagAndDate>
                        <Desc>Lorem ipsum dolor sit amet consec tetur adipisicing elit. Incidunteaque!</Desc>
                        <AuthorName>By Sailendra Chettri</AuthorName>
                    </BlockDesc>
                </Items>
            </StyledHero>
        </>
    );
}

export default Hero;