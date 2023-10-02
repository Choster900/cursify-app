<template>
    <div class="py-">
        <div class="container">
            <div class="md:flex flex-1">
                <!-- Left content -->
                <CreateCourseLeftNavigation />

                <!-- Middle content -->
                <div class="flex-1 md:ml-8 xl:mx-4 2xl:mx-8">
                    <div class="md:py-8">

                        <!-- Forum entries -->
                        <div class="space-y-2 border shadow-xl">

                            <div class="sub-header--flex-align-center--1_RER sub-header--container--1pQeg">
                                <div class="sub-header--flex-align-center--1_RER sub-header--content--1H7YJ">
                                    <h2 data-purpose="page-title" class="ud-heading-serif-xl">Course landing page</h2>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>



        </div>
    </div>
</template>

<script>
import CreateCourseLeftNavigation from '@/components/Courses/CreateCourseLeftNavigation.vue';

export default {
    components: { CreateCourseLeftNavigation },
    seupt() {
       
    }
};
</script>
<style></style>