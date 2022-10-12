import DailySelectContainer from "./DailySelectContainer";
export default function Drawer({dailies}){
    return(
          <div>
            <DailySelectContainer categoryName="PvE" dailies={dailies}/>
          </div>
    )
  
}