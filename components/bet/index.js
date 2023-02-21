import { Button, Progress, Input } from "@nextui-org/react";
import styles from "./bet.module.scss";
import { useEffect, useState } from 'react';
// import betData from "../../pages/api/betType"

export default function Bet(props) {
    const { caseStep, postId, betData } = props;

    const [betType, setBetType] = useState(betData);
    const [bet, setBet] = useState(false);
    const [vote, setVote] = useState(0);
    const [betChange, setBetChange] = useState(0);
    useEffect(() => {
        if (caseStep == 9) {
            props.changeTipInfo("Place your bet here; and of course you can place many bets if you so like.");
            props.changePosition("top");
        }
        if (caseStep == 10) {
            setTimeout(() => {
                props.changeCaseStep(caseStep + 1);
                props.changeCanvasId("BetMain");
                props.changeTipInfo("");
                props.changePosition("top");
            }, 3000);
        }
        if (betData.length <= 0) {
            setBet(true)
        }
    });

    const [betPercentage, setBetPercentage] = useState(0);

    const changeBet = async (type) => {
        if (postId == 3) {
            let count = betType[0].count + betType[1].count;
            let percentage = count / 100;
            setBetPercentage(percentage);
            setBet(true);
        } else {
            if (type === 'bet') {
                props.changeCaseStep(caseStep + 1);
                props.changeCanvasId();
                props.changeTipInfo();
                props.changePosition();
                let count = betType[0].count + betType[1].count + betType[2].count + betType[3].count;
                let percentage = count / 100;
                console.log(count, percentage)
                setBetPercentage(percentage);
                setBet(true);
                betType.forEach(element => {
                    if (element.id === betChange) {
                        element.count = element.count + JSON.parse(vote);
                    }
                });
            } else {
                props.changeCaseStep(caseStep + 1);
                props.changeCanvasId("Home");
                props.changeTipInfo("Back to HOME to check out more interesting questions.");
                props.changePosition("left");
            }
        }


    }

    const changeBetVote = async (item, e) => {
        setBetChange(item.id);
        setVote(e.target.value)
    }

    return (
        <div>
            {caseStep == 10 ? (<div className="justify_align_center" id="demoGif"><img src="/images/demo/demo_bet.gif" className={styles.betResult} /></div>) : null}
            {caseStep != 10 ? (<div className={styles.bet}>
                {betType.map((item) => (
                    <div key={item.id} className={styles.betH5}>
                        <div className={styles.change}>
                            <div className="justify_space_between">
                                <p className="title14">{item.type}</p>
                                <span className="title12">{!bet ? "" : item.count}</span>
                            </div>

                            <Progress color="success" size="sm" value={!bet ? 0 : JSON.parse(item.count / betPercentage)} className={caseStep >= 11 && item.id !== 3 ? styles.noProgress : styles.yesProgress} />
                            <div>
                                <p className="title12_grey">Top Voters</p>
                                {item.transList.map((data) => (
                                    <div className={styles.votersItem} key={item.id}>
                                        <p>{data.name} <img src="/images/icon/twitter.svg" /></p>
                                        <p>{data.bet}</p>
                                    </div>
                                ))}
                            </div>
                            <Button size="xs" className={styles.moreBut}>View More</Button>
                        </div>
                        {((caseStep == 9 || postId == 3) && !bet) || !bet ? (<><p className="title12 margin10_5">Bet this vote</p>
                            <Input clearable width="100%" placeholder="Enter amount" aria-label="betvote" className="inputK" name="betvote" onChange={changeBetVote.bind(this, item)} /></>) : null}

                        <div className="justify_align_center pchidden" style={{ "marginTop": "10px" }}>
                            {caseStep == 9 || (postId == 3 && !bet) || !bet ? (<Button className={`${"greenButton"} ${styles.betButton} `} auto onClick={changeBet.bind(this, "bet")}>Bet</Button>) : null}
                        </div>
                    </div>
                ))}
            </div>) : null}
            {caseStep >= 11 && betChange == 3 ? (<div className={styles.claimUsdt}>100USDT</div>) : null}
            {caseStep >= 11 && caseStep < 14 && betChange !== 3 ? (<div className={styles.claimUsdt} style={{ "color": "#C04848" }}>You made the wrong bet. You have nothing to claim.</div>) : null}

            {postId == 3 ?
                (<div className="justify_align_center h5hidden" style={{ "marginTop": "10px", "width": "50%" }}>
                    {caseStep == 9 || (postId == 3 && !bet) || !bet ? (<Button className={`${"greenButton"} ${styles.betButton}`} auto onClick={changeBet.bind(this, "bet")}>Bet</Button>) : null}
                </div>) :
                (
                    <div className="justify_align_center" style={{ "marginTop": "10px" }}>
                        {caseStep == 9 || (postId == 3 && !bet) || !bet ? (<Button className={`${"greenButton"} ${styles.betButton} ${"h5hidden"}`} auto onClick={changeBet.bind(this, "bet")}>Bet</Button>) : null}
                        {caseStep >= 11 && betChange == 3 ? (<Button className={`${"greenButton"} ${styles.betButton}`} auto onClick={changeBet.bind(this, "claim")}>claim</Button>) : null}
                        {caseStep >= 11 && caseStep < 14 && betChange !== 3 ? (<Button className={`${"greenButton"} ${styles.betButton}`} style={{ "background": "#ccc" }} auto onClick={changeBet.bind(this, "claim")}>claim</Button>) : null}
                    </div>
                )

            }


        </div>

    )
}