Package.describe({
  name: 'versionen',
  version: '0.0.1',
  summary: 'Internal version control for apps',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  const both = ['client', 'server'];
  api.versionsFrom('1.3.2.4');
  api.export('Versionen');

  api.use('ecmascript');
  api.addFiles('versionen.js', both);
});
