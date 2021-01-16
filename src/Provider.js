import React, {useState} from "react";
import PackageManager from "./Context";


const Provider = props => {

    const [mission, setMission] = useState({
        mname: "Go To Russia",
        agent: 7,
        accept: "Not Accepted"
    });

    return (
        <PackageManager.Provider
        value={{
            data:mission,
            isMissionAccepted: () => {
                setMission({...mission, accept: "ACCEPTED"});
            }
        }}
        >
            {props.children}
        </PackageManager.Provider>
    );
};
export default Provider;