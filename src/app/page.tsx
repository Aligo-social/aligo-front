import Image from "next/image"
import { ReactElement } from "react"

export default function Home(): ReactElement {
  return (
    <>
      <header className="row-start-1 flex items-center justify-between gap-6">Header content</header>
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">Main content</main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">Footer content</footer>
    </>
  )
}
