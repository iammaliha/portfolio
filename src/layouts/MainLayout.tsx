import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgressBar from '../components/ui/ScrollProgressBar'
import ToastContainer from '../components/ui/ToastContainer'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[--color-bg]">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  )
}
