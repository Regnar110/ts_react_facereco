import React from "react"
import { RankProps } from "../../Interfaces/Rank/Rank"

const Rank = ({rank, name}:RankProps) => {
    return(
        <div>
            <div className="white f3">
                {`${name}, your current rank is...`}
            </div>
            <div className="white f1">
                {`#${rank}`}
            </div>
        </div>
    )
}

export default Rank