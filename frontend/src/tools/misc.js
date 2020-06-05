
export const memoizeFunction = (f) => {
  return function () {
    const args = Array.prototype.slice.call(arguments)

    //we've confirmed this isn't really influencing
    //speed positively
    f.memoize = f.memoize || {}

    //this is the section we're interested in
    return args in f.memoize
      ? f.memoize[args]
      : (f.memoize[args] = f.apply(this, args))
  }
}
