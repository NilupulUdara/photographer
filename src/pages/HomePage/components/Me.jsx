import photographer from "/assets/images/photographer.jpg"

export const Me = () => {
    return (
        <div className="grid grid-cols-2 gap-2 justify-items-end px-4 m-4">
            <div className="m-8 ">
                <p className="text-right text-xl font-Roboto leading-10">Hi, I’m</p>
                <p className="text-right text-2xl font-Roboto font-bold">Ryan Rodriguez</p>
                <img className="min-h-64 max-w-full rounded-lg py-8" src={photographer} alt="" />
            </div>
            <div className="text-left m-8 text-xl font-Roboto leading-10">
                Photography is the science, art, application and practice of creating durable images by
                recording light or other electromagnetic radiation, either electronically by means of an
                image sensor, or chemically by means of a light-sensitive material such as photographic film.
            </div>
        </div>

    )
}
