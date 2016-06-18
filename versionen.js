import _ from 'lodash';

Versionen = {
  current: '0.0.0',
  releases: []
};

Versionen.findRelease = (version) => _.find(Versionen.releases, { version });

Versionen.currentRelease = () => Versionen.findRelease(Versionen.current);

Versionen.setCurrenVersion = function(version) {
  if(!Versionen.findRelease(version)) return console.warn(`[VERSIONEN] Release not found: ${version}`);
  Versionen.current = version;
}

Versionen.addRelease = function(release) {
  if(!!Versionen.findRelease(release.version)) return console.warn(`[VERSIONEN] Duplicated release version: ${release.version}`);
  Versionen.releases.push(release);
};

export default Versionen;
