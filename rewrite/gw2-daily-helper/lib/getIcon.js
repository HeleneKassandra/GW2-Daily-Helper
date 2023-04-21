import Image from 'next/image';

export default function getIcon(name, size){
    if(!size) {
        size = 30; 
    }
    let icon = null;
    switch (name) {
        case "Miner":
            icon = <Image src="/img/miningIcon.png" aria-hidden="true" alt="Mining icon" height={size} width={size} />;
            break;
        case "Forager":
            icon = <Image src="/img/harvestIcon.png" aria-hidden="true" alt="Harvest icon" height={size} width={size} />;
            break;
        case "Lumberer":
            icon = <Image src="/img/loggingIcon.png" aria-hidden="true" alt="Lumberer icon" height={size} width={size} />;
            break;
        case "Vista Viewer":
            icon = <Image src="/img/vistaIcon.png" aria-hidden="true" alt="Vista icon" height={size} width={size} />;
            break;
        case "Minidungeon":
            icon = <Image src="/img/dungeonIcon.png" aria-hidden="true" alt="Dungeon icon" height={size} width={size} />;
            break;
        case "Guild hall":
            icon = <Image src="/img/guildHallIcon.png" aria-hidden="true" alt="Guild hall icon" height={size} width={size} />;
            break;
        case "Reward":
            icon = <Image src="/img/achievementChest.png" aria-hidden="true" alt="Achievement chest icon" height={size} width={size} />;
            break;
        case "Jumping Puzzle":
            icon = <Image src="/img/achievementChest.png" aria-hidden="true" alt="Achievement chest icon" height={size} width={size} />;
            break;
        case "Waypoint":
            icon = <Image src="/img/waypointIcon.png" aria-hidden="true" alt="Waypoint icon" height={size} width={size} />;
            break;
        case "WvW":
            icon = <Image src="/img/eventKeepIcon.png" aria-hidden="true" alt="World versus World icon" height={size} width={size} />;
            break;
        case "WvW Keep":
            icon = <Image src="/img/eventKeepIcon.png" aria-hidden="true" alt="World versus World icon" height={size} width={size} />;
            break;
        case "WvW Land Claimer":
            icon = <Image src="/img/eventFlagIcon.png" aria-hidden="true" alt="World vs World land claimer icon" height={size} width={size} />;
            break;
        case "WvW Tower":
            icon = <Image src="/img/eventTowerIcon.png" aria-hidden="true" alt="World versus World tower icon" height={size} width={size} />;
            break;
        case "WvW Veteran":
            icon = <Image src="/img/eventBossIcon.png" aria-hidden="true" alt="World versus World veteran icon" height={size} width={size} />;
            break;
        case "Fractal":
            icon = <Image src="/img/fractalIcon.png" aria-hidden="true" alt="Fractal icon" height={size} width={size} />;
            break;
        case "Fractals of the Mists":
            icon = <Image src="/img/fractalIcon.png" aria-hidden="true" alt="Fractal icon" height={size} width={size} />;
            break;
        case "WvW Camp":
            icon = <Image src="/img/eventCampIcon.png" aria-hidden="true" alt="World versus World Camp icon" height={size} width={size} />;
            break;
        case "Map":
            icon = <Image src="/img/worldCompletionIcon.png" aria-hidden="true" alt="World completion icon" height={size} width={size} />;
            break;

        default:
            icon = <Image src="/img/worldCompletionIcon.png" aria-hidden="true" alt="World completion icon" height={size} width={size} />;
            break;
    };
    return icon;
};