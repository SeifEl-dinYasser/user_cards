import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProfileCard(props) {

    //Functions Block

    return (
        <div class="card" style={{ backgroundColor: "#6495ED70" }}>
            
            <img src={props.userData.image} class="card-img-top" alt="..." />
            
            <div class="card-body">
                <h3 class="card-title" style={{ display: "inline-block", marginRight: "80px" }}>{props.userData.username}</h3>
            
                {props.userData.is_verified ? <FontAwesomeIcon icon={faStar} style={{ color: "green" }} /> : <FontAwesomeIcon icon={faStar} style={{ color: "red" }} />}
            
                <h5 class="card-title">{props.userData.email}</h5>
            
                <h5 class="card-title">{props.userData.phone}</h5>
            </div>

        </div>
    )
}
export default ProfileCard