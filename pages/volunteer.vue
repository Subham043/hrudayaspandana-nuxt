<template>
    <div>
        <LazyHeroComponent title="Volunteer" />

        <section class="about volunteer-about">
            <div class="wrapper">
                <div class="about-page-row">
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col first-about-text-div">
                        <!-- <div class="heading">
                            <p class="upper-heading">Volunteer</p>
                            <h4 class="lower-heading">Volunteer</h4>
                        </div> -->
                        <div class="text">
                            <p>We at Hrudaya
                                Spandana are working towards bringing a positive &amp; long lasting changes in the lives
                                of less
                                privileged people.
                            </p>
                            <p>Our committed &amp; passionate Volunteers have always been at the core of all that we do.
                                A positive
                                difference can be brought through collective effort. More hands will not only make it
                                joyful, but also
                                a satisfying experience. We request one and all to come together and take this
                                initiative forward.</p>
                            <p>Currently we have 200+ professionals from diverse backgrounds as volunteers.</p>
                            <p>If you have a mind space for creating “Reverberations of Love” then do come and join us
                                to embark on
                                a satisfying journey with Hrudaya Spandana.</p>
                            <p><strong>You can be the reason behind their smile.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hundi">
            <div class="wrapper">
                <div class="hundi-row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <div class="heading">
                            <h4 class="lower-heading">Be a Volunteer</h4>
                        </div>
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form id="volunteerForm" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <input autocomplete="off" type="hidden" name="ci_csrf_token" value="">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="first name">
                                            <input
                                                id="fname"
                                                v-model="first_name"
                                                type="text"
                                                name="fname"
                                                class="form-control form-hundi-input"
                                                placeholder="First Name" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="last name">
                                            <input
                                                id="lname"
                                                v-model="last_name"
                                                type="text"
                                                name="lname"
                                                class="form-control form-hundi-input"
                                                placeholder="Last Name" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                            <input
                                                id="phone"
                                                v-model="phone"
                                                type="text"
                                                name="phone"
                                                class="form-control form-hundi-input"
                                                placeholder="Phone Number" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                            <input
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                name="email"
                                                class="form-control form-hundi-input" placeholder="Email" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="aadhar">
                                    <input
                                    id="aadhaar"
                                    v-model="aadhar"
                                    type="text"
                                    name="aadhaar"
                                    class="form-control form-hundi-input"
                                    placeholder="Aadhaar Number*" value="">
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="address">
                                    <textarea
                                    id="address"
                                    v-model="address"
                                    type="text"
                                    name="address"
                                    class="form-control form-hundi-input"
                                    rows="7" placeholder="Address*"></textarea>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="interest">
                                    <textarea
                                    id="interest"
                                    v-model="interest"
                                    type="text"
                                    name="interest"
                                    class="form-control form-hundi-input"
                                    rows="7"
                                    placeholder="Describe your seva interest.*"></textarea>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3 form-check">
                                <ValidationProvider v-slot="{ classes, errors }" :rules="{ required: { allowFalse: false } }" name="terms and condition">
                                    <input
                                        id="check"
                                        v-model="accept"
                                        type="checkbox"
                                        class="form-check-input  form-hundi-checkbox"
                                        name="check">
                                    <label class="form-check-label" for="check">I accept the <NuxtLink
                                            to="/terms-condition" target="_blank">terms and
                                            conditions</NuxtLink>.</label>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" class="btn btn-primary  form-hundi-submit">Submit</button>
                            </div>
                        </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "VolunteerPage",
    layout: "MainPageLayout",
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            aadhar: '',
            address: '',
            interest: '',
            accept: false,
        }
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const formData = new FormData;
                formData.append('first_name', this.first_name);
                formData.append('last_name', this.last_name);
                formData.append('email', this.email);
                formData.append('phone', this.phone);
                formData.append('aadhar', this.aadhar);
                formData.append('address', this.address);
                formData.append('interest', this.interest);
                const response = await this.$publicApi.post('/api/volunteer/create', formData); // eslint-disable-line
                this.$toast.success('Volunteer saved successfully')
                this.first_name=''
                this.last_name=''
                this.email=''
                this.phone=''
                this.aadhar=''
                this.address=''
                this.interest=''
                this.accept=false
                this.$refs.form.reset();
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    first_name: err?.response?.data?.errors?.first_name,
                    last_name: err?.response?.data?.errors?.last_name,
                    email: err?.response?.data?.errors?.email,
                    phone: err?.response?.data?.errors?.phone,
                    interest: err?.response?.data?.errors?.interest,
                    aadhar: err?.response?.data?.errors?.aadhar,
                    address: err?.response?.data?.errors?.address,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
            loading.close()
            }
        },
    }
}
</script>

<style scoped>

</style>
