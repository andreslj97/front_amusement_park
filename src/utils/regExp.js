const regExpUserName = new RegExp('^[a-zA-Z@*-_0-9]{1,10}$')
const regExpPassword = new RegExp('^[a-zA-Z0-9+*_-]{8,16}$')
const regExpName = new RegExp(`^[a-zA-Zá-ú ]{1,50}$`)
const regExpAge = new RegExp('^[1-9]{1}[0-9]{0,1}$')
const regExpEmail = new RegExp('^[a-z_.*0-9]{1,20}[@]{1}[a-z]{3,20}[.]{1}[a-z]{2,5}$')

export const regExpInputs = {regExpUserName, regExpPassword, regExpName, regExpAge, regExpEmail}