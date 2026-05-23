

function Header() {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex-items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">
          Quiz Game
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Restart
          </button>
        </div>
      </header>
    </>
  )
}

export default Header;
