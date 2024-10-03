export interface CountryFlag {
  png: string
  svg: string
  alt: string
}

export interface CountryName {
  common: string
  official: string
  nativeName: Record<string, { official: string; common: string }>
}

export type CountryCapital = Array<string>

export interface Country {
  flags: CountryFlag
  name: CountryName
  capital: CountryCapital
}
