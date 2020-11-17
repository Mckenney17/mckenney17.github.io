const beginnerQs = () => ([
    {
        language: 'javascript',
        questionType: 'single-answer',
        questionStatement: 'What is the result of the expression `NaN === NaN`?',
        code: '',
        options: ['true', 'false', "I don't know", 'None of the Above'],
        correctAnswer: 'false',
        explanation: 'NaN is never equal to any value even to itself. It is agreed that not all computations that results to NaN are the same',
        reference: '[JavaScript: The Definitive Guide by David Flanagan strict equality]()',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
    {
        language: 'javascript',
        questionType: 'single-answer',
        questionStatement: 'What is the output of these code?',
        code: `
        console.log(5 + '5');
        console.log(5 + 5);
        `,
        options: ['10, 55', '55, 10', '55, 55', '10, 10'],
        correctAnswer: '55, 10',
        explanation: 'If either or both operands of the **+ operator** is *a string*, it performs **concatenation**',
        reference: '[JavaScript: The Definitive Guide by David Flanagan plus operator]()',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
    {
        language: 'javascript',
        questionType: 'single-answer',
        questionStatement: 'Which of these are **Primitive Types** in JavaScript',
        code: '',
        options: ['String, Number, undefined', 'Array, null, Number', 'Boolean, Object, null', 'Function, undefined, Symbol'],
        correctAnswer: 'String, Number, undefined',
        explanation: '**Primitive Types** in JavaScript are: Number, String, undefined, null, Symbol, BigInt',
        reference: '[MDN: Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
    {
        language: 'javascript',
        questionType: 'single-answer',
        questionStatement: 'Which of the following is a **Membership test** operator?',
        code: '',
        options: ['in', '==', '===', '&&'],
        correctAnswer: 'in',
        explanation: 'The **in** operator is used to test, if left operand(property) is present in the right operand(object)',
        reference: '[JavaScript: in operator]()',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
    {
        language: 'javascript',
        questionType: 'multiple-answers',
        questionStatement: 'Choose from the following the **properties of the global object**',
        code: '',
        options: ['undefined', 'null', 'NaN', 'Infinity'],
        correctAnswer: ['undefined', 'NaN', 'Infinity'],
        explanation: '**undefined, NaN, Infinity** are properties of the **Window Object**',
        reference: '[JavaScript: properties of the global object]()',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
    {
        language: 'javascript',
        questionType: 'single-answer',
        questionStatement: 'What is the output of this code?',
        code: `
        console.log(NaN == NaN || 2 && '' || [] && null);
        `,
        options: ['NaN', '2', "''", 'null'],
        correctAnswer: 'null',
        explanation: 'The **||** logical operator selects the *truthy value* of its operands, while the **&&** logical operator selects the *falsy value* of its operands',
        reference: '[JavaScript: The Definitive Guide by David Flanagan Logical Operators]()',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
    {
        language: 'javascript',
        questionType: 'single-answer',
        questionStatement: 'What is the output of this code?',
        code: `
        function func(y) {
            var x = 2 + 3;
            return x && y;
        }
        console.log(func(23));
        `,
        options: ['undefined', '5', 'Error', '23'],
        correctAnswer: '23',
        explanation: 'If the left operand of the **&&** operator is a *truthy value*, it returns the right operand not considering whether it is truthy or falsy.',
        reference: '[JavaScript: The Definitive Guide by David Flanagan Logical Operators]()',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
    {
        language: 'javascript',
        questionType: 'single-answer',
        questionStatement: 'What is the result of the code below?',
        code: `
        let myArray = ['one', 2, 'seven'];
        \n
        myArray.unshift('fumble');
        \n
        console.log(myArray);
        `,
        options: [
        "['one', 2, 'seven', 'fumble']",
        "['fumble', 'one', 2, 'seven']",
        "['one', 2]",
        "[2, 'seven']",
        ],
        correctAnswer: "['fumble', 'one', 2, 'seven']",
        explanation: 'The unshift() method of an array adds one or more elements to the beginning of an array.',
        reference: '[freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-unshift)',
        githubProfile: '[SamSaias](https://github.com/SamSaias)',
        twitterProfile: '[WebDevPrin](https://twitter.com/WebDevPrin)',
    },
    {
        language: 'python',
        questionType: 'single-answer',
        questionStatement: 'In Python, *Types* that have *positionally ordered* collection of other objects are known as?',
        code: '',
        options: ['Sequence Types', 'Ordered Types', 'Immutable Types', 'Iterables'],
        correctAnswer: 'Sequence Types',
        explanation: 'Sequence Types are positionally ordered and you can perform common operations on them, such as, *Indexing* and *Slicing*',
        reference: '[Learning Python by Mark Lutz: Sequence Types]()',
        githubProfile: '[Mckenney17](https://github.com/Mckenney17)',
        twitterProfile: "[McKenney'20](https://twitter.com/Oluwarinolasam2)",
    },
]);

export default beginnerQs;
