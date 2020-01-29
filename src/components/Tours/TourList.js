import React, { useState, useEffect } from "react"
import Tour from "./Tour"
import Title from "../Title"
import styles from "../../css/items.module.css"

const TourList = ({ tours }) => {
  const [state, setState] = useState({ tours: [], sortedTours: [] })

  useEffect(() => {
    setState(state => ({
      ...state,
      tours: tours,
      sortedTours: tours,
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {state.sortedTours.map(tour => (
          <Tour key={tour.node.contentful_id} singleTour={tour} />
        ))}
      </div>
    </section>
  )
}

export default TourList
