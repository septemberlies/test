

export interface ListInt {

    id: number,
    nickName: string
    role: RoleInt[],
    userName: string

}
interface RoleInt {
    role: number
    roleName: string
}

interface selectDataInt {
    role: number
    nickName: string
}
interface RoleListInt {
    authority: number[],
    roleId: number
    roleName: string
}
export class InitData {
    selectData: selectDataInt = {
        nickName: "",
        role: 0
    }
    list: ListInt[] = []
    roleList: RoleListInt[] = []
}