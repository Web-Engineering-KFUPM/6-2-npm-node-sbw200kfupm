import lodash from "lodash"

export function parseNumbers(input) {
            return {numbers: lodash.map(input, Number)}
          }

          export function isValidOperation(operation) {
            return lodash.includes(['add', 'subtract', 'multiply', 'divide'], operation)
          }