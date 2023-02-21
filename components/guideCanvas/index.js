// import { Tips } from './Tips';
import ReactDOM from 'react-dom/client'
import { useEffect, useState, useRef } from 'react';

import styles from "./guideCanvas.module.scss"
import { Button } from '@nextui-org/react';
import Router, { useRouter } from "next/router";



export default function GuideCanvas(props) {
    const { id, tipInfo, position } = props;
    const router = useRouter();

    const [showCanvas, updateShowCanvas] = useState(true)

    let stepTip = useRef();
    let canvasDiv = useRef();

    const setFocus = async (x, y, w, h) => {
        let height = window.screen.height;
        let width = window.screen.width;
        let c = document.getElementById("myCanvas");
        c.width = width;
        c.height = height;
        let ctx = c.getContext("2d");
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(0,0,0,0.3)';
        ctx.fillRect(0, 0, x, height);
        ctx.fillRect(x, 0, width - x, y);
        ctx.fillRect(x, y + h, width - x, height - y - h);
        ctx.fillRect((x + w), y, width - x - w, h);
    };

    const setTipPosition = async (x, y, w, h) => {
        canvasDiv.current.style.width = w + "px";
        canvasDiv.current.style.height = h + "px";
        canvasDiv.current.style.left = x + "px";
        canvasDiv.current.style.top = y + "px";
        canvasDiv.current.style.boxShadow = " 0 0 0 10000vh rgb(0 0 0 / 50%)"
        if (position == "top") {
            stepTip.current.style.left = JSON.parse(x + (w / 2)) + "px";
            stepTip.current.style.top = JSON.parse(y + h) + "px";
        } else {
            stepTip.current.style.left = JSON.parse(x + w) + "px";
            stepTip.current.style.top = JSON.parse(y + (h / 2) - 20) + "px";
        }

    };

    const setFocusById = async (e) => {
        let a = document.getElementById(e);
        let rect = a.getBoundingClientRect();
        // console.log(a.offsetLeft, a.offsetTop, rect.left, rect.top, rect.width, rect.height);
        if (e == "Home" || e == "profile" || e == "profileNum" || e == "userProfile" || e == "BetMain") {
            setTipPosition(rect.left, rect.top, rect.width, rect.height);
        } else {
            setTipPosition(a.offsetLeft, a.offsetTop, rect.width, rect.height);
        }
    };

    const Next = () => {
        const currentStep = localStorage.getItem('currentStep');
        if (parseInt(currentStep) == 1 || !currentStep) {
            if (router.pathname !== "/") {
                localStorage.setItem("stepStaus", JSON.stringify(7));
                Router.push('/');
            } else {
                props.changeCaseStep(7);
                setTimeout(() => {
                    props.changeCanvasId("Likes2");
                }, 200);
            }
            localStorage.setItem("currentStep", JSON.stringify(2));
        } else if (parseInt(currentStep) == 2) {
            if (router.pathname !== "/") {
                localStorage.setItem("stepStaus", JSON.stringify(12));
                Router.push('/');
            } else {
                Router.push('/');
                props.changeCaseStep(12);
                setTimeout(() => {
                    props.changeCanvasId("Likes1");
                }, 1000);
            }
            localStorage.setItem("currentStep", JSON.stringify(3));
        }
    };

    const Skip = () => {
        localStorage.setItem("stepEnd", true);
        localStorage.setItem("currentStep", JSON.stringify(1));
        localStorage.setItem("stepStaus", JSON.stringify(1));
        props.changeCanvasId();
    };

    const [showStep, updateShowStep] = useState(1);

    useEffect(() => {
        const currentStep = localStorage.getItem('currentStep');
        updateShowStep(parseInt(currentStep));
    });

    useEffect(() => {
        if (window.innerWidth < 768) {
            updateShowCanvas(false);
        } else {
            const stepEnd = localStorage.getItem('stepEnd');
            if (id && id != false && (stepEnd !== "true" || stepEnd == null)) {
                setFocusById(id);
            }
        }

    }, [id]);


    return (
        <>
            {
                (id || id !== undefined) && id !== false && showCanvas != false ? (
                    <>
                        {/* <canvas className={styles.canvas} id="myCanvas"></canvas> */}
                        <div className={styles.canvasDiv} ref={canvasDiv} style={id == "Home" ? { "position": "fixed" } : {}}></div>
                        <div id="stepTip" ref={stepTip} style={id == "Home" ? { "position": "fixed" } : {}}>
                            <div className="clickMouse">
                                <img className={position === "top" ? "top" : "left"} src="/images/icon/click.gif" />
                            </div>
                            {tipInfo !== "" ? (
                                <div className="caseStepTip">
                                    <div className='caseNext'>
                                        {showStep != 3 ? (<Button auto className="greenButton_border" style={{ "height": "25px" }} onPress={Next.bind(this)}>Next</Button>) : null}
                                        <Button auto className="greenButton" style={{ "height": "25px" }} onPress={Skip.bind(this)}>Skip</Button>
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: tipInfo }}></div>
                                </div>) : null}
                        </div>
                    </>)
                    : null
                }

        </>
    )
}

