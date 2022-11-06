import { useState } from 'react'
import {home} from './directory/DirectoryHome';
import {away} from './directory/DirectoryAway';

import styles from './app.module.css'



function App() {
const [valueHome, setvalueHome ] = useState("");
const [valueAway, setvalueAway ] = useState("");
const [homeFormation, setHomeFormation ] = useState("");
const [awayFormation, setAwayFormation ] = useState("");
const [upDatedHome, setUpDatedHome ] = useState(valueHome);
const [upDatedHomeFormation, setUpDatedHomeFormation ] = useState(homeFormation);
const [upDatedAway, setUpDatedAway ] = useState(valueAway);
const [upDatedAwayFormation, setUpDatedAwayFormation ] = useState(awayFormation);
const [totalAvgHomeGoals, setTotalAvgHomeGoals ] = useState(0);
const [totalAvgHomeGoalsFormation, setTotalAvgHomeGoalsFormation ] = useState(0);
const [totalAvgAwayGoals, setTotalAvgAwayGoals ] = useState(0);
const [totalAvgAwayGoalsFormation, setTotalAvgAwayGoalsFormation ] = useState(0);
const [exactFormationTotalGoalsHome, setExactFormationTotalGoalsHome ] = useState(0);
const [exactFormationTotalGoalsAway, setExactFormationTotalGoalsAway ] = useState(0);
const [totalFormationCornersHome, setTotalFormationCornersHome ] = useState(0);
const [totalFormationCornersAway, setTotalFormationCornersAway ] = useState(0);
const [totalFormationFistHalfGoalsHome, setTotalFormationFistHalfGoalsHome ] = useState(0);
const [totalFormationFistHalfGoalsAway, setTotalFormationFistHalfGoalsAway ] = useState(0);
const [totalFormationSecondHalfGoalsHome, setTotalFormationSecondHalfGoalsHome ] = useState(0);
const [totalFormationSecondHalfGoalsAway, setTotalFormationSecondHalfGoalsAway ] = useState(0);



const handleChangeHome = (e) => {
  setvalueHome(e.target.value)  
}
const handleChangeAway = (e) => {     
  setvalueAway(e.target.value)     
} 
const handleChangeHomeFormation = (e) => {
  setHomeFormation(e.target.value)  
}

const handleChangeAwayFormation = (e) => {
  setAwayFormation(e.target.value)  
}

const handleSubmit = (e) => { 
  e.preventDefault();

  const handleClickHome = (e) => {
    
    setUpDatedHome(valueHome)   
  
    const avgHomeTotalGoals = () => {
      let avgHomeGoals = []
      
      
      home.map(match =>  {
      
      if (upDatedHome === match.team) {
      avgHomeGoals.push(match.total_goals)
    
    const totalAvgHomeGoals = avgHomeGoals.reduce((a, b) => a + b) / avgHomeGoals.length
      
    setTotalAvgHomeGoals(totalAvgHomeGoals)
  }})
    }
    avgHomeTotalGoals()
  }

  handleClickHome()
  
  const handleClickHomeformation = (e) => {
    
    setUpDatedHomeFormation(homeFormation)   
  
    const avgHomeTotalGoalsFormation = () => {
      let avgHomeGoalsFormation = []
      
      
      home.map(match =>  {
      
      if (homeFormation === match.formation) {
        avgHomeGoalsFormation.push(match.total_goals)
       
        
     
    const totalAvgHomeGoalsFormation = avgHomeGoalsFormation.reduce((a, b) => a + b) / avgHomeGoalsFormation.length
      
     console.log(totalAvgHomeGoalsFormation);
     setTotalAvgHomeGoalsFormation(totalAvgHomeGoalsFormation)
  }})
    }
    avgHomeTotalGoalsFormation()
  }
  
  handleClickHomeformation()
  
  const handleClickAway = (e) => {
    
    setUpDatedAway(valueAway)
  
    const avgAwayTotalGoals = () => {
      let avgAwayGoals = []
      
      
      away.map(match =>  {
      
      if (upDatedAway === match.team) {
      avgAwayGoals.push(match.total_goals)
     
    const totalAvgAwayGoals = avgAwayGoals.reduce((a, b) => a + b) / avgAwayGoals.length
      
     console.log(totalAvgAwayGoals);
    return setTotalAvgAwayGoals(totalAvgAwayGoals)
     
      
  }})
    
  
    }
    
    avgAwayTotalGoals()
    
  }
  handleClickAway()

  const exactHomeFormationTotalAvgGoals = () => {
    let avgHomeGoalsFormationExact = []
      
      
    home.map(match =>  {
    
    if (homeFormation === match.formation && awayFormation === match.opp_formation) {
      avgHomeGoalsFormationExact.push(match.total_goals)
     
      
   
  const exactFormationTotalGoalsHome = avgHomeGoalsFormationExact.reduce((a, b) => a + b) / avgHomeGoalsFormationExact.length
    
   console.log(exactFormationTotalGoalsHome);
   setExactFormationTotalGoalsHome(exactFormationTotalGoalsHome)
}})
  }
  exactHomeFormationTotalAvgGoals()


  const exactAwayFormationTotalAvgGoals = () => {
    let avgAwayGoalsFormationExact = []
      
      
    away.map(match =>  {
    
    if (awayFormation === match.formation && homeFormation === match.opp_formation) {
      avgAwayGoalsFormationExact.push(match.total_goals)
     
      
   
  const exactFormationTotalGoalsAway = avgAwayGoalsFormationExact.reduce((a, b) => a + b) / avgAwayGoalsFormationExact.length
    
   console.log(exactFormationTotalGoalsAway);
   setExactFormationTotalGoalsAway(exactFormationTotalGoalsAway)
}})
  }
  exactAwayFormationTotalAvgGoals()
  
  
  const handleClickAwayFormation = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
  
    const avgAwayTotalGoalsFormation = () => {
      let avgAwayGoalsFormation = []
      
      
      away.map(match =>  {
      
      if (awayFormation === match.formation) {
      avgAwayGoalsFormation.push(match.total_goals)
     console.log(avgAwayGoalsFormation);
    const totalAvgAwayGoalsFormation = avgAwayGoalsFormation.reduce((a, b) => a + b) / avgAwayGoalsFormation.length
      
     console.log(totalAvgAwayGoalsFormation);
    return setTotalAvgAwayGoalsFormation(totalAvgAwayGoalsFormation)
     
      
  }})
    
  
    }
    
    avgAwayTotalGoalsFormation()
    
  }
  handleClickAwayFormation()



  const handleClickHomeCorners = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const exactHomeFormationTotalcorners = () => {
      let avgHomecorners = []
      
      
      home.map(match =>  {
    
        if (homeFormation === match.formation && awayFormation === match.opp_formation) {
          avgHomecorners.push(match.corners)
         
          
       
      const totalFormationCornersHome = avgHomecorners.reduce((a, b) => a + b) / avgHomecorners.length
        
       console.log(totalFormationCornersHome);
       setTotalFormationCornersHome(totalFormationCornersHome)
    }})
      }
      exactHomeFormationTotalcorners()
    
  
    
  }
  handleClickHomeCorners()



  const handleClickAwayCorners = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
  
    const exactAwayFormationTotalcorners = () => {
      let avgAwayCorners = []
      
      
      away.map(match =>  {
    
        if (awayFormation === match.formation && homeFormation === match.opp_formation) {
          avgAwayCorners.push(match.corners)
         
          
       
      const totalFormationCornersAway = avgAwayCorners.reduce((a, b) => a + b) / avgAwayCorners.length
        
       console.log(totalFormationCornersAway);
       setTotalFormationCornersAway(totalFormationCornersAway)
    }})
      }
      exactAwayFormationTotalcorners()
    
  
    
  }
  handleClickAwayCorners()
  
 











  const handleClickfirstHalfGoalsHome = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const exactHomeFistHalfGoals = () => {
      let avgfirstHalfGoal = []
      
      
      home.map(match =>  {
    
        if (homeFormation === match.formation && awayFormation === match.opp_formation) {
          avgfirstHalfGoal.push(match.first_half_goals)
         
          
       
      const totalFormationFistHalfGoalsHome = avgfirstHalfGoal.reduce((a, b) => a + b) / avgfirstHalfGoal.length
        
       console.log(totalFormationFistHalfGoalsHome);
       setTotalFormationFistHalfGoalsHome(totalFormationFistHalfGoalsHome)
    }})
      }
      exactHomeFistHalfGoals()
    
  
    
  }
  handleClickfirstHalfGoalsHome()



  const handleClickfirstHalfGoalsAway = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
  
    const exactAwayFistHalfGoals = () => {
      let avgAwayFistHalfGoals  = []
      
      
      away.map(match =>  {
    
        if (awayFormation === match.formation && homeFormation === match.opp_formation) {
          avgAwayFistHalfGoals.push(match.first_half_goals)
         
          
       
      const totalFormationFistHalfGoalsAway = avgAwayFistHalfGoals.reduce((a, b) => a + b) / avgAwayFistHalfGoals.length
        
       console.log(totalFormationFistHalfGoalsAway);
       setTotalFormationFistHalfGoalsAway(totalFormationFistHalfGoalsAway)
    }})
      }
      exactAwayFistHalfGoals()
    
  
    
  }
  handleClickfirstHalfGoalsAway()













  const handleClickSecondHalfGoalsHome = (e) => {
  
    setUpDatedHomeFormation(homeFormation)
  
    const exactHomeSecondHalfGoals = () => {
      let avgSecondHalfGoal = []
      
      
      home.map(match =>  {
    
        if (homeFormation === match.formation && awayFormation === match.opp_formation) {
          avgSecondHalfGoal.push(match.second_half_goals)
         
          
       
      const totalFormationSecondHalfGoalsHome = avgSecondHalfGoal.reduce((a, b) => a + b) / avgSecondHalfGoal.length
        
       console.log(totalFormationSecondHalfGoalsHome);
       setTotalFormationSecondHalfGoalsHome(totalFormationSecondHalfGoalsHome)
    }})
      }
      exactHomeSecondHalfGoals()
    
  
    
  }
  handleClickSecondHalfGoalsHome()



  const handleClickSecondHalfGoalsAway = (e) => {
  
    setUpDatedAwayFormation(awayFormation)
  
    const exactAwaySecondHalfGoals = () => {
      let avgAwaySecondHalfGoals  = []
      
      
      away.map(match =>  {
    
        if (awayFormation === match.formation && homeFormation === match.opp_formation) {
          avgAwaySecondHalfGoals.push(match.second_half_goals)
         
          
       
      const totalFormationSecondHalfGoalsAway = avgAwaySecondHalfGoals.reduce((a, b) => a + b) / avgAwaySecondHalfGoals.length
        
       console.log(totalFormationSecondHalfGoalsAway);
       setTotalFormationSecondHalfGoalsAway(totalFormationSecondHalfGoalsAway)
    }})
      }
      exactAwaySecondHalfGoals()
    
  
    
  }
  handleClickSecondHalfGoalsAway()



}




  return (
    <div>
      <form action="submit" onClick={handleSubmit}>
        <input type="text" onChange={handleChangeHome} value={valueHome}/>
        <input type="text" onChange={handleChangeAway} value={valueAway} />
        <input type="text" onChange={handleChangeHomeFormation} value={homeFormation} />
        <input type="text" onChange={handleChangeAwayFormation} value={awayFormation} />
      
        <button>submit</button>
      </form>
      <div className={styles.teams}>
        <h2>{upDatedHome}</h2>
        <h2>{upDatedAway}</h2>
      </div>
      <div className={styles.totalAverage} >
      {totalAvgHomeGoals} Total Average goals {totalAvgAwayGoals}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalAvgHomeGoalsFormation} Total Average Formation goals {totalAvgAwayGoalsFormation}
      </div>
      <div className={styles.totalAverageFormation} >
      {exactFormationTotalGoalsHome} Total Average exact formation goals {exactFormationTotalGoalsAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalFormationCornersHome} Total Average Corners {totalFormationCornersAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalFormationFistHalfGoalsHome} Total Average 1st Half Goals {totalFormationFistHalfGoalsAway}
      </div>
      <div className={styles.totalAverageFormation} >
      {totalFormationSecondHalfGoalsHome} Total Average 2nd Half Goals {totalFormationSecondHalfGoalsAway}
      </div>
        
    </div>
  );
}

export default App;
