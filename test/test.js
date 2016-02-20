import expect from 'expect'
import { Record } from 'immutable'
import { createInterface } from 'simple-interface'

import { createRecord } from '../src'

describe('simple-interface', () => {

  const FooInterface = createInterface('FooInterface', {
    bar: String,
    baz: Number
  })

  describe('createRecord', () => {
    it(`defaults to an immutable record`, () => {
      const FooRecord = createRecord(FooInterface)

      const foo = new FooRecord

      expect(foo.bar).toBe('')
      expect(foo.baz).toBe(0)

      expect(foo).toBeA(Record)
    })

    it('accepts a record factory as second arg', () => {
      class _Record {}
      const _RecordFactory = function RecordFactory(description) {
        return class _FooRecord extends _Record {}
      }

      const FooRecord = createRecord(FooInterface, _RecordFactory)

      const foo = new FooRecord

      expect(foo).toBeA(_Record)
    })

    it('returns a record class with getInterface() method', () => {
      const FooRecord = createRecord(FooInterface)

      const foo = new FooRecord

      expect(foo.getInterface()).toBe(FooInterface)
    })

    it('returns a record class with getDefaults() method', () => {
      const FooRecord = createRecord(FooInterface)

      const foo = new FooRecord

      expect(foo.getDefaults()).toEqual({bar: '', baz: 0})
    })
  })

})
