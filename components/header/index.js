
import { Navbar, Text, User, Dropdown, Input, Button, Modal, Radio, Checkbox } from "@nextui-org/react";
import { Layout } from "./Layout";
import { AcmeLogo } from "./AcmeLogo.js";
import { SearchIcon } from "./SearchIcon.js";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AddIcon } from './AddIcon';
import styles from "./index.module.scss";
import Router from "next/router";



// import { useWeb3React } from "@web3-react/core";
// import { injected } from "../wallet/Connectors";
import { ConnectButton, useAccountModal } from '@rainbow-me/rainbowkit';

export default function header(props) {

  const { caseStep } = props;

  const { openAccountModal } = useAccountModal();

  const router = useRouter();
  const [navRouter, setnavRouter] = useState('/');
  useEffect(() => setnavRouter(router.pathname), []);

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  const [checked, setChecked] = useState(["Anonymous"]);

  const changePage = (actionKey) => {
    let page = actionKey.actionKey;
    if (page === "Profile") {
      Router.push('/profile');
    }
    if (page === "logout") {
      // disconnectMetask();
      openAccountModal();
    }
    if (page === "staking") {
      // Router.push({ path: "/profile", query: { page: "staking" } });
      Router.push('/profile?page=staking');
    }

    if (page === "collected") {
      // Router.push({ path: "/profile", query: { page: "collected" } });
      Router.push('/profile?page=collected');
    }
  };

  const changeUser = () => {
    if (caseStep == 19) {
      Router.push('/profile');
      props.changeCaseStep(20);
    }
  };


  //wallet start
  // const { account, activate, deactivate } = useWeb3React();
  //  active：一个钱包现在是否正在连接状态？
  // account：已连接的区块链账户地址。
  // library：它是web3或ethers，取决于你传入的内容。
  // connector：当前的连接器。因此，当我们连接时，本例中是injected连接器。
  // activate：连接到一个钱包的方法。
  // deactivate: 从一个钱包断开连接的方法

  // async function connectMetask() {
  //   try {
  //     await activate(injected);
  //     setUserVisible(false);
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

  // async function disconnectMetask() {
  //   try {
  //     deactivate()
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

  //wallet end


  // const userAddress = account || "";
  // const [uservisible, setUserVisible] = useState(false);
  // const connectWallet = () => setUserVisible(true);
  // const closeConnectWallet = () => {
  //   setUserVisible(false);
  // };

  const changeMenu = (menu) => {
    Router.push(menu);
  };


  const helpForNovices = () => {
    localStorage.setItem("stepEnd", false);
    localStorage.setItem("currentStep", JSON.stringify(1));
    localStorage.setItem("stepStaus", JSON.stringify(1));
    if (router.pathname !== "/") {
      Router.push("/");
    } else {
      Router.push("/");
      props.changeCaseStep(1);
      setTimeout(() => {
        props.changeCanvasId("Likes1");
      }, 200);
    }
  };

  return (
    <Layout>
      <Navbar variant="sticky" isCompact style={{ "--nextui--navbarContainerMaxWidth": "100%", "position": "fixed", "zIndex": "999999", "background": "#fff" }}>
        <Navbar.Brand css={{ mr: "$4" }} >
          <img className="Logo" src="/wiise.jpg" onClick={changeMenu.bind(this, "/")} />
          <Navbar.Content hideIn="xs" variant="underline-rounded" css={{ height: "52px" }} className="navbar_underline" activeColor="warning">
            <Navbar.Item className={styles.menuItem} isActive={navRouter == "/" || navRouter == "/articles"} onClick={changeMenu.bind(this, "/")} id="Home">Home</Navbar.Item>
            <Navbar.Item className={styles.menuItem} isActive={navRouter == "/following"} onClick={changeMenu.bind(this, "/following")}>Following</Navbar.Item>
            <Navbar.Item className={styles.menuItem} isActive={navRouter == "/answer" || navRouter == "/answer/detail"} onClick={changeMenu.bind(this, "/answer")}>Answer</Navbar.Item>
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content style={{ gap: "0.5rem" }}>
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              aria-label="search"
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              className="searchInput"
              placeholder="Search..."
            />
          </Navbar.Item>
          <Navbar.Item hideIn="xs">
            <Button auto icon={<AddIcon fill="#fff" size={12} />} className="standard_font greenButton" onClick={handler}>Add Question</Button>
          </Navbar.Item>
          <Navbar.Item hideIn="xs" >
            <div >
              {caseStep >= 18 ? (<div className="connUser" onClick={changeUser} id="userProfile"></div>) : null}
              <Dropdown placement="bottom-right">
                <Dropdown.Trigger className="userBorder">
                  <User
                    as="button"
                    size="sm"
                    name="0x8E0...c456"
                    src="/images/photo/avatar1.jpg"
                  />
                </Dropdown.Trigger>
                <Dropdown.Menu
                  aria-label="User menu actions"
                  color="success"
                  onAction={(actionKey) => changePage({ actionKey })}
                  css={{
                    "li>span":
                      { display: "flex", "align-items": "center", gap: "5px", "font-size": "12px" }
                  }}
                >
                  <Dropdown.Item css={{ height: "$18" }} color="#000" key="userInfo" aria-label="userFollow">
                    <div className="userFollow">
                      <div><p>5286</p><span>Following</span></div>
                      <div><p>126</p><span>Followers</span></div>
                      <div><p>28</p><span>Collect</span></div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item key="my_really" withDivider icon={<img src="/images/icon/really.svg" />}>
                    Achievement
                  </Dropdown.Item>
                  <Dropdown.Item key="Profile" icon={<img src="/images/icon/profile.svg" />} >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item key="topics" icon={<img src="/images/icon/chat.svg" />}>Topics</Dropdown.Item>
                  <Dropdown.Item key="drafts" icon={<img src="/images/icon/drafts.svg" />}>Drafts</Dropdown.Item>
                  <Dropdown.Item key="staking" icon={<img src="/images/icon/rocket.svg" />}>Staking</Dropdown.Item>
                  <Dropdown.Item key="collected" icon={<img src="/images/icon/bookmark.svg" />}>Collected</Dropdown.Item>
                  <Dropdown.Item key="settings" icon={<img src="/images/icon/settings.svg" />}>Settings</Dropdown.Item>
                  <Dropdown.Item key="logout" withDivider color="error">
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <div style={{ display: 'flex', gap: 12 }} >
                <Dropdown placement="bottom-right">
                  <Navbar.Item className="userBorder">
                    <Dropdown.Trigger>
                      <User
                        as="button"
                        size="sm"
                        name="0x8E0...c456"
                        src="/images/photo/avatar1.jpg"
                      />
                    </Dropdown.Trigger>

                  </Navbar.Item>

                  <Dropdown.Menu
                    aria-label="User menu actions"
                    color="success"
                    onAction={(actionKey) => changePage({ actionKey })}
                    css={{
                      "li>span":
                        { display: "flex", "align-items": "center", gap: "5px", "font-size": "12px" }
                    }}
                  >
                    <Dropdown.Item css={{ height: "$18" }} color="#000" key="userInfo" aria-label="userFollow">
                      <div className="userFollow">
                        <div><p>5286</p><span>Following</span></div>
                        <div><p>126</p><span>Followers</span></div>
                        <div><p>28</p><span>Collect</span></div>
                      </div>
                    </Dropdown.Item>
                    <Dropdown.Item key="my_really" withDivider icon={<img src="/images/icon/really.svg" />}>
                      Achievement
                    </Dropdown.Item>
                    <Dropdown.Item key="Profile" icon={<img src="/images/icon/profile.svg" />} >
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item key="topics" icon={<img src="/images/icon/chat.svg" />}>Topics</Dropdown.Item>
                    <Dropdown.Item key="drafts" icon={<img src="/images/icon/drafts.svg" />}>Drafts</Dropdown.Item>
                    <Dropdown.Item key="staking" icon={<img src="/images/icon/rocket.svg" />}>Staking</Dropdown.Item>
                    <Dropdown.Item key="collected" icon={<img src="/images/icon/bookmark.svg" />}>Collected</Dropdown.Item>
                    <Dropdown.Item key="settings" icon={<img src="/images/icon/settings.svg" />}>Settings</Dropdown.Item>
                    <Dropdown.Item key="logout" withDivider color="error">
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> */}

              {/* <ConnectButton.Custom>
                {({
                  account,
                  chain,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
                }) => {
                  // Note: If your app doesn't use authentication, you
                  // can remove all 'authenticationStatus' checks
                  const ready = mounted && authenticationStatus !== 'loading';
                  const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                      authenticationStatus === 'authenticated');

                  return (
                    <div
                      {...(!ready && {
                        'aria-hidden': true,
                        'style': {
                          opacity: 0,
                          pointerEvents: 'none',
                          userSelect: 'none',
                        },
                      })}
                    >
                      {(() => {
                        if (!connected) {
                          return (
                            <Button auto className="greenButton" onPress={openConnectModal}>Connect wallet</Button>
                          );
                        }

                        return (
                          <div style={{ display: 'flex', gap: 12 }} >
                            <Dropdown placement="bottom-right">
                              <Navbar.Item className="userBorder" id="user">
                                <Dropdown.Trigger>
                                  <User
                                    as="button"
                                    size="sm"
                                    name={account.displayName}
                                    src="/images/photo/avatar1.jpg"
                                  />
                                </Dropdown.Trigger>

                              </Navbar.Item>

                              <Dropdown.Menu
                                aria-label="User menu actions"
                                color="success"
                                onAction={(actionKey) => changePage({ actionKey })}
                                css={{
                                  "li>span":
                                    { display: "flex", "align-items": "center", gap: "5px", "font-size": "12px" }
                                }}
                                id="userProfile"
                              >
                                <Dropdown.Item css={{ height: "$18" }} color="#000" key="userInfo" aria-label="userFollow">
                                  <div className="userFollow">
                                    <div><p>5286</p><span>Following</span></div>
                                    <div><p>126</p><span>Followers</span></div>
                                    <div><p>28</p><span>Collect</span></div>
                                  </div>
                                </Dropdown.Item>
                                <Dropdown.Item key="my_really" withDivider icon={<img src="/images/icon/really.svg" />}>
                                  Achievement
                                </Dropdown.Item>
                                <Dropdown.Item key="Profile" icon={<img src="/images/icon/profile.svg" />} >
                                  Profile
                                </Dropdown.Item>
                                <Dropdown.Item key="topics" icon={<img src="/images/icon/chat.svg" />}>Topics</Dropdown.Item>
                                <Dropdown.Item key="drafts" icon={<img src="/images/icon/drafts.svg" />}>Drafts</Dropdown.Item>
                                <Dropdown.Item key="staking" icon={<img src="/images/icon/rocket.svg" />}>Staking</Dropdown.Item>
                                <Dropdown.Item key="collected" icon={<img src="/images/icon/bookmark.svg" />}>Collected</Dropdown.Item>
                                <Dropdown.Item key="settings" icon={<img src="/images/icon/settings.svg" />}>Settings</Dropdown.Item>
                                <Dropdown.Item key="logout" withDivider color="error">
                                  Log Out
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        );
                      })()}
                    </div>
                  );
                }}
              </ConnectButton.Custom> */}
            </div>

          </Navbar.Item>
        </Navbar.Content>
      </Navbar >

      <Modal
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="addModal"
        width="700px"
      >
        <Modal.Header>
          <Text id="modal-title" size={24}>
            Add a Question
          </Text>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modalMain}>
            <User
              as="button"
              size="md"
              src="/images/photo/avatar1.jpg"
            />
            <div className={styles.reply}>
              <p className={styles.title}>Question Subjest</p>
              <Input clearable width="100%" placeholder="" className="inputK" aria-label="question" />
              <p className={styles.title} style={{ marginTop: "24px" }}>Description</p>
              <textarea placeholder=""></textarea>
              <div className={styles.replyOp}>
                <img src="/images/icon/image.svg" />
                {/* <Radio.Group orientation="horizontal" value={checked}
                  onChange={setChecked}>
                  <Radio size="sm" color="success" value="Anonymous">Anonymous</Radio>
                  <Radio size="sm" color="success" value="Poll">Poll</Radio>
                </Radio.Group> */}
                <Checkbox.Group
                  color="success"
                  value={checked}
                  onChange={setChecked}
                  className="checkboxGroup"
                >
                  <Checkbox value="Anonymous">Anonymous</Checkbox>
                  <Checkbox value="Poll">Poll</Checkbox>
                </Checkbox.Group>
              </div>
              <div className={`${styles.title} ${"addIcon"}`} >Add Tags <div className="addBut"><img src="/images/icon/add.svg"></img></div></div>
              {checked.indexOf("Poll") != -1 ? (<div className={styles.pollInfo}>
                <p className={styles.title} style={{ fontSize: "14px", fontWeight: "500" }}>Poll Settings</p>
                <p className={styles.title}>Option1</p>
                <Input clearable width="100%" placeholder="" className="inputK" aria-label="option" />
                <p className={styles.title}>Option2</p>
                <Input clearable width="100%" placeholder="" className="inputK" aria-label="option" />
                <div className={`${styles.title} ${"addIcon"}`} style={{ justifyContent: "flex-end" }}>Add Poll option <div className="addBut"><img src="/images/icon/add.svg"></img></div></div>
                <p className={styles.title} style={{ fontSize: "14px", fontWeight: "500" }}>Poll Length</p>
                <div className="justify_space_between">
                  <Input label="Days" clearable placeholder="0" className="inputK" aria-label="days" />
                  <Input label="Hours" clearable placeholder="0" className="inputK" aria-label="hours" />
                  <Input label="Minutes" clearable placeholder="0" className="inputK" aria-label="minutes" />
                </div>
                <Button className={styles.removeBut}>Remove Poll</Button>
              </div>) : null
              }

              <Button auto className="greenButton" style={{
                marginTop: "10px",
                marginLeft: "calc(100% - 80px)"
              }}>Submit</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="helpForNovices" onClick={helpForNovices.bind(this)}>?</div>
    </Layout >
  )
}
