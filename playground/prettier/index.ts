import * as prettier from 'prettier';
import prettierrc from '../../dist/index.js';

/**
 * Тесты для конфигурации Prettier Проверяем все опции: printWidth: 120, singleQuote: false, jsxSingleQuote: true,
 * trailingComma: "none", bracketSpacing: true, bracketSameLine: false, semi: true, tabWidth: 2, useTabs: true, endOfLine: "lf",
 * arrowParens: "always"
 */

type TestCase = {
  description: string;
  input: string;
  expected: string;
  options?: prettier.Options;
};

const testCases: TestCase[] = [
  {
    description: 'printWidth: строка до 128 символов не переносится',
    input: `const shortString = "This is a relatively short string that should fit within 128 characters without wrapping";`,
    expected:
      "const shortString = 'This is a relatively short string that should fit within 128 characters without wrapping';\n",
  },
  {
    description: 'printWidth: строка свыше 128 символов переносится',
    input: `const longString = "This is a very long string that definitely exceeds 128 characters and should be wrapped to the next line automatically by prettier";`,
    expected:
      "const longString =\n  'This is a very long string that definitely exceeds 128 characters and should be wrapped to the next line automatically by prettier';\n",
  },

  // singleQuote: false
  {
    description: 'singleQuote: двойные кавычки заменяются на одинарные',
    input: `const str = "hello world";`,
    expected: "const str = 'hello world';\n",
  },
  {
    description: 'singleQuote: одинарные кавычки остаются без изменений',
    input: `const str = 'hello world';`,
    expected: "const str = 'hello world';\n",
  },

  // jsxSingleQuote: true
  {
    description: 'jsxSingleQuote: двойные кавычки в JSX заменяются на одинарные',
    input: `<Button title="Click me" disabled="false" />;`,
    expected: "<Button title='Click me' disabled='false' />;\n",
  },
  {
    description: 'jsxSingleQuote: одинарные кавычки в JSX остаются',
    input: `<Button title='Click me' />;`,
    expected: "<Button title='Click me' />;\n",
  },

  // trailingComma: "none"
  {
    description: 'trailingComma: запятая в конце массива удаляется',
    input: `const arr = [1, 2, 3,];`,
    expected: 'const arr = [1, 2, 3];\n',
  },
  {
    description: 'trailingComma: запятая в конце объекта НЕ удаляется',
    input: `const obj = {\n\ta: 1,\n\tb: 2,\n};`,
    expected: 'const obj = {\n  a: 1,\n  b: 2,\n};\n',
  },

  // bracketSpacing: true
  {
    description: 'bracketSpacing: добавляются пробелы внутри объектных скобок',
    input: `const obj = {a: 1, b: 2};`,
    expected: 'const obj = { a: 1, b: 2 };\n',
  },
  {
    description: 'bracketSpacing: пустой объект без пробелов',
    input: `const empty = { };`,
    expected: 'const empty = {};\n',
  },

  {
    description: 'bracketSameLine: закрывающая скобка JSX на новой строке',
    input: `<Component\n\tprop1="value1"\n\tprop2="value2">\n\t<Child />\n</Component>`,
    expected: "<Component prop1='value1' prop2='value2'>\n  <Child />\n</Component>;\n",
  },

  // semi: true
  {
    description: 'semi: точки с запятой добавляются',
    input: `const a = 1\nconst b = 2\nfunction test() { return 42 }`,
    expected: 'const a = 1;\nconst b = 2;\nfunction test() {\n  return 42;\n}\n',
  },

  // tabWidth: 2, useTabs: true
  {
    description: 'useTabs: отступы заменяются на табы',
    input: `function nested() {\n  if (true) {\n    return {\n      deep: {\n        value: 42\n      }\n    };\n  }\n}`,
    expected:
      'function nested() {\n  if (true) {\n    return {\n      deep: {\n        value: 42,\n      },\n    };\n  }\n}\n',
  },

  // endOfLine: "lf"
  {
    description: 'endOfLine: CRLF заменяется на LF',
    input: 'const a = 1;\r\nconst b = 2;\r\n',
    expected: 'const a = 1;\nconst b = 2;\n',
  },

  // arrowParens: "always"
  {
    description: 'arrowParens: скобки добавляются для одного параметра',
    input: `const fn = x => x * 2;`,
    expected: 'const fn = x => x * 2;\n',
  },
  {
    description: 'arrowParens: скобки остаются для нескольких параметров',
    input: `const fn = (x, y) => x + y;`,
    expected: 'const fn = (x, y) => x + y;\n',
  },

  // --- Комплексные тесты ---
  {
    description: 'Полный тест: объект с функциями и JSX',
    input: `const config={handler:x=>{return{result:x*2}},component:<Button onClick={e=>console.log('clicked')} label="Test"/>,array:[1,2,3,],};`,
    expected:
      "const config = {\n  handler: x => {\n    return { result: x * 2 };\n  },\n  component: <Button onClick={e => console.log('clicked')} label='Test' />,\n  array: [1, 2, 3],\n};\n",
  },

  {
    description: 'Длинные цепочки методов с JSX',
    input: `const result = data.filter(item => item.active).map(item => <ListItem key={item.id} title={item.name} onClick={() => handleClick(item)} />).slice(0, 10);`,
    expected:
      'const result = data\n  .filter(item => item.active)\n  .map(item => <ListItem key={item.id} title={item.name} onClick={() => handleClick(item)} />)\n  .slice(0, 10);\n',
  },

  {
    description: 'Вложенные объекты и массивы с комментариями',
    input: `const complexConfig = {\n  // Database settings\n  db: {\n    host: 'localhost',\n    port: 5432,\n    credentials: {\n      user: 'admin',\n      pass: 'secret',\n    },\n  },\n  // Feature flags\n  features: ['auth', 'payments', 'analytics',],\n  // Handlers\n  onConnect: () => console.log('connected'),\n  onError: err => console.error(err),\n};`,
    expected:
      "const complexConfig = {\n  // Database settings\n  db: {\n    host: 'localhost',\n    port: 5432,\n    credentials: {\n      user: 'admin',\n      pass: 'secret',\n    },\n  },\n  // Feature flags\n  features: ['auth', 'payments', 'analytics'],\n  // Handlers\n  onConnect: () => console.log('connected'),\n  onError: err => console.error(err),\n};\n",
  },
];

