import { useParams } from "react-router-dom"
function SchoolDetails(){
    const {schools}=useParams()
    return (
            <div>
                Details about {schools}
            </div>
    )
}
export default SchoolDetails