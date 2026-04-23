// eslint.config.mjs
import pluginJest from "eslint-plugin-jest";
import globals from "globals";

export default [
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      semi: ["error", "always"],
      "id-length": ["error", { exceptions: ["x"] }],
      camelcase: 2,
      "keyword-spacing": 2,
      "space-infix-ops": 2,
      "comma-spacing": 2,
      "space-before-blocks": 2,
      "spaced-comment": 2,
      "key-spacing": 2,
      "no-multi-spaces": 2,
      "space-in-parens": 2,
      "space-before-function-paren": ["error", "never"],
      "func-call-spacing": 2,
      "no-multiple-empty-lines": 2,
      "padded-blocks": ["error", "never"],
      "no-floating-decimal": 2,
      "object-property-newline": 2,
      "brace-style": 2,
      eqeqeq: 2,
      "no-array-constructor": 2,
    },
  },

  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: {
      jest: pluginJest,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error",
    },
  },
];
