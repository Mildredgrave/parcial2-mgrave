
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
        <header className="bg-pink-300 text-white p-4">
            <h1 className="text-xl font-bold">Parcial2-mgrave</h1>
        </header>
      
      
        <main className="flex-1 p-4">{children}</main>
        <footer className="bg-pink-300 text-white p-3 text-center">
            Parcial2-mgrave
        </footer>
    </div>
  )
}
