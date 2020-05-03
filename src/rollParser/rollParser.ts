import peg from 'pegjs'
import fs from 'fs'
import path from 'path'

import fullGrammarPath from './fullGrammar.txt'
import rollGrammarPath from './rollGrammar.txt'

const fullGrammar = fs.readFileSync(
  path.resolve(__dirname, fullGrammarPath)
).toString()

const rollGrammar = fs.readFileSync(
  path.resolve(__dirname, rollGrammarPath)
).toString()

const fullParser = peg.generate(fullGrammar)
const rollParser = peg.generate(rollGrammar)

const rollTokensRegex = /\d+d\d+|d\d+/gm

export default {
  parse: (equation: string, options: { verbose: boolean } = { verbose: false }) => {
    if (options.verbose) {
      const rollTokens = equation.match(rollTokensRegex)
      let rolledEquation = equation
      if (rollTokens) {
        for (const token of rollTokens) {
          rolledEquation = rolledEquation.replace(token, rollParser.parse(token))
        }
      }
      return {
        rolledEquation,
        result: fullParser.parse(rolledEquation),
      }
    } else {
      return {
        rolledEquation: null,
        result: fullParser.parse(equation),
      }
    }
  }
}