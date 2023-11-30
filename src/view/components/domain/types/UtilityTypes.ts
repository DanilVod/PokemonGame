export type EnumerateProperties<T extends Record<string, any>> =
  keyof ReturnType<T>
