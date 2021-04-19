import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import '../styles/Opinions.css';
import Opinion from '../components/Opinion';
import { loadComments, sortComments } from '../actions';
import { AiFillAlert } from 'react-icons/ai';
import { BiSort } from 'react-icons/bi';
import { AiOutlineUp } from 'react-icons/ai';

const Opinions = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.opinionReducer);
    const { comments } = state;
    const [sortValue, setSortValue] = useState('최신등록순');
    const [valueLength, setValueLength] = useState(0);
    const [newComment, setNewComment] = useState('');
    const inputRef = useRef(false);

    useEffect(() => {
        if (sortValue === "최신등록순") {
            fetch('http://localhost:5000/comments')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    dispatch(loadComments(data.comments.reverse()));
                    console.log('data.comments : ', data.comments);
                })
        } else {
            fetch('http://localhost:5000/comments')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    dispatch(sortComments(data.comments));
                    console.log('data.comments : ', data.comments);
                })
        }

    }, [newComment, sortValue]);

    const clickCommentBtn = () => {
        if (inputRef.current.value.length < 10) {
            alert('10글자 이상 입력해주세요');
            return;
        }

        setNewComment(inputRef.current.value);
        const config = {
            method: 'post',
            url: 'http://localhost:5000/comment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "comment": inputRef.current.value,
            })
        };

        axios(config)
            .then(response => {
                console.log(response);
                setNewComment(inputRef.current.value);
            })
            .catch(error => {
                console.log(error);
            })
        inputRef.current.value = null;
        inputRef.current.placeholder = '10글자 이상 100글자 이하로 의견을 남겨주세요';
        alert('등록되었습니다');
    };

    const handleInputComment = (e) => {
        const inputLength = e.target.value.length;
        // setInputValue(e.target.value);
        setValueLength(inputLength);

        if (inputLength > 100) {
            return false;
        } else if (inputLength <= 100) {
            return e.target.value;
        }
    }

    const handleCommentSort = () => {
        setSortValue(sortValue === "최신등록순" ? "좋아요순" : "최신등록순");
        upToScroll();
        console.log(sortValue);

    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            clickCommentBtn();
        }
    }

    const upToScroll = () => {
        window.scrollTo(0, 0);
    }

    const reportIcon = <AiFillAlert />;
    const sortIcon = <BiSort />;

    return (
        <div className="opinion-wrap">
            <div className="write-box-wrap">
                <div className="election-name">
                    당신의 의견
                </div>
                <textarea type="text" ref={inputRef} onKeyPress={handleKeyPress} onChange={handleInputComment} placeholder="10글자 이상 100글자 이하로 의견을 남겨주세요" />
                {valueLength > 100 ?
                    <p className="input-length-over">{valueLength}/100</p> :
                    <p className="input-length">{valueLength}/100</p>
                }
                <p className="report-notice">불건전한 내용은 {reportIcon}을 눌러 신고해주세요</p>
                <button onClick={clickCommentBtn}>등록</button>
            </div>
            <div className="amount-notice">
                현재 {comments.length}개의 의견이 있습니다
            </div>
            <div className="comment-sort" onClick={handleCommentSort}>
                {sortIcon} {sortValue}
            </div>
            <div className="opinion-line">
                {comments.length === 0 ? <Opinion key={1} comment={'첫번째 의견을 남겨주세요!'} ban={0} number={1} /> :
                    comments.map((child, index) => {
                        return <Opinion key={index} comment={child.comment} ban={child.ban} number={child.id} like={child.like} />
                    })
                }
            </div>
            <AiOutlineUp className="uptoscroolIcon" onClick={upToScroll} />
        </div>
    );
};

export default Opinions;