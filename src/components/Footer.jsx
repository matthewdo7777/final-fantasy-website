import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    const links = [
        {href: 'discord.com', title: 'Discord', icon: <FaDiscord/>},
        {href: 'twitter.com', title: 'Twitter', icon: <FaTwitter/>},
        {href: 'facebook.com', title: 'Facebook', icon: <FaFacebook/>},
        {href: 'instagram.com', title: 'Instagram', icon: <FaInstagram/>},
    ]
  return (
    <footer className="w-screen bg-white py-4 text-black">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
            <p className="text-center text-sm md:text-left"> &copy; Joseph Joestar All rights reserved</p>
            <div className="flex justify-center gap-4 md:justify-start">
                {links.map((link, index) => (
                    <a key={index} href={link.href} target='_blank' rel="noopener noreferrer" className="text-black transition-colors duration-300 ease-in-out hover:text-blue-300">{link.icon}</a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer