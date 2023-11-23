import * as fs from 'fs'
import * as yaml from 'yaml'

export const config = {

    getSync(prop: string) {
        const str = fs.readFileSync('.env/config.yaml', 'utf-8')
        const props = yaml.parse(str)
        const keys = prop.split(/\./g).filter((it: string) => it)
        return keys.reduce((obj, k) => {
            if (!obj) {
                return null
            }
            return obj[k]
        }, props)
    }

}