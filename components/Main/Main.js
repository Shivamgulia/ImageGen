import React, { Fragment } from 'react';
import Link from 'next/link';

import Sliders from '../Sliders/js/index';
import { motion } from 'framer-motion';

import styles from './Main.module.css';

function Main() {
  return (
    <Fragment>
      <div className={`${styles.Cont}`}>
        <motion.div
          className={`${styles.HeadCont}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
          }}
        >
          <h1>WordArtGen</h1>
        </motion.div>
        <div className={`${styles.buttonDiv}`}>
          <Link className={`${styles.LinkButton}`}>Try For Your Self</Link>
        </div>
        <Sliders />
      </div>
    </Fragment>
  );
}

export default Main;
