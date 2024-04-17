import Image from 'next/image'
import spiralingStairs from "@/public/img/SpiralingStairs.jpg"

function NotFoundPage() {
    return (
        <div className="z-0 top-0 left-0 h-screen bg-green-500">
            <Image
                src={spiralingStairs}
                alt="Trappor ned i avgrunden"
                fill
                style={{
                    objectFit: 'cover',
                }}>
            </Image>
            <div className="w-full absolute left-0 text-center top-1/2">
                <h2 className="text-white text-4xl font-bo
                ld my-8 p-3 text-center">
                    Ojdå, sidan hittades inte!
                </h2>
            </div>
        </div>
    );
}

export default NotFoundPage;