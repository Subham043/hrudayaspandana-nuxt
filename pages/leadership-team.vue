<template>
    <div>
        <HeroComponent title="Leadership Team" />

        <section class="about">
            <div class="wrapper">
                <div class="about-page-row">
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col team-col">
                        <div class="heading">
                            <p class="upper-heading">Team</p>
                            <h4 class="lower-heading">Leadership Team</h4>
                        </div>
                        <div class="chart-container" style="margin-top:30px">
                            <div id="tree" ref="tree"></div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col">
                        <div class="text">
                            <div class="owl-carousel">
                                <VueSlickCarousel v-bind="slickOptions" ref="slickTestimonial">
                                    <div v-for="(item, i) in testimonial" :key="i">
                                        <div class="testimonial-main-div">
                                            <div class="testimonial-hover-div">
                                                <div class="testimonial-div-image">
                                                    <img 
                                                        onContextMenu="return false;" 
                                                        loading="lazy"
                                                        :src="item.image"
                                                        alt="">
                                                </div>
                                                <div class="testimonial-div-quote">
                                                    <h4>{{item.title}}</h4>
                                                    <div class="scroll-div">
                                                        <p>{{item.description}}</p>
                                                        <p></p>
                                                    </div>
    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </VueSlickCarousel>
                                <div class="owl-nav">
                                    <button type="button" role="presentation" class="owl-prev" @click="prevNavClick">
                                        <i class="fas fa-long-arrow-alt-left"></i>
                                    </button>
                                    <button type="button" role="presentation" class="owl-next" @click="nextNavClick">
                                        <i class="fas fa-long-arrow-alt-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import OrgChart from '@balkangraph/orgchart.js'
