<template>
    <div>
        <HeroComponent title="Contact Us" />

        <section class="hundi donation-page">
            <div class="wrapper">
                <div class="hundi-row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <div class="heading">
                            <p class="upper-heading">MAIL US</p>
                            <h4 class="lower-heading">Have a Question?<br>Drop Us a Message!</h4>
                        </div>
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form id="contactForm" method="post" @submit.prevent="handleSubmit(formHandler)">
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
                                <ValidationProvider v-slot="{ classes, errors }" rules="required|custom_message" name="message">
                                    <textarea 
                                        id="message" 
                                        v-model="message" 
                                        name="message" 
                                        rows="7" 
                                        class="form-control form-hundi-input"
                                        placeholder="Message"></textarea>
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
    name: "ContactPage",
    layout: "MainPageLayout",
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: '',
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
                formData.append('message', this.message);
                const response = await this.$publicApi.post('/api/contact/create', formData); // eslint-disable-line
                this.$toast.success('Message received successfully')
                this.first_name=''
                this.last_name=''
                this.email=''
                this.phone=''
                this.message=''
                this.accept=false
                this.$refs.form.reset();
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    first_name: err?.response?.data?.errors?.first_name,
                    last_name: err?.response?.data?.errors?.last_name,
                    email: err?.response?.data?.errors?.email,
                    phone: err?.response?.data?.errors?.phone,
                    message: err?.response?.data?.errors?.message,
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