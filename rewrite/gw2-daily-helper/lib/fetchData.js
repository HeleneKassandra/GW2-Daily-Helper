import sanityClient from "./sanityClient";

export async function getGW2DailyIds(showTomorrow){
   return await fetch(`https://api.guildwars2.com/v2/achievements/daily${showTomorrow ? '/tomorrow' : ''}`)
        .then(result => result.json()
        ).catch(err => console.log("Couldn't get ids from GW2 Official API"))
}

async function fetchAchievementDataById(ids){
    return await sanityClient.fetch('*[_type == "achievement" && achievement_id in $ids] { name, achievement_id, type, location[]->{_id, map_name, area, wp_name, wp_code, type, gathering_item, "imageUrl": location_image.asset->url}}', {ids: ids}).then((achievements) => achievements).catch(err => new Error(err))
    // Fetch achievements that match the ids Daily Ids return.
    // return data'
    // *[_type == "achievement" && achievement_id in [1887, 2991]]
}

function createIdOnlyArray(gw2IDs){
    let ids = [];
    // Takes the daily achievements from and creates array with just the ids
    gw2IDs.pve.map(pveObj => ids.push(pveObj.id));
    gw2IDs.fractals.map(fractalObj => ids.push(fractalObj.id));
    gw2IDs.wvw.map(wvwObj => ids.push(wvwObj.id));
    return ids;
}
export async function getDailyData(showTomorrow){
    const gw2IDs = await getGW2DailyIds(showTomorrow);
    console.log(gw2IDs);
    const pveIdArray = createIdOnlyArray(gw2IDs);
    return await fetchAchievementDataById(pveIdArray);
    // Calls the getGw2DailyIds
    // return FetchAchievementDataById data

}
export default function getLocationsForDaily(allData, achievement_id) { return allData.filter(data => data.achievement_id === achievement_id) }