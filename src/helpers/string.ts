export const normalizeText = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()

export const includesSubstring = (
  string: string,
  substring: string
): boolean => {
  const normalizedString = normalizeText(string)
  const normalizedSubstring = normalizeText(substring)

  return normalizedString.includes(normalizedSubstring)
}

export const limitString = (string: string, limit: number): string => {
  if (!limit || !string || string.length <= limit) {
    return string
  }

  return `${string.slice(0, limit).trim()}...`
}
