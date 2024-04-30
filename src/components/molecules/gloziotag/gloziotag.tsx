import React from 'react'
import LogoBadge from '../../atoms/ui/logobadge'
import styles from './gloziotag.module.scss'
import Link from 'next/link'

const Gloziotag = () => {
  return (
    <div className={styles.glozioTagContainer}>
      <Link href="/" className={styles.glozioTag}>

        <LogoBadge height='16' color='#fff' />
        <div className={styles.tagLabel}>
          .me
        </div>
      </Link>
    </div>
  )
}

export default Gloziotag;
