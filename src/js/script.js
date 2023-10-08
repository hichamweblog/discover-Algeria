// PhotoSwipe
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
	gallery: '#my-gallery',
	children: 'a',
	pswpModule: () => import('photoswipe'),
});

lightbox.init();

// AOS Animations

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
