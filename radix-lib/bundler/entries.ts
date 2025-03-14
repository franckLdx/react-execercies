import { basename, resolve } from 'node:path'
import { existsSync, lstatSync, readdirSync } from 'node:fs'
import { info, warning } from './logs'

const isDirectory = (entry: string): boolean => {
  return lstatSync(entry).isDirectory();
};

const hasIndex = (entry: string): boolean => {
  const indexPath = resolve(entry, 'index.ts')
  return existsSync(indexPath)
}

const dirToEntry = (dir: string) => { return { [basename(dir)]: dir } }

const getComponentsDirectories = (srcDir: string) => {
  const componentsDir = resolve(srcDir, 'components')

  return readdirSync(componentsDir)
    .map(entry => resolve(componentsDir, entry))
    .filter(entry => {
      if (!isDirectory(entry)) {
        warning(`${entry} is not a directory`)
        return false
      }
      if (!hasIndex(entry)) {
        warning(`${entry} does not have index`)
        return false
      }
      return true
    })
}

export const getEntries = (srcDir: string): Record<string, string> => {
  info('Searching for components...')

  const fullLibEntry = { 'ra-lib': resolve(srcDir, 'main.tsx') }

  const componentEntries = getComponentsDirectories(srcDir)
    .reduce((acc, directory) => ({
      ...acc, ...dirToEntry(directory)
    }), {})

  info(`${Object.entries(componentEntries).length} components found\n`)

  return { ...fullLibEntry, ...componentEntries }
}
