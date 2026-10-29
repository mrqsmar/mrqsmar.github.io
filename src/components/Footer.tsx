export default function Footer() {
  return (
    <footer className="theme-dark bg-bg border-t border-line">
      <div className="max-w-[1200px] mx-auto px-s3 sm:px-s4 py-s4 flex flex-wrap justify-between gap-s2 text-14 text-subtle">
        <p>&copy; {new Date().getFullYear()} Marques Mar</p>
        <p>Product Manager, Payments at Varo</p>
      </div>
    </footer>
  )
}
