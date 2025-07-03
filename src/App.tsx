function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <form className="flex flex-col gap-3">
        <label htmlFor="nome" className="font-bold">
          Nome
        </label>
        <input
          type="text"
          placeholder="informe seu nome"
          className="border-1 h-10 border-red-500 px-0.5 font-semibold"
        />
        <label htmlFor="" className="font-bold">
          Email
        </label>
        <input
          type="text"
          placeholder="informe seu email"
          className="border-1 h-10 border-red-500 px-0.5 font-semibold"
        />

        <button type="submit" className="w-[60px] rounded bg-green-500">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default App;
