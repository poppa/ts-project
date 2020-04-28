// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
require('source-map-support').install()

export async function main(): Promise<boolean> {
  return true
}

// If not imported, e.g. run as entrypoint
if (!module.parent) {
  main().catch((e) => console.error(`Error in main:`, e))
}
