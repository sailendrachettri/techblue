import React from 'react';
import { StyledHero, Items, Img, Tags, PublishDate, Desc, AuthorName, TagAndDate, BlockDesc } from './StyledHero';
import blog_img from '../../img/post/post1.png'

function Hero() {
    return (
        <>
            <StyledHero>
                <Items>
                    <Img src={blog_img} />
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
                    <Img src={blog_img} />
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
                    <Img src={blog_img} />
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
                    <Img src={blog_img} />
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
                    <Img src={blog_img} />
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
                    <Img src={blog_img} />
                    <BlockDesc>
                        <TagAndDate>
                            <Tags>Javascript</Tags>
                            <PublishDate>Jan 2021</PublishDate>
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