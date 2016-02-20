import map from 'lodash.mapvalues'
import { Record } from 'immutable'

/**
 * Creates an immutable record instance from given simple interface instance.
 *
 * Example:
 *     Turns
 *         {
 *           key: String,
 *           shared: Boolean,
 *           resolver: Function
 *         }
 *     to
 *         {
 *           key: '',
 *           shared: false,
 *           resolver: () => {}
 *         }
 *
 * @public
 * @param {SimpleInterface} Interface
 * @param {Function=} RecordFactory
 * @returns {*} result of record factory function | default: Immutable.Record
 */
export default function createRecord(Interface, RecordFactory = Record) {
  const contract = Interface.getContract()

  const defaults = map(contract, (PropFactory) => PropFactory())

  const RecordClass = RecordFactory(defaults)

  return class extends RecordClass {
    getInterface() {
      return Interface
    }

    getDefaults() {
      return defaults
    }
  }
}
