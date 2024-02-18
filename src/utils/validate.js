export const checkValidate =(email, password )=>{

    const emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if (!emailValidation) return "email invalid"
    if(!passwordValidation) return "wrong password"

    return null
}