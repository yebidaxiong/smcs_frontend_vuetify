<template>
    <div id="main-layout">
        <v-navigation-drawer v-model="drawerRight" app clipped right>
            <v-list>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">维护与管理</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><i class="fa fa-plug"></i> 设备管理</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><i class="fa fa-flag"></i> 事件管理</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><i class="fa fa-archive"></i> 存储计划</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><i class="fa fa-user"></i> 用户管理</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><i class="fa fa-cog"></i> 系统配置</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item @click.stop="right = !right">
                    <v-list-item-action>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title><i class="fa fa-file-code-o"></i> 系统日志</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-right color="blue-grey darken-3" dark dense>
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
                    <v-col>
                        <Desktop></Desktop>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-navigation-drawer v-model="right" fixed right temporary></v-navigation-drawer>

        <v-footer app color="blue-grey darken-3" class="white--text">
            <span>中冶焦耐自动化有限公司</span>
            <v-spacer />
            <span>&copy; 2019</span>
        </v-footer>
    </div>
</template>

<script>
    import Desktop from "./home/Desktop";
    export default {
        name: "MainLayout",
        components: {
            Desktop,
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
    .main-layout {

    }
</style>
