const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  test("Does not return the literal '0' when given a non zero input", () => {
    const trivialKey = deterministicPartitionKey(2);
    expect(trivialKey).not.toBe("0")
  });
});

describe("deterministicPartitionKey", () => {
  test("Return value is not greater than max partition key length", () => {
    const trivialKey = deterministicPartitionKey(-99999999);
    expect(trivialKey.length).not.toBeGreaterThan(256)
  });
});

describe("deterministicPartitionKey", () => {
  test("Returns the literal '0' when given 0 as input", () => {
    const trivialKey = deterministicPartitionKey(0);
    expect(trivialKey).toBe("0")
  });
});

describe("deterministicPartitionKey", () => {
  test("Does not return the literal '0' when given '0' as input", () => {
    const trivialKey = deterministicPartitionKey("0");
    expect(trivialKey).not.toBe("0")
  });
});

describe("deterministicPartitionKey", () => {
  test("Does not return the literal '0' when given string of characters as input", () => {
    const trivialKey = deterministicPartitionKey("Sally");
    expect(trivialKey).not.toBe("0")
  });
})








