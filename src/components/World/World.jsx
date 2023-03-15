
// import PropTypes from 'prop-types';
import classNames from 'classnames'
import { Link } from 'react-router-dom';
import css from '../World/World.module.css';

import { motion } from "framer-motion";

export const World = () => {
	return <>
		<h1 className={css.main_title}>
			<div className={css.header}>
				<motion.div
			  initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, delay: 0 }}>
				Your
			</motion.div>
			<motion.div
			  initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, delay: 0.6 }}>
				family
				</motion.div>
				<motion.div
			  initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, delay: 0.8 }}>
				is
			</motion.div>
			</div>
			<div className={css.header}>
			<motion.div
			  initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, delay: 1.2 }}>
				everywhere
			</motion.div>
			<motion.div
			  initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.5, delay: 1.8 }}>
				!
			</motion.div>
			</div>
		</h1>
		<h2 className={css.secondary_title}>
			<motion.div
			  initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2, delay: 3 }}>
				Click on the Planet for more details
			</motion.div></h2>
		<div className={css.layout}>
			<p className=''></p>
			<Link to='/family'>
				<motion.div
					initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 5, delay: 2 }}>
					<div className={css.planet}>
					<div className={css.planet__day}></div>
					<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={css.planet__night}>
			    <defs>
			    	<filter id="planet-blur">
			    		<feGaussianBlur stdDeviation="1" />
			    	</filter>
			    	<mask id="planet-phases">
			    		<g transform="rotate(25, 50, 50)">
			    			<rect className={css.planet__backdrop} x="0" width="100" height="100" fill="#000" />
			    			<circle className={css.planet__backdrop} cx="50" cy="50" r="50" fill="#fff" />
			    			<g filter="url(#planet-blur)">
			    				<rect className={css.planet__flipper} x="0" width="50" height="100" fill="#000" />
                    <circle className={classNames(css.planet__spinner, css.planet__spinner__day)} cx="50" cy="50" r="50" fill="#fff" />
                    <circle className={classNames(css.planet__spinner, css.planet__spinner__night)} cx="50" cy="50" r="50" fill="#000" />
			    			</g>
			    		</g>
			    	</mask>
			    	<pattern id="planet-night" x="0" y="0" patternUnits="userSpaceOnUse" height="100" width="200">
			    		<image className={css.planet__night_image} x="0" y="0" height="100" width="200" href="http://www.shadedrelief.com/natural3/images/night.jpg"></image>
			    		<image className={css.planet__night_image} x="-199" y="0" height="100" width="200" href="http://www.shadedrelief.com/natural3/images/night.jpg"></image>
			    	</pattern>
			    </defs>
			    <circle cx="50" cy="50" r="50" mask="url(#planet-phases)" fill="url(#planet-night)" />
		      </svg>
	      </div>
				</motion.div>
			</Link>
</div>
	</>
};