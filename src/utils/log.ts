/*
 * @Author: 阮志雄
 * @Date: 2022-04-15 21:15:22
 * @LastEditTime: 2022-04-15 21:15:23
 * @LastEditors: 阮志雄
 * @Description: In User Settings Edit
 * @FilePath: \low-code-platform-vue3-with-ts\src\utils\log.ts
 */
const projectName = import.meta.env.VITE_TITLE

export function warn(message: string) {
  console.warn(`[${projectName} warn]:${message}`)
}

export function error(message: string) {
  throw new Error(`[${projectName} error]:${message}`)
}
