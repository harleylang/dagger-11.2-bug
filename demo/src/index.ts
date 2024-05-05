import { func, object, Directory } from "@dagger.io/dagger";

@object()
class Demo {
  constructor(dir?: Directory) {}

  @func()
  bug() {
    console.log("this will not be called");
  }
}
