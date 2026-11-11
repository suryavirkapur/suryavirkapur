"use client";

import React from "react";
import { useState } from "react";
import { Home, FileText, FolderGit2, Menu, X } from "lucide-react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pages = {
    home: {
      title: "Home",
      content: (
        <div className="p-6">
          <p className="mb-4">
            Welcome! I&apos;m Suryavir Kapur, a passionate developer and creator.
            This space serves as a digital portfolio of my work and thoughts.
          </p>
          <p>
            I believe in creating meaningful experiences through technology and
            sharing knowledge with the community.
          </p>
        </div>
      ),
    },
    posts: {
      title: "Posts",
      content: (
        <div className="p-6">
          <div className="space-y-4">
            <article className="border border-white/20 p-4 rounded">
              <h3 className="text-xl font-semibold">My Journey in Tech</h3>
              <p className="text-white/70">
                Exploring the path that led me to where I am today...
              </p>
            </article>
            <article className="border border-white/20 p-4 rounded">
              <h3 className="text-xl font-semibold">
                The Future of Web Development
              </h3>
              <p className="text-white/70">
                Thoughts on emerging technologies and trends...
              </p>
            </article>
          </div>
        </div>
      ),
    },
    projects: {
      title: "Projects",
      content: (
        <div className="p-6">
          <div className="grid gap-4">
            <div className="border border-white/20 p-4 rounded">
              <h3 className="text-xl font-semibold">Project Alpha</h3>
              <p className="text-white/70">
                A revolutionary web application...
              </p>
            </div>
            <div className="border border-white/20 p-4 rounded">
              <h3 className="text-xl font-semibold">Project Beta</h3>
              <p className="text-white/70">An innovative mobile solution...</p>
            </div>
          </div>
        </div>
      ),
    },
  };

  const handlePageChange = (pageKey) => {
    setCurrentPage(pageKey);
    setIsMobileMenuOpen(false);
  };

  const NavLink = ({ icon: Icon, text, pageKey }) => (
    <button
      onClick={() => handlePageChange(pageKey)}
      className={`flex items-center w-full transition-colors`}
    >
      {text}
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] flex relative">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:flex flex-col w-64 border-r border-white/20 fixed left-1/2 -translate-x-[600px]">
          <h1 className="text-xl font-bold">Suryavir Kapur</h1>

          <nav className="flex-1">
            <NavLink icon={Home} text="Home" pageKey="home" />
            <NavLink icon={FileText} text="Posts" pageKey="posts" />
            <NavLink icon={FolderGit2} text="Projects" pageKey="projects" />
          </nav>
        </aside>

        {/* Mobile Header */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-black border-b border-white/20 z-50">
          <div className="flex justify-between items-center p-4 max-w-[1200px] mx-auto">
            <h1 className="text-xl font-bold">Suryavir Kapur</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black z-40 pt-16">
            <nav className="flex flex-col">
              <NavLink icon={Home} text="Home" pageKey="home" />
              <NavLink icon={FileText} text="Posts" pageKey="posts" />
              <NavLink icon={FolderGit2} text="Projects" pageKey="projects" />
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-64 mt-16 md:mt-0">
          {pages[currentPage].content}
        </main>
      </div>
    </div>
  );
};

export default App;
