import service from ".";
interface loginData {
    username: string
    password: string
}
export function login(data: loginData) {
    return service({
        url: "/login",
        method: "POST",
        data
    })
}
export function getGoodsList() {
    return service({
        url: "/getGoodsList",
        method: 'get'
    })
}

export function getUserList() {
    return service({
        url: "/getUserList",
        method: 'get'
    })
}
export function getRoleList() {
    return service({
        url: "/getRoleList",
        method: 'get'
    })
}