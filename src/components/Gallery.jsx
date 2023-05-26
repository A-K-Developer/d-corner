import { galleryImg } from "../utils/constants"

const Gallery = () => {

    return (<div className="galery">


        <img src={galleryImg.firstImg} alt="first" />
        <img src={galleryImg.designEleLogo} alt="first" />
        <img src={galleryImg.secondImg} alt="sec" />
        <img src={galleryImg.thirdImg} alt="thirdImg" />
        <img src={galleryImg.forthImg} alt="forthImg" />
        <img src={galleryImg.fifthImg} alt="forthImg" />


    </div>)
}

export default Gallery
