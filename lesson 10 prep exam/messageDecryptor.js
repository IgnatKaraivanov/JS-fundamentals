function messageDecrypter(input) {
    let inputCount = input.shift();
    let regex =
      /^([$%])(?<validTag>([A-Z][a-z]{2,}))\1\:\s\[(?<decryption1>(\d+))\]\|\[(?<decryption2>(\d+))\]\|\[(?<decryption3>(\d+))\]\|$/;
   
    for (let i = 0; i < inputCount; i++) {
      let match = regex.exec(input[i]);
      if (match != null) {
      let tag = match.groups.validTag;
      let deKrypt = String.fromCharCode(
        match.groups.decryption1,
        match.groups.decryption2,
        match.groups.decryption3
      );
        console.log(
          `${tag}: ${deKrypt}`
        );
      } else {
        console.log("Valid message not found!");
      }
    }
  }