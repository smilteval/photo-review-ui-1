import React from 'react'
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import SpecsButton from './SpecsButton';

class PhotoHeader extends React.Component {
    render() {
        return (
            <div className="photoHeader" style={{ padding: "30px" }}>
                <div>
                    <h1>Photo Title</h1>
                </div>
                <div>
                    <h5>Taken by: username</h5>
                </div>
                <div style={{ display: "flex" }}>
                    <ScheduleIcon style={{ paddingRight: "5px" }} />
                    <p>mm/dd/yyyy</p>
                    <LocationOnIcon style={{ paddingLeft: "5px" }} />
                    <p>Some location here </p>
                </div>

                <SpecsButton />
            </div>
        )
    }
}

export default PhotoHeader