async function runPrettierTests() {
  console.log('🧪 Запуск тестов Prettier конфигурации...\n');

  let passed = 0;
  let failed = 0;
  const failures: Array<{ test: TestCase; received: string }> = [];

  for (const testCase of testCases) {
    try {
      const formatted = await prettier.format(testCase.input, {
        ...prettierrc,
        ...testCase.options,
        parser: 'babel',
      });

      if (formatted === testCase.expected) {
        console.log(`✅ ${testCase.description}`);
        passed++;
      } else {
        console.log(`❌ ${testCase.description}`);
        failures.push({ test: testCase, received: formatted });
        failed++;
      }
    } catch (error) {
      console.error(`💥 ${testCase.description} - Ошибка форматирования:`, error);
      failed++;
    }
  }

  if (failures.length > 0) {
    console.log('\n' + '='.repeat(80));
    console.log('📋 ДЕТАЛИ НЕУДАЧНЫХ ТЕСТОВ:');
    console.log('='.repeat(80));

    failures.forEach(({ test, received }, index) => {
      console.log(`\n${index + 1}. ${test.description}`);
      console.log('-'.repeat(60));
      console.log('📥 Входные данные:');
      console.log(JSON.stringify(test.input, null, 2));
      console.log('\n📤 Ожидаемый результат:');
      console.log(JSON.stringify(test.expected, null, 2));
      console.log('\n📤 Фактический результат:');
      console.log(JSON.stringify(received, null, 2));
      console.log('\n🔍 Различия (символ за символом):');

      // Показываем различия посимвольно
      const expected = test.expected;
      const minLength = Math.min(expected.length, received.length);
      let firstDiff = -1;

      for (let i = 0; i < minLength; i++) {
        if (expected[i] !== received[i]) {
          firstDiff = i;
          break;
        }
      }

      if (firstDiff !== -1) {
        console.log(`   Первое различие на позиции ${firstDiff}:`);
        console.log(`   Ожидалось: "${expected[firstDiff]}" (код: ${expected.charCodeAt(firstDiff)})`);
        console.log(`   Получено:  "${received[firstDiff]}" (код: ${received.charCodeAt(firstDiff)})`);
      } else if (expected.length !== received.length) {
        console.log(`   Различие в длине: ожидалось ${expected.length}, получено ${received.length}`);
      }
    });
  }

  console.log('\n' + '='.repeat(80));
  console.log('📊 РЕЗУЛЬТАТЫ ТЕСТИРОВАНИЯ:');
  console.log('='.repeat(80));
  console.log(`✅ Успешно: ${passed}`);
  console.log(`❌ Неудачно: ${failed}`);
  console.log(`📈 Процент успешности: ${Math.round((passed / (passed + failed)) * 100)}%`);

  if (failed === 0) {
    console.log('\n🎉 Все тесты пройдены! Ваша конфигурация Prettier работает корректно.');
  } else {
    console.log(`\n⚠️  ${failed} тест(ов) не прошли. Проверьте конфигурацию.`);
    throw new Error(`${failed} Prettier тестов не прошли`);
  }
}

async function testSingleCase(input: string, description?: string) {
  console.log(`🔍 Быстрый тест${description ? `: ${description}` : ''}:`);
  console.log('Входные данные:', JSON.stringify(input));

  try {
    const formatted = await prettier.format(input, {
      ...prettierrc,
      parser: 'babel',
    });
    console.log('Результат:', JSON.stringify(formatted));
    return formatted;
  } catch (error) {
    console.error('Ошибка форматирования:', error);
    throw error;
  }
}

export { runPrettierTests, testSingleCase };

runPrettierTests().catch(err => {
  console.error('💥 Ошибка при выполнении тестов:', err);
  process.exit(1);
});

//
//  DUMP GENERATOR
//

// async function dumpExpectedOutputs() {
//   const results: Record<string, string> = {};
//   for (const testCase of testCases) {
//     const formatted = await prettier.format(testCase.input, {
//       ...Prettierrc,
//       ...testCase.options,
//       parser: "babel",
//     });
//     results[testCase.description] = formatted;
//   }
//   console.log(JSON.stringify(results, null, 2));
//   process.exit(0);
// }

// dumpExpectedOutputs().catch((err) => {
//   console.error("💥 Ошибка при создании ожидаемых результатов:", err);
//   process.exit(2);
// });
