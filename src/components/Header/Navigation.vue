<template>
    <nav class="navigation-menu">
        <ul class="flex">
            <li v-for="(nav, i) in menuItems" :key="i" class="relative mr-12 group">
                <router-link :to="nav.module.path" class="block font-semibold group-hover:text-primary py-7"
                    :class="colorVariant">
                    {{ nav.module.label }}

                    <i v-if="nav.module.childItems && nav.module.childItems.edges.length" class="icofont-simple-down"></i>
                </router-link>

                <!-- Verificar si childItems existe -->
                <ul v-if="nav.module.childItems && nav.module.childItems.edges.length"
                    class="top-full left-0 absolute w-[200px] bg-white border-b-[3px] border-primary py-4 shadow-md shadow-black/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 z-30">

                    <!-- Iterar sobre edges si childItems existe -->
                    <li v-for="(item, index) in nav.module.childItems.edges" :key="index">
                        <router-link :to="item.module.path"
                            class="block text-heading-light font-semibold py-1 px-4 hover:text-primary">{{ item.module.label
                            }}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <!-- <pre>
            {{ menuItems }}
        </pre> -->
</template>

<script>
export default {
    props: {
        colorVariant: {
            type: String,
            required: true
        },
    },
    setup() {

        const menuItems = [
            {
                "module": {
                    "label": "Home",
                    "path": "/"
                }
            },
            {
                "module": {
                    "label": "About",
                    "path": "/about",
                    "childItems": {
                        "edges": []
                    }
                }
            },
            {
                "module": {
                    "label": "Blog",
                    "path": "/blog",
                    "childItems": {
                        "edges": []
                    }
                }
            },
            {
                "module": {
                    "label": "Categories",
                    "path": "/categories",
                    "childItems": {
                        "edges": [
                            {
                                "module": {
                                    "label": "Category 1",
                                    "path": "/category-1"
                                }
                            },
                            {
                                "module": {
                                    "label": "Category 2",
                                    "path": "/category-2"
                                }
                            },
                            {
                                "module": {
                                    "label": "Category 3",
                                    "path": "/category-3"
                                }
                            }
                        ]
                    }
                }
            }




        ]


        return {
            menuItems
        }
    }
}
</script>

<style></style>