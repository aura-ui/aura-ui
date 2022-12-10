module.exports = {
  prompt: ({ inquirer }) => {
    // defining questions in arrays ensures all questions are asked before next prompt is executed
    const initQuestions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package you wish to create?',
      },
      {
        type: 'select',
        name: 'packageType',
        message: 'Select the type of package you wish to create.',
        choices: ['component', 'radix-component'],
        default: 'component',
      },
    ];

    return inquirer.prompt(initQuestions).then((answers) => {
      const { packageType } = answers;
      const questions = [
        {
          type: 'input',
          name: 'packageVersion',
          message: 'What version is the package starting at? Leave blank if unsure.',
          default: '0.0.1',
        },
        {
          type: 'input',
          name: 'packageDescription',
          message: 'Please add a description of this package.',
        },
      ];

      if (packageType === 'component') {
        questions.unshift({
          type: 'input',
          name: 'htmlElement',
          message: 'What is the name of the corresponding html element of your component?',
        });
      }

      // both set of answers must be returned as a merged object, else the previous set of answers won't be available to the templates
      return inquirer
        .prompt(questions)
        .then((nextAnswers) => Object.assign({}, answers, nextAnswers));
    });
  },
};
