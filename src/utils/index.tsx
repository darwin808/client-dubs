const switchPages = (page: string) => {
  switch (page) {
    case "/b":
      return 2
    default:
      return 1
  }
}

export const helper = {
  switchPages
}
