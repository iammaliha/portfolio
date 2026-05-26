import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

type Theme = 'pink' | 'lavender'

interface ThemeContextValue {
  theme: Theme
  toggleTheme(): void
  setTheme(value: Theme): void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem('portfolio-theme')
    if (stored === 'pink' || stored === 'lavender') return stored
  } catch {
    /* localStorage unavailable */
  }
  return 'pink'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)

  const applyTheme = useCallback((value: Theme) => {
    document.documentElement.setAttribute('data-theme', value)
    try {
      localStorage.setItem('portfolio-theme', value)
    } catch {
      /* localStorage unavailable */
    }
  }, [])

  useEffect(() => {
    applyTheme(theme)
  }, [theme, applyTheme])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'pink' ? 'lavender' : 'pink'))
  }, [])

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
