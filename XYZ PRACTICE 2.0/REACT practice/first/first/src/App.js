import "./style.css"
import Button from "./Button";

const app = () => {
    return (
        <>
        <h1 style={{color:"red", textAlign:"center"}}> hello testing! <br></br>
            finally
        </h1>
        <h2 className="check">Its me kiran <br></br> Its my first react app </h2>
        {/* <button className="btn">DON'T CLICK ON ME</button> */}
        <Button title={"Don't click on me"}/>
        <Button title={"Don't hover on me"}/>
        </>
    );
    
}
export default app;