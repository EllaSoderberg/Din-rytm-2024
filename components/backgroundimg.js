import Image from "next/image"

export const BackgroundImg = (props) => {
    return (
        <div>
            <Image
                className="z-0 top-0 absolute inset-x w-full h-full bg-center bg-cover"
                src={props.src}
                alt="Bakgrund"
                style={{
                    objectFit: 'cover',
                }}
            />
            <span className="w-full h-full absolute opacity-50 bg-green-500"></span>
        </div>
    );
}