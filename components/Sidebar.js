import {Avatar, IconButton,Button}  from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVert from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
import * as EmailValidator from "email-validator";
import {useAuthState} from "react-firebase-hooks/auth"
import {useCollection} from "react-firebase-hooks/firestore"
import {auth, db} from "../firebase"

function Sidebar() {

    const [user] = useAuthState(auth)
    const userChatRef = db.collection('chats').where('users', 'array-contains', user.email)

        const createChat = () => {
            const input = prompt(
               "Please enter an email address for the user you wish to chat with"
            )

            if(!input) 
            return null;

            if(EmailValidator.validate(input) && input !== user.email){
                db.collection('chats').add({
                    users:[user.email,input],
                })
            }
        };

    return (
        <Container>
            <Header>
                <UserAvatar />
                <IconsContainer>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVert />
                    </IconButton>
                </IconsContainer>

            </Header>
            <Search >
                <IconButton>
                    <SearchIcon/>
                </IconButton>
                <SearchInput  placeholder="Search in Chats " />
            </Search>
            <SidebarButton onClick={createChat} >Start A New Chart</SidebarButton>
            
        </Container>
    )
}

export default Sidebar


const Container = styled.div``;
const Header = styled.div`
display: flex;
position:sticky;
top:0;
background-color: white;
z-index:1;
justify-content: space-between;
align-items:center;
padding:15px;
height:80px;
border-bottom:1px solid whitesmoke;
`;

const SearchInput = styled.input`
outline-width:0;
border:none;
flex:1;

`;
const IconsContainer = styled.div``;
const UserAvatar = styled(Avatar)`
cursor:pointer;
:hover {
    opacity :0.8
}
`;
const Search = styled.div`
display: flex;
align-items: center;
padding: 20px;
border-radius:2px;
`;

const SidebarButton = styled(Button)`
width: 100%;

&&&{
    border-top:1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
}
`
