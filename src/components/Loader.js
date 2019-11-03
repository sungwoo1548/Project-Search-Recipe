import React from 'react';
import GifImg from '../images/lion_jumping.gif'; // 파일에서 불러오기.

const Loader = (props) => {

    return (
        <>
            <h1>백수를 부탁해!</h1>
            {/* <img src="https://media.giphy.com/media/ZErIZUFAxhx9Ryvdd8/source.gif" alt="this slowpoke moves" width="250" /> */}
            <img src={GifImg} alt="gogo" width="50%" />
            <h1>Loading</h1>
        </>

    )
}

export default Loader
