import { setupServer } from '../../src/serverSetup.js'
import { generateTests } from './tests'
import { Config } from '../../src/config'
import { createServerConfig, getScore, generateServerTests } from './extras'

let c = createServerConfig(new Config(''))
const { CONFIG, HW, mocha, launch } = setupServer(c)
/**
 * TODO server ტესტები არის იგივე რაც ტესტები, მაგრამ რამდენიმე გაურკვეველ ბაგიანი 
 * ტესტი არის ამოღებული რადგან ყველა სტუედნტი მაგაზე ფეილდება და ახლა მაგის შემოწმების დრო არ მაქვს...
 */
generateTests(CONFIG)
generateServerTests(CONFIG)
launch(getScore)