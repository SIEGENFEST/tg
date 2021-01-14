<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation=true">
          <span class="material-icons">menu</span>
        </md-button>
        <span class="md-title">{{pageTitle}}</span>
      </md-app-toolbar>
      <md-app-content>
        <router-view/>
      </md-app-content>
      <md-app-drawer :md-active.sync="showNavigation" md-swipeable>
        <md-list>
          <md-list-item v-for="page in pages"
                        :to="'component' in page?page.path:''"
                        :md-expand="!('component' in page)"
                        @click="'component' in page && (showNavigation=false)">
            <md-icon v-if="page.icon"><img :src="'../public/img/svg/'+page.icon+'.svg'" :alt="page.icon"/></md-icon>
            <span class="md-list-item-text">{{page.name}}</span>
            <md-list class="list-secondary" v-if="!('component' in page)" slot="md-expand">
              <md-list-item v-for="p in page.children"
                            :to="p.path"
                            :md-expand="!('component' in p)"
                            @click="'component' in p && (showNavigation=false)"
                            class="">
                <md-icon v-if="p.icon">
                  <img :src="'../public/img/svg/'+p.icon+'.svg'"
                       :alt="p.icon"/></md-icon>
                <span style="flex-grow: 1">{{p.name}}</span>
                <md-list class="list-secondary" v-if="!('component' in p)" slot="md-expand">
                  <md-list-item v-for="pp in p.children"
                                :to="pp.path"
                                @click="'component' in pp && (showNavigation=false)"
                                class="">
                    <span style="flex-grow: 1">{{pp.name}}</span>
                  </md-list-item>
                </md-list>
              </md-list-item>
            </md-list>
          </md-list-item>
        </md-list>
      </md-app-drawer>
    </md-app>
  </div>
</template>
<script lang="ts">
  // import {Vue} from 'vue-property-decorator';
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import {pages} from './router'

  @Component
  export default class App extends Vue {
    showNavigation = false;
    pageTitle? = '';

    mounted() {
      this.pageTitle = this.$route.name;
      this.$router.afterEach(to => {
        this.pageTitle = to.name
      });
      //@ts-ignore
      this.$root.$on('pop-menu', () => {
        this.showNavigation = true
      })
    }

    pages = pages

  }
</script>
<style lang="less">
  .md-app {
    height: 100vh;
    display: flex;
  }

  .md-icon {
    transform: scale(0.75);

  }

  .list-secondary {
    padding-left: 24px !important;

  }

</style>
