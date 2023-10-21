import Image from "next/image";

export default function AppStore({ icon, title, text, url, className }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex bg-black w-72 px-4 py-2 rounded-xl border-header border-[2px] ${className}`}
    >
      <Image src={icon} alt={title} className="w-[30%] h-full text-header mr-2" />
      <div className="flex-col justify-between h-auto">
        <h3 className="text-xl text-header text-left">
          {title}
        </h3>
        <p className="text-4xl text-header text-left">{text}</p>
      </div>
    </a>
  );
}
