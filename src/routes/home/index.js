import { h } from 'preact';
import Carousel from 'react-multi-carousel';
import data from "../../components/locations/locations.json";
import styles from './home.css';
import 'react-multi-carousel/lib/styles.css';
import LocationCard from '../../components/LocationCard/LocationCard';

import RightArrow from "../../assets/images/arrow-right.svg";
import LeftArrow from "../../assets/images/arrow-left.svg";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		centerMode: true,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		centerMode: false,
	}
};

const CustomRightArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType }
	} = rest;
	// onMove means if dragging or swiping in progress.
	return <button class={styles.arrowRight} onClick={() => onClick()}><img src={RightArrow} /></button>;
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType }
	} = rest;
	// onMove means if dragging or swiping in progress.
	return <button class={styles.arrowLeft} onClick={() => onClick()}><img src={LeftArrow} /></button>;
};

let locations = Array.from(data.locations);

const Home = () => (
	<div class={styles.home}>
		<h1>For the joy of glamping.</h1>
		<Carousel
			responsive={responsive}
			infinite={true}
			// centerMode={true}
			keyBoardControl={true}
			containerClass={styles.carousel}
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"
			customRightArrow={<CustomRightArrow />}
			customLeftArrow={<CustomLeftArrow />}
		>
			{locations.map(location => {
				return <LocationCard
					key={location.id}
					name={location.name}
					type={location.type}
					city={location.city}
					state={location.state}
					image={location.image}
					beds={location.beds}
					baths={location.baths}
					guests={location.guests}
					links={Array.from(location.links)}
				/>
			})}
		</Carousel>
	</div>
);

export default Home;
