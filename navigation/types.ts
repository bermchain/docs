import { Translations } from '@/i18n'

export type NavItemPage = {
  title: string
  slug: string
  path: string
}

export type NavItemPagePromise = Promise<NavItemPage | null>

export type NavItemPageDefinition = {
  title?: string
  slug: string
}

export type NavItemGroup = {
  title: string
  slug: string
  path: string
  children: NavItemPage[]
}

export type NavItemGroupPromise = Omit<NavItemGroup, 'children'> & {
  children: NavItemPagePromise[]
}

export type NavItemGroupDefinition = Omit<NavItemGroup, 'title' | 'children'> & {
  title: string
  children: NavItemPageDefinition[]
}

export type NavItemDivider = {
  divider: true
}

export type NavItem = NavItemPage | NavItemGroup | NavItemDivider
export type NavItemPromise = NavItemPagePromise | NavItemGroupPromise | NavItemDivider
export type NavItemDefinition = NavItemPageDefinition | NavItemGroupDefinition | NavItemDivider
