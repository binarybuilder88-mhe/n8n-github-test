const { add } = require('./app');

function runTests() {
  let passed = 0;
  let failed = 0;

  function assertEqual(actual, expected, message) {
    if (actual === expected) {
      passed++;
      console.log(`PASS: ${message}`);
    } else {
      failed++;
      console.error(`FAIL: ${message} (actual=${actual}, expected=${expected})`);
    }
  }

  // tests
  assertEqual(add(1, 2), 3, '1 + 2 should be 3');
  assertEqual(add(0, 0), 0, '0 + 0 should be 0');

  const result = { passed, failed };
  console.log('TEST_SUMMARY:' + JSON.stringify(result));

  // exit code: 0 = success, 1 = failure
  process.exit(failed > 0 ? 1 : 0);
}

runTests();
