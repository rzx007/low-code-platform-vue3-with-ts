import bus from './bus'

export const parseScript = (script: string) => {
  return new Function('bus', script)(bus)
}
