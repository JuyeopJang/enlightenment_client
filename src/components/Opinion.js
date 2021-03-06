import React from 'react';
import axios from 'axios';
import '../styles/Opinions.css'
import { AiFillAlert, AiTwotoneLike } from 'react-icons/ai';
import { MdInsertEmoticon } from "react-icons/md";


const Opinion = ({ comment, ban, number, like }) => {
    const smileIcon = <MdInsertEmoticon />
    let className = '';
    let nickName = '';
    if (!like) {
        if (number === 1 || number === 22 || number === 55) {
            nickName = 'π SPECIAL';
            className = 'opinions special';
        } else {
            if (number % 10 === 0) {
                nickName = 'π λλν μλ―Όλ';
                className = 'opinions yellow';
            } else if (number % 2 === 0) {
                nickName = 'π λμ² ν μλ―Όλ';
                className = 'opinions blue';
            } else if (number % 10 === 3) {
                nickName = 'π€ νλͺν μλ―Όλ';
                className = 'opinions red';
            } else if (number % 10 === 5) {
                nickName = 'π€ νλ₯­ν μλ―Όλ';
                className = 'opinions orange';
            } else {
                nickName = 'π§ λλν μλ―Όλ';
                className = 'opinions purple';
            }
        }
    } else {
        if (like < 10) {
            nickName = 'π κ΄μ¬λ°λ μκ²¬';
            className = 'opinions fivelike';
        } else {
            nickName = 'π€ HOT OPINION';
            className = 'opinions tenlike';
        }
    }

    const ec2Url = 'https://server.yonyeosuk.link';
    const handleReportBtn = () => {
        const config = {
            method: 'put',
            url: `${ec2Url}/comment/${number}/ban`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "commentId": number,
            })
        };

        axios(config)
            .then(response => {
                alert('μ κ³ λμμ΅λλ€');
            })
            .catch(error => {
                console.log(error);
                alert('μ κ³ λμ μ΄ μ΄κ³Όλμμ΅λλ€');
            })
    }

    const handleLikeBtn = () => {
        const config = {
            method: 'put',
            url: `${ec2Url}/comment/${number}/like`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "commentId": number,
            })
        };

        axios(config)
            .then(response => {
                return response
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            {ban < 5 ?
                <div className={className}>
                    <div className="comment-head">
                        <div className="comment-nickname-box">
                            <p className="comment-nickname">{nickName}</p>
                        </div>
                        <div className="coment-like-box">
                            <div className="like-count">
                                <p className="comment-like">{like}</p>
                            </div>
                            <AiTwotoneLike className="reportImg report" onClick={handleLikeBtn} />
                            <AiFillAlert className="reportImg like" title="μ κ³ νκΈ°" onClick={handleReportBtn} />
                        </div>
                    </div>
                    <div className="anooComment-box">
                    <p className="anooComment">{comment}</p>
                    </div>
                </div > : null}
        </>
    );
};

export default Opinion;