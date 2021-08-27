<template>
  <div class="footer">
    <v-container class="py-1">
      <v-row>
        <v-col offset-md="1" sm="12" md="10" class="px-0">
          <v-container>
            <v-row>
              <v-col cols="12">
                <div class="footer__logo">
                  <img src="@/static/logo-footer.png" alt="Победа">
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                sm="6"
                md="3"
                v-for="(group, index) in nav"
                :key="`group`+index"
              >
                <ul class="footer__links">
                  <li v-for="(item, i) in group.items" :key="`item`+i" class="footer__link">
                    <nuxt-link :to="item.link">{{item.title}}</nuxt-link>
                  </li>
                </ul>
              </v-col>
              <v-col sm="6" md="4">
                <div class="footer__contacts">
                  <div class="footer__contacts-title">Контакты</div>
                  <div class="footer__contacts-address">
                    <span>Адрес:</span>
                    <span>г. Домодедово, пл. 30-летия Победы, д.2</span>
                  </div>
                  <a href="mailto:dmdd_mbu_pob@mosreg.ru" class="footer__contacts-email">E-mail: dmdd_mbu_pob@mosreg.ru</a>
                  <a href="tel:84967935153" class="footer__contacts-phone">8 (496) 793-51-53</a>
                  <v-btn class="footer__contacts-btn" depressed>Написать нам</v-btn>
                </div>
              </v-col>
              <v-col sm="6" md="1">
                <div class="footer__socials">
                  <a href="#" target="_blank" v-ripple>
                    <img src="@/static/youtube-icon.png" alt="Победа на Youtube">
                  </a>
                  <a href="#" target="_blank" v-ripple>
                    <img src="@/static/vk-icon.png" alt="Победа в Вконтакте">
                  </a>
                  <a href="#" target="_blank" v-ripple>
                    <img src="@/static/instagram-icon.png" alt="Победа в Instagram">
                  </a>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="footer__copyrights">yapobeda.ru | г.о. Домодедово | 2017</div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    nav: [
      {
        items: [
          {
            title: 'О нас',
            link: '/'
          },
          {
            title: 'Афиша мероприятий',
            link: '/'
          },
          {
            title: 'Новости',
            link: '/'
          },
          {
            title: 'Контакты',
            link: '/'
          },
          {
            title: 'Филиалы',
            link: '/'
          },
          {
            title: 'Документы',
            link: '/'
          },
        ]
      },
      {
        items: [
          {
            title: 'Занятия',
            link: '/'
          },
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
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.footer {
  background: #202020;
  padding: 10px 0;

  &__logo {
    width: 103px;
    height: 64px;
    display: flex;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
  }

  &__link {
    color: #fff;
    font-family: 'Proxima Nova Bl', sans-serif;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &-title {
      font-family: 'Proxima Nova Bl', sans-serif;
      color: #fff;
      margin-bottom: 15px;
    }

    &-address {
      color: #F6F6F6;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      align-self: flex-start;
      align-items: flex-start;
    }

    &-email {
      color: #F6F6F6;
      text-decoration: underline;
      margin-bottom: 20px;
    }

    &-phone {
      color: #F6F6F6;
      margin-bottom: 13px;
    }

    &-btn {
      padding: 10px 15px;
      background: #304095 !important;
      text-transform: none;
      color: #ffffff;
      height: 40px !important;
    }
  }

  &__socials {
    display: flex;
    flex-direction: column;

    a {
      width: 30px;
      height: 30px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }

      &:hover {
        img {
          filter: brightness(1);
        }
      }

      img {
        filter: brightness(0.5);
        transition: .3s;
      }
    }
  }

  &__copyrights {
    color: #F6F6F6;
    font-size: 10px;
  }
}
</style>
