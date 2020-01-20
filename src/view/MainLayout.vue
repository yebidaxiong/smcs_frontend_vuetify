<template>
    <div id="main-layout">
        <v-navigation-drawer v-model="drawerRight" app clipped right>
            <v-list dense>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-right color="blue-grey" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>综合安全预警平台</v-toolbar-title>
            <v-spacer />
            <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app>
            <v-list dense>
                <v-list-item @click.stop="left = !left">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-navigation-drawer v-model="left" fixed temporary></v-navigation-drawer>

        <v-content>
            <v-container class="fill-height" fluid>
                <v-row justify="center" align="center">
                    <v-col class="shrink">
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    :href="source"
                                    icon
                                    large
                                    target="_blank"
                                    v-on="on"
                                >
                                    <v-icon large>mdi-code-tags</v-icon>
                                </v-btn>
                            </template>
                            <span>Source</span>
                        </v-tooltip>
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn
                                    icon
                                    large
                                    href="https://codepen.io/johnjleider/pen/QewYYx"
                                    target="_blank"
                                    v-on="on"
                                >
                                    <v-icon large>mdi-codepen</v-icon>
                                </v-btn>
                            </template>
                            <span>Codepen</span>
                        </v-tooltip>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-navigation-drawer v-model="right" fixed right temporary></v-navigation-drawer>

        <v-footer app color="blue-grey" class="white--text">
            <span>中冶焦耐自动化公司</span>
            <v-spacer />
            <span>&copy; 2019</span>
        </v-footer>
    </div>
</template>

<script>
    export default {
        name: "MainLayout",
        components: {

        },
        props: {
            source: String,
        },
        data() {
            return {
                drawer: null,
                drawerRight: null,
                right: false,
                left: false,
            }
        },
        methods: {

        },
    }
</script>

<style scoped>

</style>
