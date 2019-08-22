import React from "react";

export const OutgoingMessages = ({question})=>(
    <div className="outgoing_msg">
        <div className="outgoing_msg_img">
            <img src="jot_pencil.png" alt="pencil"/>
        </div>
            <div className="sent_msg">
                <p>
                    {question}?
                    <input type="button"value="Yes"/>
                    <input type="button"value="No"/>
                    </p>
                <span className="time_date"> 11:01 AM | June 9</span>
            </div>
    </div>
)
