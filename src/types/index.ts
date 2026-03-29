export interface NodeVersions {
  current: string
  latest: string
  latestLts: string
}

export enum SupportedTools {
  Node = 'node',
  Brew = 'brew',
  Cargo = 'cargo'
}