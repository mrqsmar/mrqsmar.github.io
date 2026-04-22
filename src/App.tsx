import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import CaseStudies from './components/CaseStudies'
import Products from './components/Products'
import Skills from './components/Skills'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CaseStudyVisa from './components/CaseStudyVisa'
import CaseStudyOrchestration from './components/CaseStudyOrchestration'
import CaseStudyVisaBanking from './components/CaseStudyVisaBanking'
import CaseStudyGRS from './components/CaseStudyGRS'
import MedicineCabinetDetail from './components/MedicineCabinetDetail'

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  if (path === '/case-studies/visa') {
    return (
      <>
        <Nav />
        <CaseStudyVisa />
        <Footer />
      </>
    )
  }

  if (path === '/case-studies/visa-banking') {
    return (
      <>
        <Nav />
        <CaseStudyVisaBanking />
        <Footer />
      </>
    )
  }

  if (path === '/case-studies/grs') {
    return (
      <>
        <Nav />
        <CaseStudyGRS />
        <Footer />
      </>
    )
  }

  if (path === '/case-studies/orchestration') {
    return (
      <>
        <Nav />
        <CaseStudyOrchestration />
        <Footer />
      </>
    )
  }

  if (path === '/projects/medicine-cabinet') {
    return (
      <>
        <Nav />
        <MedicineCabinetDetail />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Education />
      <CaseStudies />
      <Products />
      <Skills />
      <Interests />
      <Contact />
      <Footer />
    </>
  )
}
