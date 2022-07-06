function eggs(input) {
  let pattern=/([@#]+)([a-z]{3,})([@#])+[\W]*\/+(\d+)\/+/gm
  let string=input.shift()
  let amaount=[]
  let color=[]
  let regex=pattern.exec(string)
  while (regex){
      amaount.push(regex)
  }
console.log(amaount);
}
eggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
