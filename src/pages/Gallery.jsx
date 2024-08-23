import { useTitle } from "../hooks/useTitle"

export const Gallery = () => {
  useTitle("Gallery");

  return (
    <div className="py-32">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mx-8 mt-4">
        {["img46-1.jpg", "img30-1.jpg", "img20-1.jpg", "img19-1.jpg", "img3-1.jpg", "img10-1.jpg", "img10-1.jpg", "img11-1.jpg", "img2-1.jpg", "img7-1.jpg"].map((imgSrc, index) => (
          <div key={index} className="w-full h-48 md:h-60">
            <img className="h-full w-full object-cover rounded-lg" src={`/assets/images/${imgSrc}`} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