export default {
    name: "LeadershipPage",
    layout: "MainPageLayout",
    data() {
        return {
            testimonial: [
                {
                    description: "Saira Harishankar (a trustee, Sai Mayee Trust) has done BSc (PCM) and PG in HR.Presently a happy Homemaker and she is a Sai Counsellor and Healer to many in need.",
                image: "/images/leader/leader1.jpg",
                    title: "Saira Harishankar"
                },
                {
                    description: "PN Sreenivas (a trustee, Sai Mayee Trust) has done his masters in tool design from CITD Hyderabad and has 25 years of work experience. Presently working in IBM as a Program Manager.",
                image: "/images/leader/leader2.jpg",
                    title: "PN Sreenivas"
                },
                {
                    description: "Itta Raghunandan (a trustee, Sri Sai Meru Mathi Trust) studied in Satya Sai Institue of higher Learning, Prasanthi Nilayam.He is a practicing Chartered Accountant with 25 + years of experience.",
                    image: "/images/leader/leader4.jpg",
                title: "Itta Raghunandan"
                },
                {
                    description: "Jagadeesh Kotturshettar (a trustee, Sri Sai Meru Mathi Trust) did his post graduation in digital Electronics and later completed LLB.Been in the semiconductor industry for 25 + years.",
                image: "/images/leader/leader5.jpeg",
                    title: "Jagadeesh Kotturshettar"
                },
                {
                    description: "Smitha Sailesh (an advisor, Hrudaya Spandana) is a Chartered accountant with 23 years of practice experience specialized in the field of audits and taxation.",
                image: "/images/leader/leader6.jpeg",
                    title: "Smitha Sailesh"
                },
                {
                    description: "Purnima Kurnool (Advisor, Hrudaya Spandana) done her MS in Molecular Biotechnology in the USA.She worked as a Research Associate in the University of Michigan.Currently, she is a practitioner of Sai Vibrionics.",
                image: "/images/leader/leader7.webp",
                    title: "Purnima Kurnool"
                },
                {
                    description: "Batchu Suresh (an advisor, Hrudaya Spandana) did his Phd in Gas Turbine thermal field.He is currently working as a Group Director in GTRE, DRDO.",
                image: "/images/leader/leader8.jpg",
                    title: "Batchu Suresh"
                },
                {
                    description: "M Venkateshwarlu (an advisor, Hrudaya Spandana), holds master’s degree in mechanical engineering from NIT, Warangal.He is currently working as a senior scientist at GTRE, DRDO.",
                image: "/images/leader/leader9.jpg",
                    title: "M Venkateshwarlu"
                },
                {
                    description: "Venu Madhav (an advisor, Hrudaya Spandana) did Bachelors of Science from Satya Sai Institue of higher Learning, Prasanthi Nilayam.Did MS from the USA.Currently working with “Nokia networks” as a Senior Production Manager.",
                image: "/images/leader/leader10.JPG",
                    title: "Venu Madhav"
                },
                {
                    description: "AVSS Prasad (a trustee, Sri Sai Meru Mathi Trust), completed his Masters in computer science.Been in the semiconductor industry for 30 + years.",
                image: "/images/leader/leader11.jpg",
                    title: "AVSS Prasad"
                },
                {
                    description: "A Nagasree (an advisor, Hrudaya Spandana) is a happy Home maker and a sincere believer in doing Seva.",
                    image: "/images/leader/leader12.webp",
                    title: "A Nagasree"
                },
                {
                    description: "Sailesh K (Chief Financial Advisor, Hrudaya Spandana) is a chartered Accountant in service with 25 + years of experience.Currently working as a branch manager in ICICI.",
                image: "/images/leader/leader13.jpeg",
                    title: "Sailesh K"
                },
                {
                    description: "PVB Sivakumar (Trust Development Specialist, Hrudaya Spandana) has done graduation in Arts and diploma in business management.He worked as a Zonal sales manager in a reputed company.",
                image: "/images/leader/leader14.webp",
                    title: "PVB Sivakumar"
                },
                {
                    description: "V Vijaya (an advisor, Hrudaya Spandana) is a happy Home maker and a sincere believer in doing Seva.",
                image: "/images/leader/leader15.webp",
                    title: "V Vijaya"
                },
                {
                    description: "Srinivas Sureban (an advisor, Hrudaya Spandana) completed his masters in Electronics and is having 25 years of experience in the Semiconductor industry.Presently working as a senior manager in Broadcom.",
                image: "/images/leader/leader16.png",
                    title: "Srinivas Sureban"
                },
            ],
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
            nodes: [
                { id: 1, name: "Hrudayaspandana", title: "Trust", img: "/images/round-logo.webp" },
                { id: 2, pid: 1, name: "Trust Development Specialist", title: "Sectors", img: "/images/round-logo.webp", tags: ["subLevels1"] },
                { id: 3, pid: 1, name: "Chief Financial Advisor", title: "Sectors", img: "/images/round-logo.webp", tags: ["subLevels1"] },
                { id: 4, pid: 1, name: "Advisory Committee", title: "Sectors", img: "/images/round-logo.webp", tags: ["subLevels2"] },
                { id: 5, pid: 1, name: "Sai Mayee Trust", title: "Sectors", img: "/images/round-logo.webp", tags: ["subLevels1"] },
                { id: 6, pid: 1, name: "Sri Sai Meru Mathi Trust", title: "Sectors", img: "/images/round-logo.webp", tags: ["subLevels2"] },
                { id: 7, pid: 2, name: "Sivaumar", title: "Member", img: "/images/leader/leader14.webp" },
                { id: 8, pid: 3, name: "Sailesh", title: "Member", img: "/images/leader/leader13.jpeg" },
                { id: 9, pid: 4, name: "M Venkateswarulu", title: "Member", img: "/images/leader/leader9.jpg" },
                { id: 10, pid: 4, name: "Batchu Suresh", title: "Member", img: "/images/leader/leader8.jpg" },
                { id: 11, pid: 4, name: "Smitha Sailesh", title: "Member", img: "/images/leader/leader6.jpeg" },
                { id: 12, pid: 4, name: "Purnima Kurnool", title: "Member", img: "/images/leader/leader7.webp" },
                { id: 13, pid: 4, name: "Vijaya V", title: "Member", img: "/images/leader/leader15.webp" },
                { id: 14, pid: 4, name: "Shrinivas Sureban", title: "Member", img: "/images/leader/leader16.png" },
                { id: 15, pid: 4, name: "Venu Madhav P", title: "Member", img: "/images/leader/leader10.JPG" },
                { id: 16, pid: 4, name: "A Nagasree", title: "Member", img: "/images/leader/leader12.webp" },
                { id: 17, pid: 5, name: "Saira H", title: "Member", img: "/images/leader/leader1.jpg" },
                { id: 18, pid: 5, name: "PN Sreenivas", title: "Member", img: "/images/leader/leader2.jpg" },
                { id: 19, pid: 6, name: "Itta Raghunandan", title: "Member", img: "/images/leader/leader4.jpg" },
                { id: 20, pid: 6, name: "Jagadish K", title: "Member", img: "/images/leader/leader5.jpeg" },
                { id: 21, pid: 6, name: "Prasad AVSS", title: "Member", img: "/images/leader/leader11.jpg" },
            ]
        }
    },
    mounted(){
        this.mytree(this.$refs.tree, this.nodes)
    },
    methods: {
        nextNavClick() {
            this.$refs.slickTestimonial.next()
        },
        prevNavClick() {
            this.$refs.slickTestimonial.prev()
        },
        mytree: function(domEl, x) {
            this.chart = new OrgChart (domEl, {
                mouseScrool: OrgChart.action.scroll,
                layout: OrgChart.tree,
                enableSearch: false,
                template: "ula",
                scaleInitial: 0.6,
                // collapse: {
                //     level: 2,
                //     allChildren: true
                // },
                tags: {
                    "subLevels0": {
                        subLevels: 0
                    },
                    "subLevels1": {
                        subLevels: 1
                    },
                    "subLevels2": {
                        subLevels: 2
                    },
                    "subLevels3": {
                        subLevels: 3
                    }
                },
                nodes: x,
                nodeBinding: {
                    field_0: "name",
                    img_0: "img"
                }
            });
        }
    }
}
</script>

