import idPhoto from "../../../assets/id_photo.png";

export default function ImageContainer() {
    return (
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg"
            style={{ boxShadow: "0 0 0 4px #fff, 0 8px 24px -4px rgba(74,64,224,0.15)" }}
        >
            <img
                src={idPhoto}
                alt="Russel Cabigquez"
                className="w-full h-full object-cover"
            />
        </div>
    );
}
