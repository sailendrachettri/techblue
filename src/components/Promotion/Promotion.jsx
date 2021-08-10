import React from 'react';
import fb_img from '../../img/Icons/facebook.png'
import twt_img from '../../img/Icons/twitter.png'
import eml_img from '../../img/Icons/email.png'
import lnd_img from '../../img/Icons/linkedin.png'
import { StyledPromption, Items, H2, Desc, SocialIcons, Img } from "./StyledPromotion";

function Promotion() {
    return (
        <>
            <StyledPromption>
                <Items>
                    <H2>Helpful?</H2>
                    <Desc>Follow & share this helpful knowledge on your favourite social networks.</Desc>
                    <SocialIcons>
                        <Img src={fb_img} />
                        <Img src={twt_img} />
                        <Img src={eml_img} />
                        <Img src={lnd_img} />
                    </SocialIcons>
                </Items>
            </StyledPromption>
        </>
    );
}

export default Promotion;