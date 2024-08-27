import photographer4 from "/assets/images/photographer4.jpg";
import { useTitle } from "../hooks/useTitle";

export const About = () => {
  useTitle("About");
  
  return (
    <div className="grid grid-cols-2 gap-2 justify-items-stretch py-16 px-8 font-robotoslab">
      <div>
        <div className="font-Roboto font-bold text-4xl py-8 leading-10">About Me</div>
        A professional photographer may be an employee, for example of a newspaper, or may contract to cover a
        particular planned event such as a wedding or graduation, or to illustrate an advertisement. Others, like
        fine art photographers, are freelancers, first making an image and then licensing or making printed copies
        of it for sale or display. Some workers, such as crime scene photographers, estate agents, journalists and
        scientists, make photographs as part of other work. Photographers who produce moving rather than still
        pictures are often called cinematographers, videographers or camera operators, depending on the commercial
        context.
        <p className="py-4 font-greyQo text-4xl">Ryan Rodriguez</p>
        <div className="grid grid-cols-4 gap-10 py-8">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-amber-500 dark:text-white hover:bg-black hover:bg-black hover:scale-90 transition-transform duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" clipRule="evenodd" />
            </svg>
            <span className="pl-4">Modeling</span>
          </div>
          <div className="flex items-center">
            <svg className="w-8 h-8 text-amber-500 dark:text-white hover:bg-black hover:bg-black hover:scale-90 transition-transform duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M14 7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7Zm2 9.387 4.684 1.562A1 1 0 0 0 22 17V7a1 1 0 0 0-1.316-.949L16 7.613v8.774Z" clipRule="evenodd" />
            </svg>
            <span className="pl-4">Industrial</span>
          </div>
          <div className="flex items-center">
            <svg className="w-8 h-8 text-amber-500 dark:text-white hover:bg-black hover:scale-90 transition-transform duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z" clipRule="evenodd" />
            </svg>
            <span className="pl-4">Editing</span>
          </div>
        </div>
      </div>
      <div>
        <img className="h-full max-w-full sm:w-full sm:h-3/4 rounded-lg" src={photographer4} alt="" />
      </div>
    </div>
  )
}
