function superbowlWin(results) {
    let win = results.find(results => results.result === "W");
    return !!win ? win.year : undefined;
};
