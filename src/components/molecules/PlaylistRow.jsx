import styled from "styled-components";
import PlayListPicture from "../atoms/PlaylistPicture";

const PlayListRowStyle = styled.div`
    display:flex;
    color:white;
    background: ${ props => props?.i % 2 ?  'rgba(255,255,255, .05)' :'transparent'};
    align-items:center;
    gap: 5%;

` 
const PlaylistTitleStyle = styled.p`
font-size: 1.1em;
`

const PlayListRow = ({item, i}) => {
    console.log(item)
    return (
        <PlayListRowStyle i={i}>
            <PlayListPicture src={item?.picture?.custom?.url}></PlayListPicture>
                 <PlaylistTitleStyle>
                        <p>
                            {item.name.length > 28 ? item.name.slice(0,28) + '...' : item.name}
                        </p>
                    </PlaylistTitleStyle>
        </PlayListRowStyle>
    );
}

export default PlayListRow;