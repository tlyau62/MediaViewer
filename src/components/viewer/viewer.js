import ImageViewer from './ImageViewer.vue';
import VideoViewer from './VideoViewer.vue';

const mapper = new Map();
const imagesExt = ['png', 'jpg', 'jpeg'];
const videoExt = ['mp4', 'flv'];

for (const ext of imagesExt) {
    mapper.set(ext, ImageViewer);
}

for (const ext of videoExt) {
    mapper.set(ext, VideoViewer);
}

export default {
    hasExtViewer(ext) {
        return mapper.has(ext);
    },
    getExtViewer(ext) {
        return mapper.get(ext);
    }
};