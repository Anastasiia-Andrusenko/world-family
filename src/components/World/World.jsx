
// import PropTypes from 'prop-types';
import classNames from 'classnames'
import css from '../World/World.module.css';

export const World = () => {
  return <div className={css.layout}>
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
</div>
};