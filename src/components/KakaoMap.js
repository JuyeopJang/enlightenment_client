// /*global kakao*/
// import React, { useEffect, useState, useRef } from 'react';
// const KakaoMap = props => {
//     const { markerPositions, size } = props;
//     console.log('markerPositions::: ', markerPositions);
//     console.log('size::: ', size);
//     const [kakaoMap, setKakaoMap] = useState(null);
//     const [, setMarkers] = useState([]);
//     const container = useRef();
    
//     useEffect(() => {
//         const center = new kakao.maps.LatLng(37.50802, 127.062835);
//         const options = {
//             center,
//             level: 3
//         };
//         const map = new kakao.maps.Map(container.current, options);
//         setKakaoMap(map)
//     }, [container])
   
//     useEffect(() => {
//       if (kakaoMap === null){
//         return;
//       }
//       const center = kakaoMap.getCenter();
//       const [width, height] = size;
//       container.current.style.width = `${width}px`;
//       container.current.style.height = `${height}px`;
//       kakaoMap.relayout();
//       kakaoMap.setCenter(center); 
//     }, [kakaoMap, size]);

//     useEffect(() => {
//       if (kakaoMap === null) {
//         return;
//       }
//       const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));
//       console.log('positions::: ', positions);
//       setMarkers(markers => {
//         // clear prev markers
//         markers.forEach(marker => marker.setMap(null));
//         // assign new markers
//         return positions.map(
//           position => new kakao.maps.Marker({ map: kakaoMap, position })
//         );
//       });
    
//       if (positions.length > 0) {
//         const bounds = positions.reduce(
//           (bounds, latlng) => bounds.extend(latlng),
//           new kakao.maps.LatLngBounds()
//         );
//         kakaoMap.setBounds(bounds);
//       }
//     }, [kakaoMap, markerPositions]);

//     return <div id="container" ref={container} />
    
// }

// export default KakaoMap;


/*global kakao*/
import React, { useEffect, useState, useRef } from "react";

export default function KakaoMap(props) {
  const { markerPositions, size } = props;
  const [kakaoMap, setKakaoMap] = useState(null);
  const [, setMarkers] = useState([]);

  const container = useRef();

  useEffect(() => {
    const center = new kakao.maps.LatLng(37.50802, 127.062835);
    const options = {
      center,
      level: 3
    };
    const map = new kakao.maps.Map(container.current, options);

    setKakaoMap(map);
  }, [container]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    // save center position
    const center = kakaoMap.getCenter();

    // change viewport size
    const [width, height] = size;
    container.current.style.width = `${width}px`;
    container.current.style.height = `${height}px`;

    // relayout and...
    kakaoMap.relayout();
    // restore
    kakaoMap.setCenter(center);
  }, [kakaoMap, size]);

  useEffect(() => {
    if (kakaoMap === null) {
      return;
    }

    const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));
    // console.log('positions::: ', positions);
    setMarkers(markers => {
      // clear prev markers
      markers.forEach(marker => marker.setMap(null));

      // assign new markers
      return positions.map(
        position => new kakao.maps.Marker({ map: kakaoMap, position })
      );
    });

    if (positions.length > 0) {
      const bounds = positions.reduce(
        (bounds, latlng) => bounds.extend(latlng),
        new kakao.maps.LatLngBounds()
      );

      kakaoMap.setBounds(bounds);
    }
  }, [kakaoMap, markerPositions]);

  return <div id="container" ref={container} />;
}
