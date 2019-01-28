module.exports = {
  "extends": "stylelint-config-standard",
  "rules": {
    "rule-empty-line-before": null,
    "no-invalid-double-slash-comments": null,
    "number-leading-zero": null,
    "font-family-no-missing-generic-family-keyword": null,
    "no-descending-specificity": null,
    "selector-type-no-unknown": [
      true,
      {
        ignoreTypes: ["page"],
      }
    ],
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["rpx"],
      },
    ],
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": [
        "extend",
        "include",
        "mixin",
        "each",
        "if",
        "for",
      ],
    }],
  },
};
