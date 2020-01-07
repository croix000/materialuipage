
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import AutoRotatingCarousel from './AutoRotatingCarousel';
import Slide from './Slide';

/*

                

                    if(!'undefined'===screenshots){
                    this.screenshots.map((screen, index) => (

                        <Slide

                            mediaBackgroundStyle={{
                                backgroundImage: `url(${screen})`, backgroundSize: 'cover',
                                overflow: 'hidden'
                            }}
                            style={{ backgroundColor: blue[600] }}

                        />
                    ))}
                
*/


function AutoRotatingCarouselModal({ handleOpen, setHandleOpen, isMobile, title, description, image, screenshots, storeLink }) {



    return (
        <div>
            <AutoRotatingCarousel
                label="Back"
                open={handleOpen.open}
                onClose={() => setHandleOpen({ open: false })}
                onStart={() => setHandleOpen({ open: false })}
                autoplay={false}
                mobile={isMobile}
                style={{ position: "absolute" }}
                title={title}
                subtitle={description}
                storeLink={storeLink}
            >


                <Slide

                    mediaBackgroundStyle={{
                        backgroundImage: `url(${image})`, backgroundSize: 'cover',
                        overflow: 'hidden', backgroundPosition: 'center'
                    }}
                    style={{ backgroundColor: blue[600] }}

                />
                {
                    screenshots.map(screen => (

                        <Slide

                            mediaBackgroundStyle={{
                                backgroundImage: `url(${screen})`, backgroundSize: 'cover',
                                overflow: 'hidden', backgroundPosition: 'center'
                            }}
                            style={{ backgroundColor: blue[600] }}

                        />
                    ))


                }



            </AutoRotatingCarousel>



        </div>
    );
};


export default function AutoRotatingCarouselModalTest(props) {

    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleClick = () => {
        setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:600px)");
    let myComponent;
    if (Array.isArray(props.screenshots) && props.screenshots.length) {
        myComponent = <AutoRotatingCarouselModal
            isMobile={matches}
            handleOpen={handleOpen}
            setHandleOpen={setHandleOpen}
            title={props.title}
            description={props.description}
            image={props.image}
            screenshots={props.screenshots}
            storeLink={props.storeLink}
        />
    } else {
        myComponent = null
    }
    return (
        <>
            <Button size="small" color="primary" onClick={handleClick}>View</Button>

            {myComponent}

        </>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AutoRotatingCarouselModalTest />, rootElement);
