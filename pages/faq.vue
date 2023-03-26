<template>
    <div>
        <LazyHeroComponent title="FAQ" />

        <section class="about">
            <div class="wrapper">
                <div class="about-page-row">
                    <!-- <div class="col-lg-12 col-md-12 col-sm-12 about-page-col first-about-text-div faq-first-col">
                        <div class="heading">
                            <p class="upper-heading">FAQ</p>
                            <h4 class="lower-heading">Frequently Asked Questions</h4>
                        </div>
                    </div> -->
                    <div class="col-lg-6 col-md-12 col-sm-12 second-about-text-div about-page-col">
                        <el-collapse v-model="activeNames" accordion>
                            <el-collapse-item name="1">
                                <template slot="title">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button">
                                            What is Hrudaya Spandana?
                                        </button>
                                    </h2>
                                </template>
                                <div
                                    class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        Hrudaya Spandana is an organization with the vision “To spread love and
                                        enhance human values through selfless and rejuvenate Sanatana Dharma by
                                        preserving our ancient Vedic culture”.<br> It’s motto is “Serve to Live &
                                        Live to Serve”.
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="2">
                                <template slot="title">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button">
                                            What is Sai Mayee trust and Sai Meru Mathi trust and what are the
                                            differences?
                                        </button>
                                    </h2>
                                </template>
                                <div class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        Madhava seva and Manava Seva are two key objectives of Hrudaya Spandana. Sai
                                        Mayee trust handles the planning and operations for Manava Seva and Sai Meru
                                        Mathi trust handles the planning and operations for Madhava Seva.
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="3">
                                <template slot="title">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button">
                                            What are the activities that are handled by Hrudaya Spandana?
                                        </button>
                                    </h2>
                                </template>
                                <div class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <p> 1. Rudrabhishekam: For promoting peace and harmony</p>
                                        <p>2. Sarva Devata Kalyanams: Performing celestial weddings to achieve
                                            global harmony</p>
                                        <p>3. Sarva Devata Homams: For sanctification and enhancing nature’s balance
                                        </p>
                                        <p>4. Devalaya Punarodharanam: For protecting the society by restoring the
                                            grandeur of temples</p>
                                        <p>5. Special Day Celebrations: To achieve oneness in divinity</p>
                                        <p>6. Conduct regular chanting sessions to have a through grounding in our
                                            heritage for better health and intellect</p>
                                        <p>7. Conduct musical concerts for spreading joy and happy mood besides
                                            perpetuation of our tradition.</p>
                                        <p>8. Distribution of stationery to government school students </p>
                                        <p>9. Helping old age homes and orphanages with groceries, medicines and
                                            other necessary items</p>

                                    </div>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 first-about-img-div about-page-col">
                        <el-collapse v-model="activeNames2" accordion>
                            <el-collapse-item name="1">
                                <template slot="title">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button">
                                            What are the long term plans? Where to find them?
                                        </button>
                                    </h2>
                                </template>
                                <div
                                    class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <p> 1. Re-establish more and more temples</p>
                                        <p>2. Ensure the welfare of the temple priests and caretakers</p>
                                        <p>3. Perform Ati Rudra Maha Yajna</p>
                                        <p>4. Perform more celestial weddings and Sarva Devata Homams</p>
                                        <p>5. Conduct mass Kalyanams and Upanayanams</p>
                                        <p>6. Adopting a village & turning it into a model village with self
                                            sufficiency for other villages to emulate</p>
                                        <p>7. Supporting education on a larger scale</p>
                                        <p>8. Extending regular medical aid to many less fortune people </p>
                                        <p>9. Helping the girl child get educated and become independent </p>
                                        <p>10. Bringing more old age homes and schools into ambit of our service</p>
                                        <p>11. Setting up Gaushalas</p>
                                        <p>12. Opening Pathashalas for rural and needy children and help them
                                            connect to mainstream life</p>
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="2">
                                <template slot="title">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button">
                                            How can one take part in these activities?
                                        </button>
                                    </h2>
                                </template>
                                <div class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        Anyone, who is interested, can take part in these activities either
                                            physically, virtually (tech support) or through financially. Do contact us
                                            at : “Link to Contact us”.
                                    </div>
                                </div>
                            </el-collapse-item>
                            <el-collapse-item name="3">
                                <template slot="title">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button">
                                            When was Hrudaya Spandana started? And who started it?
                                        </button>
                                    </h2>
                                </template>
                                <div class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        Hrudaya Spandana was started on 24th July 2021 on the auspicious day of Guru
                                            Purnima. A group of likeminded people who have been working on such
                                            activities since 2020, have come together with a common goal and started
                                            this organization.

                                    </div>
                                </div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "FaqPage",
    layout: "MainPageLayout",
    data() {
      return {
        activeNames: ['1'],
        activeNames2: ['1'],
      };
    },
}
</script>

<style scoped>
.accordion-item {
    background-color: #fff;
    border: 1px solid #ffaa49;
    margin-bottom: 1px;
}

.accordion-body {
    padding: 1rem 1rem;
    background: #f4e5bc;
    font-size: 1.1rem;
    color: #694c5c;
}

.accordion-button {
    color: #3c3489;
    background-color: transparent;
    padding: 1rem 1rem;
    line-height: 20px;
}

.accordion-button:focus {
    z-index: 3;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: none;
}

.accordion-button:not(.collapsed) {
    color: #3c3489;
    background-color: transparent;
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .125);
}

.faq-first-col {
    margin-bottom: 0px !important;
}
</style>
