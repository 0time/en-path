const { d, expect, pquire, uuid } = deps;

const me = __filename;

d(me, () => {
  let key = null;
  let mocks = null;
  let mockSrelative = null;
  let mockPath = null;
  let val = null;

  beforeEach(() => {
    key = `key-${uuid()}`;
    val = `val-${uuid()}`;

    mockSrelative = `mock-srelative-${uuid()}`;
    mockPath = { [key]: val };

    mocks = {};

    mocks['./special-relative'] = mockSrelative;
    mocks['path'] = mockPath;
  });

  it('should expose srelative', () =>
    expect(pquire(me, mocks)).to.have.property('srelative', mockSrelative));

  it('should expose equivalent path commands', () =>
    expect(pquire(me, mocks)).to.have.property(key, val));
});
