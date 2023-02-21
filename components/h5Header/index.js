import Router from "next/router";
import styles from "./index.module.scss";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { HomeIcon } from "../Icon/home";
import { ProfileIcon } from "../Icon/profile";
import { FollowIcon } from "../Icon/following";
import { AnwserIcon } from "../Icon/anwser";


export default function h5Header() {
    const router = useRouter();
    const [navRouter, setnavRouter] = useState('/');
    useEffect(() => setnavRouter(router.pathname), []);
    const changeMenu = (menu) => {
        Router.push(menu);
    };
    return (
        <div className={styles.h5Menu}>
            <div className={navRouter == "/" || navRouter == "/articles" ? `${styles.active}` : ""} onClick={changeMenu.bind(this, "/")}>
                <HomeIcon fill={navRouter == "/" || navRouter == "/articles" ? "#3E835F" : "#AEAEAE"} size={20} />
                <p>Home</p>
            </div>
            <div className={navRouter == "/following" ? `${styles.active}` : ""} onClick={changeMenu.bind(this, "/following")}>
                <FollowIcon fill={navRouter == "/following" ? "#3E835F" : "#AEAEAE"} size={20} />
                <p>Following</p>
            </div>
            <div className={navRouter == "/answer" ? `${styles.active}` : ""} onClick={changeMenu.bind(this, "/answer")}>
                <AnwserIcon fill={navRouter == "/answer" ? "#3E835F" : "#AEAEAE"} size={20} />  
                <p>Answer</p>
            </div>
            <div className={navRouter == "/profile" ? `${styles.active}` : ""} onClick={changeMenu.bind(this, "/profile")}>
                <ProfileIcon fill={navRouter == "/profile" ? "#3E835F" : "#AEAEAE"} size={20} />
                <p>Profile</p>
            </div>
        </div>
    )
}