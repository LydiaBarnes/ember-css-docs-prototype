import { helper as buildHelper } from '@ember/component/helper';

export function dasherize(param) {
  return param[0].dasherize();
}

export default buildHelper(dasherize);
