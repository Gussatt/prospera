export default function Simulator() {
  return (
    <section className={`bg-simulator mt-12 h-screen w-full bg-fixed`}>
      <div className="mx-auto flex h-full w-11/12 md:ml-[4.1%] md:w-2/4">
        <div className="flex w-full flex-col items-center justify-evenly md:items-start">
          <h3 tabIndex={0} className="text-center text-clamp-headline font-bold text-header md:text-left">
            Venha e{" "}
            <strong className="bg-green transition-all hover:bg-transparent">
              {" "}
              simule seu futuro{" "}
            </strong>
          </h3>

          <button tabIndex={0} className="w-3/4 rounded-xl border-4 border-solid border-header bg-transparent p-4 transition-all hover:bg-green">
            <strong className="text-clamp-title font-bold text-header">
              Clique aqui
            </strong>
          </button>
        </div>
      </div>
    </section>
  );
}
