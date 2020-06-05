import { HelloWorldEntity } from "../entities/HelloWorld";


export class HelloWorldRepository {
  find() {
    return new HelloWorldEntity({ value: "Hello World" })
  }
}