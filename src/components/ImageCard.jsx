export default function ImageCard({ img, text }) {
  return (
    <div className={`flex flex-col h-80 w-full rounded-lg bg-[url(${img})] bg-center bg-cover bg-blend-overlay bg-black/50 place-content-end text-white`}>
      <h1 className="text-center p-6 text-2xl">{text}</h1>
    </div>
  );
}
