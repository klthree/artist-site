<script setup lang="ts">
import { ref, type Ref } from 'vue';
import ImageDetailView from './ImageDetailView.vue';
import { useRoute } from 'vue-router';
// import lightGallery from 'lightgallery';

type imgProps = {
    title: string;
    description: string;
    tags: string[];
    isHovered: Ref<boolean>;
}

const route = useRoute();
const isHovering = ref(true);
const imageModules = import.meta.glob('@/assets/images/*.{jpg,jpeg,png}', { eager: true });

const imageDescriptions: Record<string, imgProps> = {
    
    'CTN_wheres-the-party-002': {
        title: 'Where?',
        description: 'I was told there would be cake.',
        tags: ['fineart', 'editorial', 'home'],
        isHovered: ref(false)
    },
    'CTN_mushroom-magician': {
        title: 'Mushroom Magician',
        description: 'Abraca-rabbit!\n\nA children\'s book illustration done digitally.',
        tags: ['fineart', 'editorial', 'home'],
        isHovered: ref(false)
    },
    'cat-face-2': {
        title: 'Caught',
        description: 'Colored pencil best captures the tactile details of a warm moment.',
        tags: ['fineart', 'home'],
        isHovered: ref(false)
    },
    'april-dino-cleaned': {
        title: 'Parasaurolophus walkeri',
        description: 'The technique of coquille board is part of the inheritance of medical and scientific illustration. The unique grain of the board collects pigment in such a way as to create a stipple effect that is readily reproducible in print.\n\nThis specimen was drawn from the collection at the Royal Ontario Museum.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'axolotyl-2': {
        title: 'Axolotl',
        description: 'The mixed media medley of watercolors and sharpie marker worked well to bring out the contrast between delicate aquatic skin and pitch inky blackness.\nAxolotls are a neotenic salamander, meaning that as adults they retain characteristics of their young forms. When triggered by environmental changes, they can be induced to transform into the land-dwelling adult form, losing its frilly external gills. However the stress of this transformation shortens their lifespan. They can be kept as pets, and also come in earthy tones and speckles. They also have the power to regrow lost limbs! What can’t they do?',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'figure-drawing-walnut-ink_female-FIVE': {
        title: 'Figures in Walnut Ink',
        description: 'A series of poses quickly captured in ink washes. Walnut ink is a beautiful rich color.',
        tags: ['fineart', 'home'],
        isHovered: ref(false)
    },
    'cabbage-labels': {
        title: 'Brassica oleracea',
        description: 'Brassica oleracea, or ornamental kale, are both decorative AND edible (though bitter and better used as garnish). A detailed colored pencil treatment brings out their dense frills in this botany illustration.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'birds-lineup-01': {
        title: 'Beak Morphology Poster Detail',
        description: 'A closer look at the animals: colored pencil and watercolor have the power to bring out the detail.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'bird-poster': {
        title: 'Beak Morphology Poster',
        description: 'Informational poster designed to show examples of differences in beak morphology between birds adapted to different lifestyles and environments. For use in museum exhibit setting.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'Brust_1': {
        title: '',
        description: 'This is the first of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'Brust_2': {
        title: '',
        description: 'This is the second of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'Brust_3': {
        title: '',
        description: 'This is the third of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'fennec-fox-3': {
        title: 'Fennec Fox',
        description: 'Fennec foxes have giant ears that help them keep cool in the desert.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'martial-arts-storyboard_1500px': {
        title: 'Take-Down',
        description: 'An instructional sequence depicting steps of a martial arts take-down.',
        tags: ['fineart', 'home'],
        isHovered: ref(false)
    },
    'lynx': {
        title: 'Lynx',
        description: "Mixed media (marker, colored pencil, pen, and PS).\nCanadian lynxes have gigantic furry feet that act as snowshoes.",
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'throat': {
        title: 'Pancoast Tumor Causing Horner\'s Syndrome',
        description: 'Horner\'s Syndrome is a condition that arises from damage to the nerves of the sympathetic trunk. This illustration shows one possible etiology, a Pancoast tumor growing from the apex of the lung, compressing the nerves in the thoracic outlet.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'ready-for-my-closeup_750px': {
        title: 'Ready for my Close-up',
        description: 'A charcoal rendering on toned paper of a model in the studio.',
        tags: ['fineart', 'home'],
        isHovered: ref(false)
    },
    'two-and-a-half-garlic': {
        title: 'Two and a Half',
        description: 'A still life in oils done in the studio.',
        tags: ['fineart', 'home'],
        isHovered: ref(false)
    },
    'van-huysum': {
        title: 'After Jan van Huysum',
        description: 'A master copy of a still life by Dutch painter, van Huysum. This oil painting is on a 8” by 10” board.',
        tags: ['fineart', 'home'],
        isHovered: ref(false)
    },
    'surgical-cervlam-wm': {
        title: 'Cervical Laminectomy and Fusion',
        description: 'This page is part of a sequence depicting a series of surgeries: a C3/C4 laminectomy, foramen magnum decompression, expansile duraplasty, and occipitocervical posterior fusion. The patient had a history of nerve compression due to Chiari malformation, and had undergone multiple surgeries to address it. Scarring of the dural sac at the level of C1/C2 (lamina previously removed) is an obstacle in this surgery. This illustration is intended to instruct residents so concepts are clear before more is at stake in the operating room. Special cases like this one illustrate potential surgical complications and teach strategies to deal with challenging anatomy. This illustration was restricted to black and white and created as a sequential depiction of a specific surgical case. The goal is to clarify the surgical process in an accurate but clearly understandable manner. Anatomical accuracy is sought but extraneous information is removed so that students may focus on the process.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'HONY_pink-hearts_700px_v2': {
        title: 'HONY Baby',
        description: 'This was done from a super cute baby from a Humans of New York post. I had to capture that beaming face!\nDone in Prismacolor and a little watercolor wash.',
        tags: ['fineart', 'home'],
        isHovered: ref(false)
    },
    'fish-face-test3-01-01': {
        title: 'Fish Wish',
        description: 'Inspired by Justin Richel, I adapted the theme to digital vector-work.',
        tags: ['fineart', 'editorial', 'home'],
        isHovered: ref(false)
    },
    'foot-wm': {
        title: 'Lateral View of Right Foot',
        description: 'Black and white linework is a staple of medical illustrative texts. Here a historic prosected sample from the JCB Grant Anatomy Museum at the University of Toronto is rendered in pen and ink, in the traditional style.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    },
    'tree-frog-001': {
        title: 'Red-eyed tree frog',
        description: 'Pen and marker.\nRed-eyed tree frogs hide their colorful marks when they sleep, to blend in with the greenery. When predators threaten them, these frogs use the colored bits to startle and astonish, giving them the opportunity to leap away.',
        tags: ['science', 'home'],
        isHovered: ref(false)
    }
};
const images = () => Object.keys(imageModules)
    .filter(imagePath => Object.keys(imageDescriptions).includes(getImageName(imagePath)) && imageDescriptions[getImageName(imagePath)].tags.includes(route.params['category'] as string))

        
const homeImage = ref<string | null>(null);
const showTitle = ref(false);
function getImageName(image: string): string {
    return image.split('/').pop()?.split('.')[0] || 'Unknown';
}


</script>

<template>
    <div class="gallery-grid">
        <!-- <lightGallery :settings="{ speed: 500, plugins: plugins}"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide">
    </lightGallery> -->
        <div v-for="(image, idx) in images()" :key="idx" >
            <v-hover v-slot="{ isHovering }">
            <div class="cell">
                <!-- <img :src="image" alt="" 
                    @click="homeImage = image" 
                    @mouseover="imageDescriptions[getImageName(image)].isHovered.value = true"
                    @mouseleave="imageDescriptions[getImageName(image)].isHovered.value = false"
                    class="image"/> -->
                <img :src="image" alt=""
                    @click="homeImage = image" 
                    @mouseover="imageDescriptions[getImageName(image)].isHovered.value = true"
                    @mouseleave="imageDescriptions[getImageName(image)].isHovered.value = false"
                    
                    :class="{ 'dimmed': imageDescriptions[getImageName(image)].isHovered.value }"
                    />
                <div
                    v-if="imageDescriptions[getImageName(image)].isHovered.value"
                    class="overlay-text"
                >{{imageDescriptions[getImageName(image)].title}}</div>
                <!-- <div class="title" v-show="true">
                    {{imageDescriptions[getImageName(image)].title}}
                </div> -->
            </div>
            </v-hover>
        </div>
        <ImageDetailView
            v-if="homeImage"
            :image-src="homeImage"
            :image-name="imageDescriptions[getImageName(homeImage)].title || getImageName(homeImage)"
            :image-description="imageDescriptions[getImageName(homeImage)].description"
            @close="homeImage = null"
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
}

.cell {
    position: relative;
    display: grid;
}
.cell:hover img {
    cursor: pointer;
}
img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    grid-area: 1/1;
}
.title {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    grid-area: 1/1;
    justify-self: center;
    align-self: center;
}
.dimmed {
    filter: brightness(0.2);
    transition: filter 0.2s;
}
.overlay-text {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    pointer-events: none;
}
</style>