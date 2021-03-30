
import {Circle} from "better-react-spinkit"

function Loading() {
    return (
        <center  style={{display:"grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img src= "https://www.transparentpng.com/thumb/whatsapp/zffspR-whatsapp-transparent-picture.png"
                alt=""
                style={
                    {
                       marginBottom: 10
                    }
                }
                height={200} > 
                </img>
                <Circle color="#3CBC28" size={60}/>
            </div>
        </center>
    )
}

export default Loading
