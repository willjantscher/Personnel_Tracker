import react from "React";

class OPR_EPR_Tracker extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }



    render(){
        return(
            <div>
                <ol>
                    <PersonListItem />
                </ol>
            </div>
        )
    }
}

export default OPR_EPR_Tracker;