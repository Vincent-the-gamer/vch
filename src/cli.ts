import cac, { CAC } from "cac";
import pkgJson from '../package.json'
import restoreCursor from 'restore-cursor'
import { logger } from "./utils/logger";
import { SupportedTools } from "./types";
import { getNodeVersions } from "./core";
import { compareVersions } from "./utils/compare";

const cli: CAC = cac("vch")

const { version } = pkgJson

async function checkNodeVersions() {
  const versions = await getNodeVersions()
  logger.success(`Node.js Current Version: ${versions.current}\nLatest Version: ${versions.latest}\nLatest LTS: ${versions.latestLTS}`)

  if (compareVersions(versions.current, versions.latestLTS) === -1) {
    logger.warn(`You are using an outdated version of Node.js: ${versions.current}. Latest LTS version: ${versions.latestLTS}`)
  } else {
    const isLatest = compareVersions(versions.current, versions.latest) === 0
    if (isLatest) {
      logger.success(`You are using the latest version of Node.js: ${versions.current}`)
    } else {
      logger.success(`You are using the version of Node.js: ${versions.current}`)
    }
  }
}

cli.command("check", "check for versions.")
  .option("--name, -n <name>", "check for versions of a specific tool.")
  .action(async (options) => {
    const { name } = options

    if (!name) {
      logger.error("Please provide a tool name using the --name or -n option.")
      return
    }

    if(!Object.values(SupportedTools).includes(name)) {
      logger.error(`Unsupported tool: ${name}`)
      return
    }

    switch(name) {
      case SupportedTools.Node:
        await checkNodeVersions()
        break
      default:
        break
    }
  })

cli.help()
cli.version(version)
cli.parse()

restoreCursor()