import { useEffect, useState } from 'react'

const Time = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    function updateDateAndTime() {
      setDate(new Date())
    }
    setInterval(updateDateAndTime, 1000)
  }, [])

  return (
    <div>
      <h1>Время:</h1>
      <h2>{date.toLocaleTimeString('ru-RU')}</h2>
      <h1>Дата:</h1>
      <h2>{date.toLocaleDateString('ru-RU')}</h2>
    </div>
  )
}

export default Time
