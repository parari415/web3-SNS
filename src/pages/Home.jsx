import '../styles/App.css'
import TimeLine from '../compornents/TimeLine'

function Home({baseData,saveBox}) {
  return (
    <>
    <div className='main'>
      <TimeLine baseData={baseData} saveBox={saveBox}/>
    </div>
    </>
  )
}

export default Home
