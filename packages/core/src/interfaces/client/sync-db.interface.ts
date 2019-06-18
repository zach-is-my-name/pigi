/* Internal Imports */
import { StateQuery } from '../common'

export interface SyncDB {
  getCommitmentContracts(): Promise<string[]>
  putLastSyncedBlock(commitmentContract: string, block: number): Promise<void>
  getLastSyncedBlock(commitmentContract: string): Promise<number>
  addSyncQuery(
    commitmentContract: string,
    stateQuery: StateQuery
  ): Promise<void>
  removeSyncQuery(
    commitmentContract: string,
    stateQuery: StateQuery
  ): Promise<void>
  getSyncQueries(commitmentContract: string): Promise<StateQuery[]>
}