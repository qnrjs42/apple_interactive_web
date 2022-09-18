module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  settings: {
    'react': {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'no-shadow': 'off', // 쉐도우 설정
    'eslint-disable-next-line': 'off',
    'import/extensions': 'off', //import 방식의 차이
    'max-classes-per-file': 'off', // 파일당 최대 class 수 제한
    '@typescript-eslint/no-explicit-any': 'off', // any 유형 사용
    'import/prefer-default-export': 'off', // default export 금지
    '@typescript-eslint/no-unused-vars': 'off', // 잘못 판단하는 이슈들
    'class-methods-use-this': 'off', // class 사용시 constructor 강제화 x
    'no-unused-vars': 'off', // 사용하지 않는 변수 허용 안함. - 잘못된 이슈가 좀 있음
    'import/no-unresolved': 'off', // 절대경로 이슈
    'prettier/prettier': 'error',
    // React
    'no-console': 'warn',
    'no-use-before-define': 'off', // 정의되기 전에 사용되도록 허용 ('React' was used before it was defined)
    'react/require-default-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/destructuring-assignment': 'off', // props 구조 분해 할당 안 해도 됨
    'react/jsx-props-no-spreading': 'off', // props 전달할 때 spread 사용
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }],
    'jsx-quotes': [2, 'prefer-single'],
    'import/no-extraneous-dependencies': 'off', // reac-native
    'no-param-reassign': [
      // 재 할당 에러.
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'], // 예외: redux toolkit의 불변성(Immutability)으로 재 할당 가능
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      // 예외: label htmlFor + input id
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
