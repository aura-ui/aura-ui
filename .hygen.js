module.exports = {
  helpers: {
    dasherize: (str) => str.replace(new RegExp('[ _]', 'g'), '-').toLowerCase(),
    humanize: (str) => {
      str = str.toLowerCase();
      str = str.replace(new RegExp('(_ids|_id)$', 'g'), '');
      str = str.replace(new RegExp('_', 'g'), ' ');
      str = str
        .replace(/[_-]/g, ' ')
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');

      return str;
    },
  },
};