<style scoped>
.about .about-page-row {
    justify-content: center;
}

.about .about-page-row .about-page-col {
    margin-bottom: 0px;
}

.about-page-col {
    overflow-y: hidden;
}

.testimonial-div-quote::-webkit-scrollbar {
    width: 11px;
}

.testimonial-div-quote {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

.testimonial-div-quote::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
}

.testimonial-div-quote::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
}

.testimonial-main-div {
    width: 100%;
    margin-top: 50px;
}

.testimonial-video-main-div {
    width: 100%;
}

.testimonial-video-hover-div {
    width: 95% !important;
    height: 300px;
    background: white;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #ffaa49;
    border-radius: 5px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
}

.testimonial-hover-div {
    width: 95% !important;
    background: white;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #ffaa49;
    border-radius: 5px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    position: relative;
    padding: 10px;
}

.testimonial-div-image {
    width: 100px;
    height: 100px;
    border: 3px solid #ffaa49;
    border-radius: 50%;
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
}

.testimonial-div-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.testimonial-div-quote {
    width: 100%;
    height: 290px;
    overflow: hidden;
}

.testimonial-div-quote .scroll-div {

    width: 100%;
    height: 100%;
}

.testimonial-div-quote h4 {
    text-align: center;
    margin-top: 15px;
    color: #c53f93;
}

.testimonial-div-quote p {
    text-align: center;
}

.owl-prev,
.owl-next {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff !important;
    background: #3c3489 !important;
    outline: none;
    border: none;
    box-shadow: 1px 1px 1px 1px #818181;
    transition: all 0.3s ease-in-out;
    opacity: 0.3;
}

.owl-prev:hover,
.owl-next:hover {
    opacity: 1;
}

.owl-nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


.flow-scroll-div {
    width: 100%;
    height: 600px;
}

#flowchart {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    margin-top: 45px;
    box-shadow: 4px 4px 5px 0px #818181;
    border-radius: 5px;
}

.flowchart-operator {
    min-width: 251px !important;
    width: auto !important;
}

.flowchart-operator .flowchart-operator-inputs,
.flowchart-default-operator .flowchart-operator-outputs {
    display: table-cell;
    width: 100%;
}

li .the-chart {
    background-color: transparent;
}

li .the-chart img {
    width: 100%;
    height: 120px;
    object-fit: contain
}

li .the-chart h5 {
    font-size: 0.7rem;
    font-weight: bold;
}

.chart-vertical .the-chart .total-child {
    bottom: -20px;
}

@media screen and (max-width:600px) {
    .team-col {
        width: 100%;
    }

    .flow-scroll-div {
        width: 100%;
        height: 650px;
        overflow-y: hidden;
        overflow-x: auto;
    }

    #flowchart {
        width: 1200px;
    }
}

.owl-carousel{
    position: relative;
}
</style>