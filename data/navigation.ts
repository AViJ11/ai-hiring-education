export interface NavItem {
  id: string
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { id: 'home',      label: 'Home',          href: '#home' },
  { id: 'students',  label: 'For Students',  href: '#students' },
  { id: 'employers', label: 'For Employers', href: '#employers' },
  { id: 'trends',    label: 'Trends',        href: '#trends' },
  { id: 'sources',   label: 'Sources',       href: '#sources' },
]
