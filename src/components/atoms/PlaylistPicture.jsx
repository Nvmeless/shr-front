import styled from "styled-components";

const PlayListPictureContainerStyle = styled.div`
    width:20vw;
    maxWidth:20vw;
    
` 


const PlayListPicture = ({src}) => {
                //     width:"100vw",
                //     listStyle:'none',
                //     backgroundColor: i % 2 ?  'rgba(255,255,255, .05)' :'transparent',
                //     display:'flex'
    return (
        <PlayListPictureContainerStyle>
        <img 
            style={
                {
                    width: "inherit",
                    height:"inherit",
                    borderRadius:"10px"
                    }} 
            src={src}/>
        </PlayListPictureContainerStyle>
    );
}

export default PlayListPicture;