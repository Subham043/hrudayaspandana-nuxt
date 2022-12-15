<template>
    <div>
        <HeroComponent title="Media" />

        <section class="gallery-page">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">MEDIA</p>
                    <h4 class="lower-heading">Latest From Media</h4>
                </div>

            </div>
            <div class="gallery-box">
                <ul id="gallery">
                    <li>
                        <a href="https://hrudayaspandana.org/assets/images/home/media/408dadc2d7ed33e946ae7ec45c981357.jpeg"
                            class="thumbnail img-thumbnail">
                            <img onContextMenu="return false;" alt=".." loading="lazy"
                                src="https://hrudayaspandana.org/assets/images/home/media/408dadc2d7ed33e946ae7ec45c981357.jpeg" />

                        </a>
                    </li>
                    <li>
                        <a href="https://hrudayaspandana.org/assets/images/home/media/17a3db49999268d9be9d9db7cd738332.jpeg"
                            class="thumbnail img-thumbnail">
                            <img onContextMenu="return false;" alt=".." loading="lazy"
                                src="https://hrudayaspandana.org/assets/images/home/media/17a3db49999268d9be9d9db7cd738332.jpeg" />

                        </a>
                    </li>
                    <li>
                        <a href="https://hrudayaspandana.org/assets/images/home/media/90e7d934c684c8b8d4d0a169840cc747.jpeg"
                            class="thumbnail img-thumbnail">
                            <img onContextMenu="return false;" alt=".." loading="lazy"
                                src="https://hrudayaspandana.org/assets/images/home/media/90e7d934c684c8b8d4d0a169840cc747.jpeg" />

                        </a>
                    </li>
                    <li>
                        <a href="#!" class="thumbnail img-thumbnail" style="width:100%;height:350px;">
                            <iframe id="iframeVdo" src="https://www.youtube.com/embed/XnhL8TYsp9w"
                                title="YouTube video player" frameborder="0" loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen style="width: 100%; height:100%"></iframe>

                        </a>
                    </li>
                    <li>
                        <a href="#!" class="thumbnail img-thumbnail" style="width:100%;height:350px;">
                            <iframe id="iframeVdo" src="https://www.youtube.com/embed/bVpK0K4NYm0"
                                title="YouTube video player" frameborder="0" loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen style="width: 100%; height:100%"></iframe>

                        </a>
                    </li>
                    <li>
                        <a href="#!" class="thumbnail img-thumbnail" style="width:100%;height:350px;">
                            <iframe id="iframeVdo" src="https://www.youtube.com/embed/QscL4NQ-Py8"
                                title="YouTube video player" frameborder="0" loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen style="width: 100%; height:100%"></iframe>

                        </a>
                    </li>

                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "MediaPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>
#gallery li {
    text-align: center;
}

.liquo-gallery {
    margin: 0;
    padding: 0;
}

.liquo-gallery li {
    list-style-type: none;
    display: inline-block;
}

.liquo-active {
    font-weight: bold;
}

.img-thumbnail {
    position: relative;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
}

.wrapper {
    position: relative;
}


@media screen and (max-width: 600px) {
    #gallery-search li {
        width: 95%;
    }

    #gallery-search li .img-thumbnail {
        width: 100%;
    }
}
</style>