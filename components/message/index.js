// import { Tips } from './Tips';
import ReactDOM from 'react-dom/client'
import { useState } from 'react';

const dom = null;
const message = {
    success({ content, duration }) {
        this.dom = document.createElement('div');
        const JSXdom = (<Message content={content} duration={duration} type='success'></Message>);
        ReactDOM.createRoot(
            this.dom
        ).render(JSXdom);
        document.body.appendChild(this.dom);
    },
    error({ content, duration }) {
        this.dom = document.createElement('div');
        const JSXdom = (<Message content={content} duration={duration} type='error'></Message>);
        ReactDOM.createRoot(
            this.dom
        ).render(JSXdom);
        document.body.appendChild(this.dom);
    },
    warning({ content, duration }) {
        this.dom = document.createElement('div');
        const JSXdom = (<Message content={content} duration={duration} type='warning'></Message>);
        ReactDOM.createRoot(
            this.dom
        ).render(JSXdom);
        document.body.appendChild(this.dom);
    },
    info({ content, duration }) {
        this.dom = document.createElement('div');
        const JSXdom = (<Message content={content} duration={duration} type='info'></Message>);
        ReactDOM.createRoot(
            this.dom
        ).render(JSXdom);
        document.body.appendChild(this.dom);
    }
};

function Message(props) {
    const { content, duration, type } = { ...props };
    // 开关控制：默认true,调用时会直接打开
    const [open, setOpen] = useState(true);
    // 关闭消息提示
    const handleClose = (event) => {
        setOpen(false);
    };
    setTimeout(() => {
        setOpen(false);
    }, duration);
    return <div className="messageTips">
        {
            open ? (
                <div className={type}>
                    <div className="justify_align_center">
                        {
                            type === "info"
                                ?
                                <img src='/images/icon/info.svg' />
                                :
                                null
                        }
                        {
                            type === "success"
                                ?
                                <img src='/images/icon/success.svg' />
                                :
                                null
                        }
                        {
                            type === "warning"
                                ?
                                <img src='/images/icon/warning.svg' />
                                :
                                null
                        }
                        {
                            type === "error"
                                ?
                                <img src='/images/icon/error.svg' />
                                :
                                null
                        }
                        <p>{content}</p>
                    </div>
                    <span onClick={handleClose.bind(this)}><img src='/images/icon/close.svg'/></span>
                </div>
            ) : null
        }
    </div>
}

export default message;