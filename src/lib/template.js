const template = window.dsplay_template || window.template || {};

export const val = (key, defaultValue) => template[key] ? template[key] : defaultValue;

export const bval = (key, defaultValue) => {
    const stringVal = val(key, defaultValue ? 'true' : 'false').toLowerCase();
    return stringVal === 'true' || stringVal === '1';
}

export const ival = (key, defaultValue) => parseInt(val(key, defaultValue));

export const fval = (key, defaultValue) => parseFloat(val(key, defaultValue));

export default template;