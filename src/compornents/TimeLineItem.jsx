import '../styles/App.css';

function TimelineItem({data}) {
  
  const base_time = new Date()
  const Target_time = base_time.setTime(data.target_time)
  const Result_time = base_time.setTime(data.result_time)
  
  const def_time= (Result_time-Target_time)/1000

  return (
    <div className='timeline-item' >
      <h3>
        {data.name}
      </h3>
      <p>
        {def_time/3600|0}時間{def_time%3600/60|0}分 寝坊!!
      </p>
    </div>
  )
}

export default TimelineItem
