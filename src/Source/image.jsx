import { ImageWMS } from 'ol/source';

function image({ features }) {
	return new ImageWMS({
		features
	});
}

export default image;