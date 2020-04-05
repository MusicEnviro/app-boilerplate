import { expect } from 'chai'
import { foo } from './example'

describe('foo', () => {
    it('doesn\'t do much.', () => {
        expect(foo(1)).to.be.equal('foo1')
    })
})