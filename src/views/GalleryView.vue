<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue';
import ImageDetailView from './ImageDetailView.vue';
import { useRoute } from 'vue-router';

type imgProps = {
    title: string;
    description: string;
    tags: string[];
    isHovered: Ref<boolean>;
}

const route = useRoute();
const imageModules = import.meta.glob('@/assets/images/*.{jpg,jpeg,png,gif}', { eager: true });

const imageDescriptions: Record<string, imgProps> = {
    
    'CTN_wheres-the-party-002': {
        title: 'Where?',
        description: 'I was told there would be cake.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'CTN_mushroom-magician': {
        title: 'Mushroom Magician',
        description: 'Abraca-rabbit!\n\nA children\'s book illustration done digitally.',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'cat-face-2': {
        title: 'Caught',
        description: 'Colored pencil best captures the tactile details of a warm moment.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'april-dino-cleaned': {
        title: 'Parasaurolophus walkeri',
        description: 'The technique of coquille board is part of the inheritance of medical and scientific illustration. The unique grain of the board collects pigment in such a way as to create a stipple effect that is readily reproducible in print.\n\nThis specimen was drawn from the collection at the Royal Ontario Museum.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'axolotyl-2': {
        title: 'Axolotl',
        description: 'The mixed media medley of watercolors and sharpie marker worked well to bring out the contrast between delicate aquatic skin and pitch inky blackness.\nAxolotls are a neotenic salamander, meaning that as adults they retain characteristics of their young forms. When triggered by environmental changes, they can be induced to transform into the land-dwelling adult form, losing its frilly external gills. However the stress of this transformation shortens their lifespan. They can be kept as pets, and also come in earthy tones and speckles. They also have the power to regrow lost limbs! What can’t they do?',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'figure-drawing-walnut-ink_female-FIVE': {
        title: 'Figures in Walnut Ink',
        description: 'A series of poses quickly captured in ink washes. Walnut ink is a beautiful rich color.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'cabbage-labels': {
        title: 'Brassica oleracea',
        description: 'Brassica oleracea, or ornamental kale, are both decorative AND edible (though bitter and better used as garnish). A detailed colored pencil treatment brings out their dense frills in this botany illustration.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'birds-lineup-01': {
        title: 'Beak Morphology Poster Detail',
        description: 'A closer look at the animals: colored pencil and watercolor have the power to bring out the detail.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'bird-poster': {
        title: 'Beak Morphology Poster',
        description: 'Informational poster designed to show examples of differences in beak morphology between birds adapted to different lifestyles and environments. For use in museum exhibit setting.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'Brust_1': {
        title: 'Fetal Positions Prior to Delivery',
        description: 'This is the first of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'Brust_2': {
        title: 'The Delivery',
        description: 'This is the second of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'Brust_3': {
        title: 'Cephalopelvic Disproportion & Fracture',
        description: 'This is the third of a three-panel panel poster series for presentation in court during a medical malpractice case. The work communicates the medical reasoning behind the defense’s case that the injury during delivery was unavoidable and did not constitute malpractice. This series was recognized with an award of excellence by the Association of Medical Illustrators.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'fennec-fox-3': {
        title: 'Fennec Fox',
        description: 'Fennec foxes have giant ears that help them keep cool in the desert.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'martial-arts-storyboard_1500px': {
        title: 'Take-Down',
        description: 'An instructional sequence depicting steps of a martial arts take-down.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'lynx': {
        title: 'Lynx',
        description: "Mixed media (marker, colored pencil, pen, and PS).\nCanadian lynxes have gigantic furry feet that act as snowshoes.",
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'throat': {
        title: 'Pancoast Tumor Causing Horner\'s Syndrome',
        description: 'Horner\'s Syndrome is a condition that arises from damage to the nerves of the sympathetic trunk. This illustration shows one possible etiology, a Pancoast tumor growing from the apex of the lung, compressing the nerves in the thoracic outlet.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'ready-for-my-closeup_750px': {
        title: 'Ready for my Close-up',
        description: 'A charcoal rendering on toned paper of a model in the studio.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'two-and-a-half-garlic': {
        title: 'Two and a Half',
        description: 'A still life in oils done in the studio.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'van-huysum': {
        title: 'After Jan van Huysum',
        description: 'A master copy of a still life by Dutch painter, van Huysum. This oil painting is on a 8” by 10” board.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'surgical-cervlam-wm': {
        title: 'Cervical Laminectomy and Fusion',
        description: 'This page is part of a sequence depicting a series of surgeries: a C3/C4 laminectomy, foramen magnum decompression, expansile duraplasty, and occipitocervical posterior fusion. The patient had a history of nerve compression due to Chiari malformation, and had undergone multiple surgeries to address it. Scarring of the dural sac at the level of C1/C2 (lamina previously removed) is an obstacle in this surgery. This illustration is intended to instruct residents so concepts are clear before more is at stake in the operating room. Special cases like this one illustrate potential surgical complications and teach strategies to deal with challenging anatomy. This illustration was restricted to black and white and created as a sequential depiction of a specific surgical case. The goal is to clarify the surgical process in an accurate but clearly understandable manner. Anatomical accuracy is sought but extraneous information is removed so that students may focus on the process.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'HONY_pink-hearts_700px_v2': {
        title: 'HONY Baby',
        description: 'This was done from a super cute baby from a Humans of New York post. I had to capture that beaming face!\nDone in Prismacolor and a little watercolor wash.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'fish-face-test3-01-01': {
        title: 'Fish Wish',
        description: 'Inspired by Justin Richel, I adapted the theme to digital vector-work.',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'foot-wm': {
        title: 'Lateral View of Right Foot',
        description: 'Black and white linework is a staple of medical illustrative texts. Here a historic prosected sample from the JCB Grant Anatomy Museum at the University of Toronto is rendered in pen and ink, in the traditional style.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'tree-frog-001': {
        title: 'Red-eyed tree frog',
        description: 'Pen and marker.\nRed-eyed tree frogs hide their colorful marks when they sleep, to blend in with the greenery. When predators threaten them, these frogs use the colored bits to startle and astonish, giving them the opportunity to leap away.',
        tags: ['editorial'],
        isHovered: ref(false)
    },
    'AprilBrust_1_Asking_For_My_First_Instrument-blue': {
        title: 'Asking For My First Instrument',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_3_Against_the_whir_and_whine': {
        title: 'Against the Whir and Whine',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_6_Dislike_Patient_crop': {
        title: 'Dislike Patient',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_10_ShiftwithDeath': {
        title: 'Shift With Death',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_13_horror_hands': {
        title: 'Horror Hands',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_13_horror_mouth_edit': {
        title: 'Horror Mouth',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_19_touch_of_humanity_3_small_file': {
        title: 'Touch of Humanity',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_27_conference': {
        title: 'Conference',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_30_dropandpop_crop': {
        title: 'Drop and Pop',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_31_escape_abusive_medicine_triangle': {
        title: 'Escape Abusive Medicine',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_36_FirstDelivery': {
        title: 'First Delivery',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_37_first_cry_solo_crop-no-tears': {
        title: 'First Cry',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_39_gunviolence': {
        title: 'Gun Violence',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_40_Glitter_Black_GIF': {
        title: 'Glitter',
        description: '',
        tags: ['animation', 'editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_43_Thought_you_were_help': {
        title: 'Help',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_45last_stab_bloody_crop': {
        title: 'Last Stab',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_47_lost_breath_GIF': {
        title: 'Lost Breath',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_64_Contest-woodworking': {
        title: 'Woodworking',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_70_Rural_Medicine_1-stethoscope_road': {
        title: 'Stethoscope Road',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_74_Physician_self_care_2-lakeside': {
        title: 'Lakeside',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_81_Minorities_in_Medicine_-_pie_chart_minority': {
        title: 'Minorities in Medicine',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_83_Dark_side_of_hospital_design': {
        title: 'Dark Side of Hospital Design',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_85_Religion_in_med': {
        title: 'Religion in Medicine',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_87_Your_Patient_Read_3_-_worried_patient_phone': {
        title: 'Worried Patient',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_92_Ad_writing_scrubs': {
        title: 'Ad Scrubs',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_93_COVID_hug_in_PPE': {
        title: 'COVID Hug',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_94_hospital_ranking': {
        title: 'Hospital Ranking',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_96_racial_injustice': {
        title: 'Racial Injustice',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_99_Spotify_hiphop_cover': {
        title: 'HipHop Cover',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_101_MEDHUM-google_form_banner': {
        title: 'Med Hum',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_102_patient_connection': {
        title: 'Patient Connection',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_103_animals_in_medicine': {
        title: 'Animals in Medicine',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_105_doctor_loudspeaker_no': {
        title: 'Doctor Loudspeaker',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_106_muslim_mask': {
        title: 'Mask',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_113_compassion_heart': {
        title: 'Compassion',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_114_sunrise': {
        title: 'Sunrise',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_119_collections': {
        title: 'Collections',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_120_break_room': {
        title: 'Break Room',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_121_diagnosis': {
        title: 'Diagnosis',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_128_swiss_army_doctor': {
        title: 'Swiss Army Doctor',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_131_tech-v-med': {
        title: 'Tech V-Med',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_134_opmed-awards-portraits': {
        title: 'Awards Portraits',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_145_Next-Time': {
        title: 'Next Time',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_151_Water': {
        title: 'Water',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_157_Conference-Endocrinology': {
        title: 'Endocrinology Conference',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_3_CPAP': {
        title: 'CPAP',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_5_EHR': {
        title: 'EHR',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_6_caduceus': {
        title: 'Caduceus',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_9_crocsVclogs': {
        title: 'Crocs v Clogs',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_10_stent-bus': {
        title: 'Stent Bus',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_11_NYbaby': {
        title: 'NY Baby',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_12_snow-nose': {
        title: 'Snow Nose',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_13_night-shift': {
        title: 'Night Shift',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_15_goldilocks': {
        title: 'Goldilocks',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_17_BabyName': {
        title: 'Baby Name',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_19_dogtor-poker': {
        title: 'Dogtors Playing Poker',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_20_Venus-de-milo': {
        title: 'Venus',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_22_headless-horseman': {
        title: 'Headless Horseman',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_23_Rudolph-Red-Nose': {
        title: 'Rudolph',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_CaptionThis_24_valentines': {
        title: 'Venus',
        description: '',
        tags: ['cartoon', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_Collage_5_ClinicalCase-Atelectasis': {
        title: 'Atelectasis',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_Collage_6_ClinicalCase-Auer': {
        title: 'Auer',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_Collage_9_ClinicalCase-30lbweightloss': {
        title: '30 lbs',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_Collage_11_ClinicalTrial-psych': {
        title: 'Psych Clinical Trial',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_Collage_11_Poll_unionize': {
        title: 'Unionize',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_Collage_12_Multi-task': {
        title: 'Multi-task',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_Favorite-Patient_156': {
        title: 'Favorite Patient',
        description: '',
        tags: ['editorial', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_WYW_Breathe-meditate_30sec': {
        title: 'Breathe',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_WYW_fish': {
        title: 'Fish',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    },
    'AprilBrust_WYW_Koi-Animation': {
        title: 'Koi',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    },
    'WYW-breathing-bird-in-rain': {
        title: 'Rainy Bird',
        description: '',
        tags: ['animation', 'home'],
        isHovered: ref(false)
    }
};

const images = () => Object.keys(imageModules)
    .filter(imagePath => Object.keys(imageDescriptions).includes(getImageName(imagePath)) && imageDescriptions[getImageName(imagePath)].tags.includes((route.params['category'] as string)))

const homeImage = ref<string | null>(null);

function getImageName(image: string): string {
    return image.split('/').pop()?.split('.')[0] || 'Unknown';
}

const isSmallScreen = ref(false);
function smallScreen() {
    isSmallScreen.value = window.innerWidth < 600;
}


onMounted(() => {
  // Accessing the DOM element after it's mounted
  smallScreen();
  window.addEventListener('resize', smallScreen)
})

onUnmounted(() => {
    window.removeEventListener('resize', smallScreen);
})
</script>

<template>
    <div v-if="isSmallScreen" class="gallery-grid">
        <div v-for="(image, idx) in images()" :key="idx" >
            <div class="cell">
                <img :src="image" alt="" 
                    @click="homeImage = image" 
                    @mouseover="imageDescriptions[getImageName(image)].isHovered.value = true"
                    @mouseleave="imageDescriptions[getImageName(image)].isHovered.value = false"
                    class="image"
                    :class="{ dimmed: imageDescriptions[getImageName(image)].isHovered.value }"/>
                <div
                    v-if="imageDescriptions[getImageName(image)].isHovered.value"
                    class="overlay-text"
                >{{imageDescriptions[getImageName(image)].title}}</div>
            </div>
        </div>
        <ImageDetailView
            v-if="homeImage"
            :image-src="homeImage"
            :image-name="imageDescriptions[getImageName(homeImage)].title || getImageName(homeImage)"
            :image-description="imageDescriptions[getImageName(homeImage)].description"
            @close="homeImage = null"
        />
    </div>
    <div v-if="!isSmallScreen" class="gallery-grid">
        <div>WOAH</div>
        <div v-for="(image, idx) in images()" :key="idx" >
            <div class="cell">
                <img :src="image" alt="" 
                    @click="homeImage = image" 
                    @mouseover="imageDescriptions[getImageName(image)].isHovered.value = true"
                    @mouseleave="imageDescriptions[getImageName(image)].isHovered.value = false"
                    class="image"
                    :class="{ dimmed: imageDescriptions[getImageName(image)].isHovered.value }"/>
                <div
                    v-if="imageDescriptions[getImageName(image)].isHovered.value"
                    class="overlay-text"
                >{{imageDescriptions[getImageName(image)].title}}</div>
            </div>
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
    max-height: 200px;
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

@media (max-width: 600px) {
    
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        gap: 0.5rem;
        padding: 1rem;
        width: 100%;
        box-sizing: border-box;
    }

    .overlay-text {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: x-small;
        font-weight: bold;
        pointer-events: none;
    }

    img {
        width: 100%;
        max-width: 200px;
        height: auto;
        max-height: 75px;
        display: block;
        object-fit: cover;
        grid-area: 1/1;
    }
}
</style>