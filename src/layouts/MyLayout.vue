<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <template v-for="link of links">
          <q-btn
            :key="link.title"
            flat
            :to="link.url"
          >
            <q-icon :name="link.icon" class="q-mr-sm"/>
            {{link.title}}
          </q-btn>
        </template>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <div class="row justify-end q-mt-sm q-mr-sm">
        <q-btn round color="primary" icon="skip_previous" @click="leftDrawerOpen=!leftDrawerOpen"/>
      </div>
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <template
          v-for="link of links"
        >
          <q-separator :key="link.title"/>
          <q-item clickable tag="a" :key="link.title" :href="link.url">
            <q-item-section avatar>
              <q-icon :name="link.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{link.title}}</q-item-label>
            </q-item-section>
          </q-item>

        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    openURL,
  },
  computed: {
    links() {
      return [
        {
          title: 'Home',
          icon: 'home',
          url: '/',
        },
        {
          title: 'Login',
          icon: 'lock',
          url: '/login',
        },
        {
          title: 'Join',
          icon: 'face',
          url: '/join',
        },
      ];
    },
  },
};
</script>

<style>
</style>
