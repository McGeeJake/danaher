module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "ignorePatterns": ["*.js", "dist/", "*.d.ts", "node_modules/"],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "camelcase": "off",
        "no-unused-vars": "off",
        "no-case-declarations": "off",
        "no-control-regex": 0,
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": ["error"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": true
                }
            }
        ],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "vars": "all",
            "args": "none",
            "ignoreRestSiblings": true
        }],


        // if we have a setter, there must be a getter
        "accessor-pairs": [
            "error",
            {
                "enforceForClassMembers": true
            }
        ],


        "array-bracket-newline": [
            "error",
            "consistent"
        ],



        "multiline-ternary": [
            "error",
            "always-multiline"
        ],
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 3
            }
        ],
        "no-console": [
            "warn",
            {
                "allow": [
                    "warn",
                    "error"
                ]
            }
        ],

        "no-lonely-if": "error",
        "no-nested-ternary": "error",

        "operator-linebreak": [
            "error",
            "before"
        ],

        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/unified-signatures": "error",

        // *************** not implemented yet, but seems doable **************@

        // "@typescript-eslint/prefer-optional-chain": "error",
        // "@typescript-eslint/no-empty-interface": "error",
        /*
                "@typescript-eslint/member-ordering": [
                    "error",
                    {
                        "classes": [
                            "static-field",
                            "static-method",
                            "field",
                            "constructor",
                            "method"
                        ]
                    }
                ], */


        // **************** checked, won't be implemented as of yet **********************

        /* 
                // this makes " x=1; break; " illegal
                // and    this.addInitializer(() => { this.createElements(); });
                "max-statements-per-line": "error",
         */

        /* // Requires more time to refactor, if at all feasible.
               "complexity": [
                 "warn",
                 24
             ],
             "max-depth": [
                 "warn",
                 4
             ], */


        /*   // causes 1K+ errors in framework. Will also cause all projects to need refactoring before passing lint.
          // If we go with this, it needs to be rolled out carefully.
          "camelcase": "error", 
          */

        /*
        // don't like this. Makes code take up much more vertical space.  
        // needs to be discussed with the team. 
         "brace-style": [
            "error",
            "stroustrup"
        ], */

        /*  
     // seems to be strict without gain, makes  "a => a+b" fail, must be (a) => {return a +b;}
     "arrow-parens": [
          "error",
          "as-needed",
          {
              "requireForBlockBody": true
          }
      ],  */

        // "no-floating-decimal": "error", // Don't think this is necessary. Can't see that it gives us much more readable code, just more keypresses.

        // Too restrictive, there are many cases where we'd want to have some parameters on one line, more on the next.
        /*   "object-property-newline": [
                "error",
                {
                    "allowAllPropertiesOnSameLine": true
                }
            ],  */

        /* 
                   //  type of  { name: "blue", rgb: "#1111ee", cmyk: [1, .4, .1, .1] }, is not allowed with this
                   // nor is return {x:0, y:0}
                "object-curly-newline": [
                    "error",
                    {
                        "ObjectExpression": {
                            "multiline": true,
                            "minProperties": 3,
                            "consistent": true
                        },
                        "ObjectPattern": {
                            "multiline": true
                        },
                        "ImportDeclaration": "never",
                        "ExportDeclaration": {
                            "multiline": true,
                            "minProperties": 3,
                            "consistent": true
                        }
                    }
                ],  */

    },
    "overrides": [
        {
            "files": [
                "*Defs.ts"
            ],
            "rules": {
                "object-curly-newline": "off"
            }
        }
    ],

};