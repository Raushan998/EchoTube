import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const LogOut = ({setToken}) => {
  const navigate = useNavigate()
  const removeUser = async ()=>{
    try{
        const response = await fetch(
            "/logout",{
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("authToken")
               }
            }
        )
        if(!response.ok){
            throw new Error("Request Invalid")
        }
        const data = await response.json()
        localStorage.removeItem("authToken")
        setToken("")
        navigate("/")
    }catch(error){
        console.log(error)
    }
    
  }
  return (
    <button
      style={{
        borderRadius: "12px",
        color: "#fff",
        backgroundColor: "gray",
        border: "none",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        fontWeight: "bold",
        boxShadow: "0 8px 15px rgba(0, 123, 255, 0.3)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textTransform: "uppercase"
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#007bff";
        e.target.style.boxShadow = "0 12px 20px rgba(0, 123, 255, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "linear-gradient(135deg, #1e90ff, #00bfff)";
        e.target.style.boxShadow = "0 8px 15px rgba(0, 123, 255, 0.3)";
      }}
      onClick={()=>{
        removeUser()
      }}
    >
      <FontAwesomeIcon
        icon={faArrowRightToBracket}
        style={{ marginRight: "8px", fontSize: "20px" }}
      />
      signOut
    </button>
  );
};

export default LogOut;
