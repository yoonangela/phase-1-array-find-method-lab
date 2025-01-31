// code your solution here


function superbowlWin(record){
    let foundItem = record.find((object)=>object["result"]==="W")
    if (foundItem===undefined){
        return foundItem
    }
    return foundItem["year"]
}
