import DS from 'ember-data';
import { buildSqlUrl } from '../utils/carto';

const SQL = `SELECT * FROM mn_acs15_tracts`;

export default DS.JSONAPIAdapter.extend({
  keyForAttribute(key) {
    return key;
  },
  buildURL() {
    return buildSqlUrl(SQL, 'geojson');
  },
});
