// import React, { useState } from 'react';
// //import UploadImages from './UploadImages';

// export default props => {
//     const { initialImg, onSubmitProp } = props;
//     console.log("LOGGING THE ON SUBMIT PROP", onSubmitProp);

//     const [image, setImage] = useState(initialImg);

//     //const [errors, setErrors] = useState([]);

//     const onSubmitHandler = e => {
//         console.log('YOU ARE IN THE onSubmitHandler!!!!')
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.addEventListener("load", () => {
//         this.image.onUpload(reader.result);
//         }, false);
//         if (file) {
//             reader.readAsDataURL(file);
//             onSubmitProp({ file });
//         }
//     }
        
//     return (
//         <div>
//             <form onSubmit={ onSubmitHandler }>
//                 <input type="file" onChange={(e) => setImage(e.target.value)} value={image} />
//                 <input type="submit"  />
//             </form>
//         </div>
//     )
// }

