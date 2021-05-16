import React from 'react';
import PropTypes from 'prop-types';
const Profile =({fullName, bio, profession,handleName,children})=>{
    
    
    return(
        <div style={{width:'700px',height:'500px',textAlign:'center',marginTop:'30px',backgroundColor:'khaki',boxShadow:'0px 1px 10px 1px gray',fontFamily:'cursive'}}>
            <button onClick={()=>handleName(fullName)}>Click</button>
            <h2 style={{color:'brown'}}> {fullName}</h2>
            <div> {children}</div>
            <p> {bio}</p>
            <p style={{fontWeight:'bold',fontStyle:'italic'}}>{profession}</p>
        </div>
    )
}
Profile.defaultProps={fullName:"Dhekra Nsir", bio:"I am a 29-year-old married woman. I live in Dar Chaabane,Nabeul,Tunisia.I studied Agronomy studies at ISA Sousse where I graduated as an engineer.",
profession:"Ingenieur agronome"}
Profile.propTypes = {
    fullName: PropTypes.string,
    bio:PropTypes.string,
    handleName: PropTypes.func,
    profession:PropTypes.string,
    children:PropTypes.element.isRequired,
}
export default Profile;
