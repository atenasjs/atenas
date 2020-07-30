class Hello {
  world({ response }: any) {
    response.body = "Hello world!";
  }
}

export default new Hello();
