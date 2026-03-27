

export default function FormLogin(){
    return (
        <>
        <div className="flex justify-center items-center min-h-screen bg-blue-900">
  <form className="bg-white p-6 rounded shadow w-80">

    <h2 className="text-lg font-bold mb-4 text-center">
      Login
    </h2>

    <input
      type="email"
      placeholder="E-mail"
      className="w-full p-2 mb-3 border rounded"
    />

    <input
      type="password"
      placeholder="Senha"
      className="w-full p-2 mb-3 border rounded"
    />

    <button
      className="w-full p-2 bg-green-500 text-white rounded"
    >
      Entrar
    </button>

  </form>
</div>
        </>
    )
}