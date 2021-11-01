import React from 'react'
import Pic from "../pic1.png"
import "../Components/Home.css"
const Home = () => {
    return (
        <div style={{background:"black"}} >
            <div  className="homepage" >
                 <div className="card-div">
                     <div className="card-top">
                             <div id="main-uppr-div">
                                 <div id="time-div">
                                     <div  style={{textAlign:"center"}}>
                                      <div style={{fontSize:"35px",fontWeight:'bolder'}}>08</div>
                                      <div style={{fontSize:'12px',color:"#DE5846",fontWeight:'bolder'}} >Days</div>
                                     </div>
                                     <div>
                                            <label style={{fontSize:'35px',fontWeight:"bolder",display:'flex',transform:'translateY(-10px)',margin:"10px"}} > &#58; </label>
                                     </div>
                                 </div>
                                 <div id="time-div">
                                     <div  style={{textAlign:"center"}}>
                                      <div style={{fontSize:"35px",fontWeight:'bolder'}}>46</div>
                                      <div style={{fontSize:'12px',color:"#DE5846",fontWeight:'bolder'}} >Hours</div>
                                     </div>
                                     <div>
                                            <label style={{fontSize:'35px',fontWeight:"bolder",display:'flex',transform:'translateY(-10px)',margin:"10px"}} > &#58; </label>
                                     </div>
                                 </div>
                                 <div id="time-div">
                                     <div  style={{textAlign:"center"}}>
                                      <div style={{fontSize:"35px",fontWeight:'bolder'}}>35</div>
                                      <div style={{fontSize:'12px',color:"#DE5846",fontWeight:'bolder'}} >Mins</div>
                                     </div>
                                     <div>
                                            <label style={{fontSize:'35px',fontWeight:"bolder",display:'flex',transform:'translateY(-10px)',margin:"10px"}} > &#58; </label>
                                     </div>
                                 </div>
                                 <div id="time-div">
                                     <div  style={{textAlign:"center"}}>
                                      <div style={{fontSize:"35px",fontWeight:'bolder'}}>25</div>
                                      <div style={{fontSize:'12px',color:"#DE5846",fontWeight:'bolder'}} >Sec</div>
                                     </div>
                                    
                                 </div>
                             </div>
                             <div className="card-text">
                            <div style={{display:"flex",justifyContent:'center'}}>
                          <input style={{textAlign:"right",width:"250px",margin:"15px",borderRadius:"5px",padding:"10px 5px",fontWeight:"bolder",background:'#3C4249',border:"1px solid #637282"}} placeholder="max-1 | Free + Gas" />
                            </div>
                            <div style={{textAlign:"center"}}>
                           <label><span style={{color:'#A5ADB9',fontWeight:"bolder",fontSize:'18px'}}>Available:</span> <span style={{color:"white",fontWeight:"bolder",fontSize:'18px'}} >860</span> <span style={{color:'#A5ADB9',fontWeight:"bolder",fontSize:'18px'}} >of</span> <span style={{color:"white",fontWeight:"bolder",fontSize:'18px'}} >860</span></label>

                            </div>
                            <div style={{textAlign:"center",marginTop:'40px'}} >
                                <button id="claim" ><a>Claim</a></button>
                            </div>
                 </div>
                     </div>
                 </div>
                 <div id="whitelist" >
                    <div id="wlist">

                        <div style={{marginRight:"10px"}}>
                           <img src={Pic}/>   
                        </div>
                        <div style={{color:"#A5ADB9"}}>
                        You must be on the whitelist to claim
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Home
