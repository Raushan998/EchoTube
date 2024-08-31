import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons'; 
import { faUserCircle, faBars, faSearch} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const HeaderComponent = ({ setSearchTxt }) => {
    const [searchVal, setSearchVal] = useState("");

    return (
        <div className="d-flex justify-content-between align-items-center p-3">
            <button
                className="btn btn-light"
                style={{
                    border: 'none',
                    background: 'none',
                    fontSize: '24px',
                    cursor: 'pointer'
                }}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="d-flex flex-grow-1 justify-content-center mt-4">
                <div className="input-group mb-3" style={{ maxWidth: "90vh" }}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        aria-label="Search"
                        value={searchVal}
                        onChange={(event) => setSearchVal(event.target.value)}
                    />
                    <button
                        className="btn btn-light"
                        style={{
                            border: '1px solid #333',
                            background: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            borderRadius: "0 1rem 1rem 0",
                            backgroundColor: "#f0f0f0"
                        }}
                        onClick={() => setSearchTxt(searchVal)}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className="d-flex align-items-center">
                <div className="mr-3" style={{marginRight: "30px"}}>
                    <FontAwesomeIcon icon={faBell} style={{ fontSize: "30px" }} />
                </div>
                <Link to="login">
                    <button
                        className="btn btn-secondary rounded-circle"
                        style={{ width: "40px", height: "40px", marginRight: "30px", display: "flex", alignItems: "center", justifyContent: "center"}}
                    >
                        <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: "20px" }} />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HeaderComponent;
