module.exports = [
  {
    type: 'input',
    name: 'packageName',
    message: 'What is the name of the package you wish to create?',
  },
  {
    type: 'input',
    name: 'packageVersion',
    message: 'What version is the package starting at? If unsure, just set it as 0.0.1',
  },
  {
    type: 'input',
    name: 'packageDescription',
    message:
      'Please add a description of the package. Refer to other package descriptions for guidance if needed.',
  },
];
