Package.describe({
  name: 'cinn:versionen',
  version: '0.0.3',
  summary: 'Internal version control for Meteor apps',
  git: 'https://github.com/cinn-labs/versionen',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.3.2.4');
  api.export('Versionen');

  api.use('ecmascript');
  api.addFiles('versionen.js', both);
});
