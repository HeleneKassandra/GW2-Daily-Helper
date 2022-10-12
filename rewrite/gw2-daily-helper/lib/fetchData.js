import sanityClient from "./sanityClient";

export async function getGW2DailyIds(showTomorrow){
   return await fetch(`https://api.guildwars2.com/v2/achievements/daily${showTomorrow ? '/tomorrow' : ''}`)
        .then(result => result.json()
        ).catch(err => console.log("Couldn't get ids from GW2 Official API"))
    // Fetch ids from GW2 official api if showTomorrow is true get ids from /tomorrow endpoint instead
    //Return IDs
}

async function fetchAchievementDataById(ids){
    return await sanityClient.fetch('*[_type == "achievement" && achievement_id in $ids] { name, achievement_id, type, location[]->}', {ids: ids}).then((achievements) => achievements).catch(err => new Error(err))
    // Fetch achievements that match the ids Daily Ids return.
    // return data'
    // *[_type == "achievement" && achievement_id in [1887, 2991]]
}

function createIdOnlyArray(gw2IDs){
    let pveIds = [];
    // Takes the daily achievements from and creates array with just the ids
    gw2IDs.pve.map(pveObj => pveIds.push(pveObj.id));
    return pveIds;
}
export async function getDailyData(showTomorrow){
    const gw2IDs = await getGW2DailyIds(showTomorrow);
    const pveIdArray = createIdOnlyArray(gw2IDs);
    return await fetchAchievementDataById(pveIdArray);
    // Calls the getGw2DailyIds
    // return FetchAchievementDataById data

}