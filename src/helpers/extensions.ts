declare global {
  interface Date {
    toDateJa(separator: string): string
    isInvalidDate(): boolean
  }
}

//
// Date
//
if (!Date.prototype.toDateJa) {
  Date.prototype.toDateJa = function (separator: string) {
    const yyyy = String(this.getFullYear())
    const mm = String(this.getMonth() + 1).padStart(2, '0')
    const dd = String(this.getDate()).padStart(2, '0')

    return [yyyy, mm, dd].join(separator)
  }
}

if (!Date.prototype.isInvalidDate) {
  Date.prototype.isInvalidDate = function () {
    return isNaN(this.getTime())
  }
}
