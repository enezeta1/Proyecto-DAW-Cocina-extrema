import Portada from "../../img/img_home/portada_cocina.jpg";

export const Slider = () => {
    return (
        <div id="slider" className="mb-32 carousel slide w-full h-screen flex" data-ride="carousel">
            <div className="carousel-inner w-full h-full">
                <div className="carousel-item active w-full h-full">
                    <img src={Portada} className="d-block w-full h-full object-cover" alt="Imagen del slider" />
                </div>
            </div>
        </div>
    );
};
