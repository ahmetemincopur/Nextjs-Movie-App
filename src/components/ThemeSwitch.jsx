"use client"
import { useState, useEffect } from 'react'
import { CiDark, CiLight } from "react-icons/ci"
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const themeMode = theme === "system" ? systemTheme : theme;

    return (
        <div className="dark:bg-slate-800">
            {mounted && (

                themeMode === "dark" ?
                    <CiLight onClick={() => setTheme("light")} className="cursor-pointer" size={45} /> :
                    <CiDark onClick={() => setTheme("dark")} className="cursor-pointer" size={45} />
            )}
        </div>
    )
}

export default ThemeSwitch