const path = require('path');

const { d, expect, tquire } = deps;

const me = __filename;
const { srelative } = tquire(me);

d(me, () => {
  describe('for sibling directories', () =>
    it('should work the same as path.relative', () =>
      expect(srelative('/tmp', '/var')).to.equal(
        path.relative('/tmp', '/var'),
      )));

  describe('for a destination child directory', () =>
    it("should prepend a './'", () =>
      expect(srelative('/1', '/1/2')).to.equal('./2')));
});
