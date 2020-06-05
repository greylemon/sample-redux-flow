import { HelloWorldController } from "../../controller/HelloWorld"
import { HelloWorldStore } from "../HelloWorldStore/store"
import { getRequestFactory } from '../thunk/common/REST'

export const getHelloWorldRequest = getRequestFactory(HelloWorldStore, HelloWorldController)
