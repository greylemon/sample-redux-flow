import { HelloWorldRepository } from "../repositories/HelloWorld"

export class HelloWorldService {
  constructor() {
    this.helloWorldRepository = new HelloWorldRepository()
  }

  find() {
    return this.helloWorldRepository.find()
  }
}