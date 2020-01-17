import ImageViewer from './ImageViewer.vue';
import VideoViewer from './VideoViewer.vue';
import AudioViewer from './AudioViewer.vue';

const mapper = new Map();
const imagesExt = ['png', 'jpg', 'jpeg'];
const videoExt = ['mp4', 'flv'];
const audioExt = ['mp3', 'ogg'];

for (const ext of imagesExt) {
    mapper.set(ext, ImageViewer);
}

for (const ext of videoExt) {
    mapper.set(ext, VideoViewer);
}

for (const ext of audioExt) {
    mapper.set(ext, AudioViewer);
}

export default {
    hasExtViewer(ext) {
        return mapper.has(ext);
    },
    getExtViewer(ext) {
        return mapper.get(ext);
    }
};