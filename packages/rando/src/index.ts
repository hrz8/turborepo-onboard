import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';

export const DefaultConfig: Config = {
  dictionaries: [
    adjectives,
    colors,
    animals
  ],
  separator: "-",
  length: 3,
}

export const generate = (config?: Config): string => {
  return uniqueNamesGenerator(config ?? DefaultConfig);
}