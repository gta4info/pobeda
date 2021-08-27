<template>
  <div class="header-wrapper">
    <v-container>
      <header class="header">
        <nuxt-link to="/" class="header__logo">
          <img src="@/static/logo.png" alt="Победа">
        </nuxt-link>
        <nav class="header__nav">
          <ul>
            <li v-for="(item, i) in nav.filter(o => o.items.length === 0)" :key="`link`+i">
              <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
            </li>
            <v-menu
              v-for="(item, i) in nav.filter(o => o.items.length > 0)"
              :key="`activator`+i"
              open-on-hover
              offset-y
              close-delay="200"
              content-class="header__dropdown"
            >
              <template v-slot:activator="{on}">
                <li class="header__dropdown-activator" v-on="on">{{item.title}} <v-icon size="16" color="#212C66" class="ml-2">mdi-chevron-down</v-icon></li>
              </template>
              <div class="header__dropdown-item" v-for="(subItem, subI) in item.items" :key="`item`+subI">
                <nuxt-link :to="subItem.link" active-class="active">{{subItem.title}}</nuxt-link>
              </div>
            </v-menu>
          </ul>
        </nav>

        <nav class="header__navMobile">
          <v-btn class="header__navMobile-burger" depressed icon @click="showMobileMenu = !showMobileMenu">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <ul class="header__navMobile-menu" :class="{active: showMobileMenu}"">
            <li v-for="(item, i) in nav.filter(o => o.items.length === 0)" :key="`link`+i">
              <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
            </li>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(item, i) in nav.filter(o => o.items.length > 0)"
                :key="`activator`+i"
              >
                <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
                <v-expansion-panel-content v-for="(subItem, subI) in item.items" :key="`item`+subI">
                  <nuxt-link :to="subItem.link" active-class="active">{{subItem.title}}</nuxt-link>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </ul>
        </nav>

        <div class="header__contacts">
          <div class="header__contacts-lines">
            <a href="tel:84967935153" class="header__contacts-phone">8 (496) 793-51-53</a>
            <a href="mailto:dmdd_mbu_pob@mosreg.ru" class="header__contacts-email"><span>e-mail: </span>dmdd_mbu_pob@mosreg.ru</a>
          </div>
          <v-btn color="#304095" class="header__contacts-btn" depressed>Написать нам</v-btn>
        </div>
      </header>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    showMobileMenu: false,
    nav: [
      {
        title: 'Победа',
        link: '/',
        items: []
      },
      {
        title: 'Афиша мероприятий',
        link: '/',
        items: []
      },
      {
        title: 'Новости',
        link: '/',
        items: []
      },
      {
        title: 'Занятия',
        link: null,
        items: [
          {
            title: 'Хореография',
            link: '/'
          },
          {
            title: 'Ударные инструменты',
            link: '/'
          },
          {
            title: 'Вокал',
            link: '/'
          },
          {
            title: 'Мастерская',
            link: '/'
          },
          {
            title: 'Клуб молодых родителей',
            link: '/'
          },
        ]
      },
      {
        title: 'Информация',
        link: null,
        items: [
          {
            title: 'Документы',
            link: '/'
          },
          {
            title: 'Филиалы',
            link: '/'
          },
          {
            title: 'Контакты',
            link: '/'
          },
        ]
      },
    ]
  })
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    height: 96px;

    @media(max-width: 768px) {
      height: 100px;
      padding: 0 20px;
    }

    &-wrapper {
      box-shadow: 0 0 10px #E9F0FD;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      background: #fff;
      z-index: 2;

      .container {
        padding-top: 0;
        padding-bottom: 0;
      }
    }

    &__logo {
      height: 71px;
      width: 71px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 40px;
      flex-shrink: 0;

      @media(max-width: 769px) {
        width: 60px;
        height: 60px;
        margin-right: 10px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__nav {

      @media(max-width: 768px) {
        display: none;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;

        li {
          margin-right: 20px;
          font-family: 'Proxima Nova Bl', sans-serif;
          color: rgba(33, 45, 69, 0.7);
          transition: .3s;
          padding: 10px;
          background: transparent;
          border-radius: 10px;
          cursor: pointer;

          &:not(:last-child) {
            padding-right: 20px;
          }

          &.active, &:hover {
            color: #304095;
            background: #F2F7FF;
          }
        }
      }
    }

    &__navMobile {
      position: relative;

      @media(min-width: 769px) {
        display: none;
      }

      &-burger {
        margin-right: 10px;
      }

      &-menu {
        position: fixed;
        top: 100px;
        background: #ffffff;
        border-top: 1px solid #e6e6e6;
        padding: 30px !important;
        opacity: 0;
        transition: .3s;
        left: -100vw;
        width: 100%;

        &.active {
          opacity: 1;
          left: 0;
        }

        li {
          align-items: center;
          display: flex;
          min-height: 48px;
          width: 100%;
          border: 1px solid #e6e6e6;
          border-bottom: none;

          &:last-of-type {
            border-bottom: 1px solid #e6e6e6;
          }

          a {
            padding: 16px 24px;
            width: 100%;
          }
        }
      }
    }

    &__contacts {
      display: flex;
      align-items: center;
      margin-left: auto;

      @media(max-width: 768px) {
        flex-direction: column-reverse;
        align-items: flex-start;
      }

      &-lines {
        display: flex;
        flex-direction: column;
      }

      &-phone {
        color: #212C66;
        font-family: 'Proxima Nova Sb', sans-serif;

        @media(max-width: 768px) {
          font-size: 12px;
        }
      }

      &-email {
        color: #212C66;

        @media(max-width: 768px) {
          font-size: 12px;

          span {
            display: none;
          }
        }
      }

      &-btn {
        padding: 10px 15px;
        text-transform: none;
        margin-left: 20px;
        color: #fff !important;
        height: 40px !important;

        @media(max-width: 768px) {
          margin-left: 0;
          margin-bottom: 10px;
        }
      }
    }

    &__dropdown {
      display: flex;
      flex-direction: column;
      padding: 16px 24px;
      background: #F2F7FF;
      margin-top: 10px;

      &-activator {
        cursor: default !important;
        display: flex;
        align-items: center;
      }

      &-item {

        a {
          padding: 10px;
          height: 100%;
          width: 100%;
          display: flex;
          color: #68889C;
          transition: .3s;

          &.active, &:hover {
            background: #FFFFFF;
            border-radius: 5px;
            color: #304095;
          }
        }
      }
    }
  }
</style>
