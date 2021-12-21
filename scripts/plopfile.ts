import { NodePlopAPI, ActionType } from 'plop';

module.exports = function (plop: NodePlopAPI) {
  plop.setPlopfilePath('plop-templates/plopfile.hbs');

  plop.setHelper('capitalize', (text: string) => {
    return text
      .split(' ') // split by space
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('');
  });

  // generator for non-radix components
  plop.setGenerator('component', {
    description: 'Generates a component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '../packages/{{dashCase componentName}}',
        base: 'component/',
        templateFiles: 'component/**',
      },
    ],
  });

  // generator for radix components
  plop.setGenerator('radix-component', {
    description: 'Generates a Radix component package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: '../packages/{{dashCase componentName}}',
        base: 'radix-component/',
        templateFiles: 'radix-component/**',
      },
    ],
  });
};
