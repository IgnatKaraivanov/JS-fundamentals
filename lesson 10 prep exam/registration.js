function registration(input) {
  let inputCount = Number(input.shift());
  // console.log(inputCount);
  let regex =
    /(U\$)(?<Username>([A-Z][a-z]{2,}))\1(P\@\$)(?<Password>[A-Za-z]{5,}\d+)\4/;
  let counter = 0;
  for (let i = 0; i < inputCount; i++) {
    let match = regex.exec(input[i]);
    if (match !== null) {
      let Username = match.groups.Username;
      let Password = match.groups.Password;
      counter++;
      console.log(`Registration was successful`);
      console.log(`Username: ${Username}, Password: ${Password}`);
    } else {
      console.log(`Invalid username or password`);
    }
  }
  console.log(`Successful registrations: ${counter}`);
}
registration([
  "3",
  "U$MichaelU$P@$asdqwe123P@$",
  "U$NameU$P@$PasswordP@$",
  "U$UserU$P@$ad2P@$",
]);
