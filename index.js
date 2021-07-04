function superbowlWin(results){
    let win = results.find(results => results.result === "W");
    return !!win ? win.year : undefined;
};

// superbowlWin = (record) => {
//     let result = record.find( record => record.result === "W" )
//     return !!result ? result.year : undefined
//   }
