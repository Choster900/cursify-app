<template>
    <div class="p-6 space-y-6">
        <h2 class="text-2xl text-slate-800 font-bold mb-5">Nombre del curso</h2><!-- Picture -->
        <section>
            <div class="flex items-center">
                <div class="mr-4">
                    <div class="text-sm text-slate-800 space-y-2 mb-5">
                        <p>Designing an Earth-positive future, together 🌿</p>
                        <div class="relative !my-4">
                            <img class="block w-2/3" src="http://localhost:5174/src/images/feed-image-01.jpg"
                                
                         alt="Feed 01">
                           
                        </div>
                    </div>
                </div>
                <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Change</button>
            </div>
        </section><!-- Business Profile -->
        <section>
            <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Business Profile</h3>
            <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </div>
            <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
                <div class="sm:w-1/3"><label class="block text-sm font-medium mb-1" for="name">Business Name</label><input
                        id="name" class="form-input w-full" type="text"></div>
                <div class="sm:w-1/3"><label class="block text-sm font-medium mb-1" for="business-id">Business
                        ID</label><input id="business-id" class="form-input w-full" type="text"></div>

            </div>
        </section><!-- Email -->
        <section>
            <h3 class="text-xl leading-snug text-slate-800 font-bold mb-1">Email</h3>
            <div class="text-sm">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.</div>
            <div class="flex flex-wrap mt-5">
                <div class="mr-2"><label class="sr-only" for="email">Business email</label><input id="email"
                        class="form-input" type="email"></div><button
                    class="btn border-slate-200 hover:border-slate-300 shadow-sm text-indigo-500">Change</button>
            </div>
    </section><!-- Password -->
</div></template>

<script>
export default {

}
</script>

<style></style>