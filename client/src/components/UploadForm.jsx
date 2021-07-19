import React, { useState } from 'react';
import UploadImages from './UploadImages';

const UploadForm = (props) => {
    const { initialImg, onUploadProp } = props;
    
    const [image, setImage ] = useState(initialImg);

    const [errors, setErrors] = useState([]);

    const onUploadHandler = e => {
        console.log('YOU ARE IN THE onUploadHandler!!!!')
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
        this.image.onUpload(reader.result);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
        
    }
        
    return (
        <div>
            <form onSubmit={ onUploadHandler }>
                <input type="file" onChange={(e) => setImage(e.target.value)} value={image} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default UploadForm
