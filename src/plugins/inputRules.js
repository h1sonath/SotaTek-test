import vuetify from '@/plugins/vuetify'
import moment from 'moment'
const inputRules = {
  date: val => /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[0-9]|[0-9]\d)?\d{2})$/.test(val) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.DATE'),
  required: value => !!value || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.REQUIRED'),
  notSpace: value => value.replace(' ') === value || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.NO_WHITESPACES'),
  notSpecialCharacters: value => !value.match(/[!@#$%^&*(),.?":{}|<>]/g) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.NO_SPECIAL_CHARACTER'),
  percentage: value => (Number(value) > 0 && Number(value) < 100) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.PERCENTAGE'),
  atLeastOne: value => value.length > 0 || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.AT_LEAST_ONE'),
  maxLength: length => (value = '') => {
    if (!value) value = ''
    return value.length <= length || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.MAX_LENGTH', length)
  },
  dateGreaterOrEqual: (date, format = 'DD/MM/YYYY') => value => {
		return (
			!value ||
			!date ||
			new Date(value).getTime() >= new Date(date).getTime() ||
			`Ngày được chọn phải sau ngày ${moment(date).format(format)}`
		)
	},
  minLength: length => (value = '') => {
    if (!value) value = ''
    return value.length >= length || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.MIN_LENGTH', length)
  },
  // eslint-disable-next-line
  phone: value => value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.PHONE'),
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.EMAIL')
  },
  url: value => {
    if (!value || value.length === 0) return true
    // eslint-disable-next-line
    const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return pattern.test(value) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.URL')
  },
  number: value => {
    return !isNaN(value) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.NUMBER')
  },
  // eslint-disable-next-line
  domain: value => /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/gm.test(value) || vuetify.framework.lang.translator('$vuetify.INPUT.RULES.DOMAIN')
}


export default inputRules