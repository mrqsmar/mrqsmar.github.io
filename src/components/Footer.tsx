export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-navy-700">
      <p className="text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Marques Mar. Built with React, TypeScript &amp; Tailwind CSS.
      </p>
    </footer>
  )
}
