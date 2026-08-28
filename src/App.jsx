import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import PageTitle from './components/PageTitle'
import RequireAuth from './components/RequireAuth'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import EventsPage from './pages/EventsPage'
import CorePage from './pages/CorePage'
import JoinPage from './pages/JoinPage'
import LoginPage from './pages/LoginPage'
import MembersPage from './pages/MembersPage'
import ConfessionsPage from './pages/ConfessionsPage'
import OverheardsPage from './pages/OverheardsPage'
import InterviewBankPage from './pages/InterviewBankPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTitle />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/core" element={<CorePage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/members"
            element={
              <RequireAuth>
                <MembersPage />
              </RequireAuth>
            }
          />
          <Route
            path="/confessions"
            element={
              <RequireAuth>
                <ConfessionsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/overheards"
            element={
              <RequireAuth>
                <OverheardsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/interview-bank"
            element={
              <RequireAuth>
                <InterviewBankPage />
              </RequireAuth>
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}