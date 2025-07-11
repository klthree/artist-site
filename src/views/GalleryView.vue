<script setup lang="ts">
import { ref } from 'vue';
import ImageDetailView from './ImageDetailView.vue'; // Ensure this import is correct

type imgProps = {
    title: string;
    description: string;
}

const imageModules = import.meta.glob('@/assets/images/*.{jpg,jpeg,png}', { eager: true });
const images = (Object.values(imageModules) as { default: string }[]).map(mod => mod.default);
const selectedImage = ref<string | null>(null);
const imageDescriptions: Record<string, imgProps> = {
    // Add descriptions for images if needed
    'CTN_wheres-the-party-002': {
        title: 'Where?',
        description: 'I was told there would be cake.'
    },
    'CTN_mushroom-magician': {
        title: 'Mushroom Magician',
        description: 'Abraca-rabbit!\n\nA children\'s book illustration done digitally.'
    },
    'cat-face-2': {
        title: 'Caught',
        description: 'Colored pencil best captures the tactile details of a warm moment.'
    },
    'april-dino-cleaned': {
        title: 'Parasaurolophus walkeri',
        description: 'The technique of coquille board is part of the inheritance of medical and scientific illustration. The unique grain of the board collects pigment in such a way as to create a stipple effect that is readily reproducible in print.\n\nThis specimen was drawn from the collection at the Royal Ontario Museum.'
    },
    'axolotyl-2': {
        title: 'Axolotl',
        description: 'The mixed media medley of watercolors and sharpie marker worked well to bring out the contrast between delicate aquatic skin and pitch inky blackness.\nAxolotls are a neotenic salamander, meaning that as adults they retain characteristics of their young forms. When triggered by environmental changes, they can be induced to transform into the land-dwelling adult form, losing its frilly external gills. However the stress of this transformation shortens their lifespan. They can be kept as pets, and also come in earthy tones and speckles. They also have the power to regrow lost limbs! What can’t they do?'
    },
    'figure-drawing-walnut-ink_female-FIVE': {
        title: 'Figures in Walnut Ink',
        description: 'A series of poses quickly captured in ink washes. Walnut ink is a beautiful rich color.'
    },
    'cabbage-labels': {
        title: 'Brassica oleracea',
        description: 'Brassica oleracea, or ornamental kale, are both decorative AND edible (though bitter and better used as garnish). A detailed colored pencil treatment brings out their dense frills in this botany illustration.'
    },
    'birds-lineup-01': {
        title: 'Beak Morphology Poster Detail',
        description: 'A closer look at the animals: colored pencil and watercolor have the power to bring out the detail.'
    },
    'bird-poster': {
        title: 'Beak Morphology Poster',
        description: 'Informational poster designed to show examples of differences in beak morphology between birds adapted to different lifestyles and environments. For use in museum exhibit setting.'
    },
    'Brust_1': {
        title: '',
        description: 'This is the first of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.'
    },
    'Brust_2': {
        title: '',
        description: 'This is the second of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.'
    },
    'Brust_3': {
        title: '',
        description: 'This is the third of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.'
    },
    'fennec-fox-3': {
        title: 'Fennec Fox',
        description: 'Fennec foxes have giant ears that help them keep cool in the desert.'
    },
    'martial-arts-storyboard_1500px': {
        title: 'Take-Down',
        description: 'An instructional sequence depicting steps of a martial arts take-down.'
    },
    'lynx': {
        title: 'Lynx',
        description: "Mixed media (marker, colored pencil, pen, and PS).\nCanadian lynxes have gigantic furry feet that act as snowshoes."
    },
    'throat': {
        title: 'Pancoast Tumor Causing Horner\'s Syndrome',
        description: 'Horner\'s Syndrome is a condition that arises from damage to the nerves of the sympathetic trunk. This illustration shows one possible etiology, a Pancoast tumor growing from the apex of the lung, compressing the nerves in the thoracic outlet.'
    },
    'ready-for-my-closeup_750px': {
        title: 'Ready for my Close-up',
        description: 'A charcoal rendering on toned paper of a model in the studio.'
    },
    'two-and-a-half-garlic': {
        title: 'Two and a Half',
        description: 'A still life in oils done in the studio.'
    },
    'van-huysum': {
        title: 'After Jan van Huysum',
        description: 'A master copy of a still life by Dutch painter, van Huysum. This oil painting is on a 8” by 10” board.'
    },
    'surgical-cervlam-wm': {
        title: 'Cervical Laminectomy and Fusion',
        description: 'This page is part of a sequence depicting a series of surgeries: a C3/C4 laminectomy, foramen magnum decompression, expansile duraplasty, and occipitocervical posterior fusion. The patient had a history of nerve compression due to Chiari malformation, and had undergone multiple surgeries to address it. Scarring of the dural sac at the level of C1/C2 (lamina previously removed) is an obstacle in this surgery. This illustration is intended to instruct residents so concepts are clear before more is at stake in the operating room. Special cases like this one illustrate potential surgical complications and teach strategies to deal with challenging anatomy. This illustration was restricted to black and white and created as a sequential depiction of a specific surgical case. The goal is to clarify the surgical process in an accurate but clearly understandable manner. Anatomical accuracy is sought but extraneous information is removed so that students may focus on the process.'
    },
    'HONY_pink-hearts_700px_v2': {
        title: 'HONY Baby',
        description: 'This was done from a super cute baby from a Humans of New York post. I had to capture that beaming face!\nDone in Prismacolor and a little watercolor wash.'
    },
    'fish-face-test3-01-01': {
        title: 'Fish Wish',
        description: 'Inspired by Justin Richel, I adapted the theme to digital vector-work.'
    },
    'foot-wm': {
        title: 'Lateral View of Right Foot',
        description: 'Black and white linework is a staple of medical illustrative texts. Here a historic prosected sample from the JCB Grant Anatomy Museum at the University of Toronto is rendered in pen and ink, in the traditional style.'
    },
    'tree-frog-001': {
        title: 'Red-eyed tree frog',
        description: 'Pen and marker.\nRed-eyed tree frogs hide their colorful marks when they sleep, to blend in with the greenery. When predators threaten them, these frogs use the colored bits to startle and astonish, giving them the opportunity to leap away.'
    }
};

function getImageName(image: string): string {
    return image.split('/').pop()?.split('.')[0] || 'Unknown';
}

</script>

<template>
    <div class="gallery-grid">
        <div v-for="(image, idx) in images" :key="idx" >
            <img :src="image" alt="" @click="selectedImage = image" />
        </div>
        <ImageDetailView
            v-if="selectedImage"
            :image-src="selectedImage"
            :image-name="imageDescriptions[getImageName(selectedImage)].title || getImageName(selectedImage)"
            :image-description="imageDescriptions[getImageName(selectedImage)].description"
            @close="selectedImage = null"
        />
    </div>
</template>

<style scoped>
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr));
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    box-sizing: border-box;

    img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }
}
</style>