import React from 'react'
import PhotoForm from "../components/uploadPhoto/PhotoForm"
import Container from '@material-ui/core/Container'
import UploadNavBar from '../components/uploadPhoto/UploadNavBar'

class UploadPhoto extends React.Component {
    render() {
        return (
            <>
                <UploadNavBar/>
                <Container maxWidth="sm">
                    <div>
                    <PhotoForm/>
                    </div>
                </Container>
            </>
        )
    }
}

export default UploadPhoto