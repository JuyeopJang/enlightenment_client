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
            nickName = '😇 SPECIAL';
            className = 'opinions special';
        } else {
            if (number % 10 === 0) {
                nickName = '😎 똑똑한 시민님';
                className = 'opinions yellow';
            } else if (number % 2 === 0) {
                nickName = '😃 냉철한 시민님';
                className = 'opinions blue';
            } else if (number % 10 === 3) {
                nickName = '🤔 현명한 시민님';
                className = 'opinions red';
            } else if (number % 10 === 5) {
                nickName = '🤗 훌륭한 시민님';
                className = 'opinions orange';
            } else {
                nickName = '🧐 똑똑한 시민님';
                className = 'opinions purple';
            }
        }
    } else {
        if (like < 10) {
            nickName = '😇 관심받는 의견';
            className = 'opinions fivelike';
        } else {
            nickName = '🤍 HOT OPINION';
            className = 'opinions tenlike';
        }
    }

    const ec2Url = 'http://ec2-3-34-52-239.ap-northeast-2.compute.amazonaws.com:5000';
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
                alert('신고되었습니다');
            })
            .catch(error => {
                console.log(error);
                alert('신고누적이 초과되었습니다');
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
                            <AiFillAlert className="reportImg like" title="신고하기" onClick={handleReportBtn} />
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