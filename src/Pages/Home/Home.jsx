import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import Layout from '../../Layout/Layout'
import styles from './Home.module.scss'
import { JobsContext } from '../../Context/Job-list'
import Container from '../../Layout/Container/Container'
import Jobs from '../../Component/Jobs'

function Home() {
  const { finalMap } = useContext(JobsContext)
  return (
    <div>
      <Layout>
        <motion.div layout className={`${styles.home}`}>
          <Container>
            <div className={styles.posts}>
              {finalMap &&
                finalMap.map((jobs) => {
                  return <Jobs key={jobs.id} jobs={jobs} />
                })}
            </div>
          </Container>
        </motion.div>
      </Layout>
    </div>
  )
}

export default Home
