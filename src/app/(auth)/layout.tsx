"use client";
import Link from "next/link";
import React, { useState } from "react";

const navLinks = [
  { name: "Login", href: "/login", label: "Login" },
  { name: "signUp", href: "/signup", label: "signup" },
];
export default function Layout({ children }: { children: React.ReactNode }) {
    
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <div>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <h3>{link.label}</h3>
          </Link>
        ))}
      </div>
      <h1>Auth Layout</h1>
      {children}
    </div>
  );
}
