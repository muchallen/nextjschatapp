import styled from 'styled-components'
import {Avatar, IconButton} from "@material-ui/core"
import ChatIcon from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'



function Sidebar(){
    return  (
        <Container>
           <Header>
               <UserAvatar/>
               <IconsContainer>
                <IconButton>
                    <ChatIcon />
                </IconButton>
            
                <MoreVert />

            </IconsContainer>
            </Header>

            

        </Container>
    )
}

export default Sidebar;

const Container = styled.div`

`;

const Header = styled.div`
display: flex;
position: sticky;
top:0;
background-color:white;
z-index: 1;
justify-content: space-between;
align-items: center;
padding: 15px;
height: 80px;
border-bottom: 1px solid whitesmoke;


`;

//sadasdasda
 
const UserAvatar = styled(Avatar)`
`;

const IconsContainer = styled.div``;

