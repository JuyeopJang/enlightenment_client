import React from 'react';
// const axios = require('axios')
const url = 'http://apis.data.go.kr/9760000/CommonCodeService/getCommonSgCodeList'
// ?ServiceKey=DwfAEkeC%2Fh4aIBbrbIGC4yt5o1820Djh1CaEBL4HPkLAzDMpup52Kirc5mrVsAb9iVc5h5Y92URldehUzSGz9Q%3D%3D
const key = 'DwfAEkeC%2Fh4aIBbrbIGC4yt5o1820Djh1CaEBL4HPkLAzDMpup52Kirc5mrVsAb9iVc5h5Y92URldehUzSGz9Q%3D%3D'


// router.get('/', (req, res) => {  res.writeHead(200, { 'Access-Control-Allow-Origin': '*' }) });

const Promise = () => {
    // const getSgCode = async () => {
    //     const dataUrl = `${url}?ServiceKey=${key}`
    //     await fetch(dataUrl, {
    //         method: 'GET',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //         })
        
    // }
    
    
    return (
        <div className="promise">
            <h1 onClick={getSgCode}>Promise</h1>
        </div>
    );
};

export default Promise;