import Service from '@ember/service'; // eslint-disable-line
const DEFAULT_BOUNDS = [-93.068817, 44.928187, -93.295213, 44.985921];

export default Service.extend({
  bounds: DEFAULT_BOUNDS,
  currentlySelected: null,
  mapInstance: null,
  currentAddress: null,
});
