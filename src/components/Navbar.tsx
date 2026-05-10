'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 border-b">
            <Link href="/" className="font-bold text-lg">
                Aymene  
            </Link>
            <div className="flex gap-6">
                <Link href="/about">À propos</Link>
                <Link href="/projects">Projets</Link>
                <Link href="/contact">Contact</Link>
            </div>
        </nav>
    )
}