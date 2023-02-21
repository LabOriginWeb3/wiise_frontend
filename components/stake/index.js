
import { Button, Input } from "@nextui-org/react";
import styles from "./stake.module.scss"
import { useEffect, useState } from 'react';


export default function Stake(props) {
    const { type, id,item } = props;
    const [stakeNum, setStakeNum] = useState(0);
    return (
        <div className={type == "detail" ? styles.stake_detail : styles.stake} id={id}>
            {/* <p className={styles.title}>Stake to boost</p> */}
            <Input placeholder="Enter Amount" width="100%" value={stakeNum} className={styles.inputCss} aria-label="stakeboost" />
            <div className="justify_space_between">
                <div className="justify_align_center" style={{ gap: "5px" }}>
                    <Button auto className="mini_white_button" onClick={() => setStakeNum(1)}>$1</Button>
                    <Button auto className="mini_white_button" onClick={() => setStakeNum(10)}>$10</Button>
                    <Button auto className="mini_white_button" onClick={() => setStakeNum(100)}>$100</Button>
                </div>
                <Button auto color="success" className="greenButton" onClick={() => props.changeStake(item)}>Stake</Button>
            </div>
        </div>


    )
}