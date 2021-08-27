<template>
  <div>
    <VueSlickCarousel v-bind="settingsNewsSlider" class="newsSlider">
      <template #prevArrow="arrowOption">
        <div class="newsSlider__arrow prev" v-ripple>
          <v-icon size="40" color="#F6F6F6">mdi-chevron-left</v-icon>
        </div>
      </template>
      <template #nextArrow="arrowOption">
        <div class="newsSlider__arrow next" v-ripple>
          <v-icon size="40" color="#F6F6F6">mdi-chevron-right</v-icon>
        </div>
      </template>
      <template #customPaging="page">
        <div class="newsSlider__dot"></div>
      </template>
      <div v-for="(item, i) in newsSlider" :key="i">
        <div class="newsSlider__item" :style="`background-image: url(${item.img});`">
          <div class="newsSlider__item-content">
            <div class="newsSlider__item-badge">{{item.badge}}</div>
            <div class="newsSlider__item-title">{{item.title}}</div>
            <v-btn :to="item.link" class="newsSlider__item-btn" depressed>Перейти</v-btn>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <section class="branches">
      <div class="title">Наши филиалы</div>
      <VueSlickCarousel v-bind="settingsBranchesSlider" class="branchesSlider">
        <template #prevArrow="arrowOption">
          <div class="branchesSlider__arrow prev" v-ripple>
            <v-icon size="40" color="#36566A">mdi-chevron-left</v-icon>
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="branchesSlider__arrow next" v-ripple>
            <v-icon size="40" color="#36566A">mdi-chevron-right</v-icon>
          </div>
        </template>
        <template #customPaging="page">
          <div class="branchesSlider__dot"></div>
        </template>
        <div v-for="(item, i) in branches" :key="i">
          <div class="branchesSlider__item">
            <div class="branchesSlider__item-img">
              <img :src="item.img" :alt="item.title">
            </div>
            <div class="branchesSlider__item-title">{{item.title}}</div>
            <v-btn :to="item.link" class="branchesSlider__item-btn" depressed>Подробнее</v-btn>
          </div>
        </div>
      </VueSlickCarousel>
    </section>
    <section>
      <div class="title">ММЦ приглашает к сотрудничеству</div>
      <div class="cooperation">
        <div class="cooperation__content">
          <div class="cooperation__content-title">ММЦ приглашает к сотрудничеству молодежь, увлекающуюся журналистикой!</div>
          <div class="cooperation__content-text">
            <p>Что дает сотрудничество с ММЦ?</p>
            <span>Возможность самореализации и творческое развитие личности</span>
            <span>Возможность видеть, общаться, учиться у профессионалов – телеведущих, журналистов, режиссеров, сценаристов, писателей. На базе ММЦ проводятся лекции и мастер-классы</span>
            <span>Во время подготовки к поступлению на творческую специальность в ВУЗ, можно собрать портфолио</span>
            <span>Будут проводиться ярмарки-вакансий и стажировки как на муниципальных и региональных СМИ</span>
          </div>
          <v-btn depressed class="cooperation__btn">Подробнее</v-btn>
        </div>
        <div class="cooperation__img">
          <img src="@/static/cooperation-img.png" alt="ММЦ приглашает к сотрудничеству">
        </div>
      </div>
    </section>
    <section>
      <div class="title">Мы работаем со следующими организациями</div>
      <div class="workWith">
        <div class="workWith__item" style="background-image: url('/work1.jpg');">
          <div class="workWith__item-content">
            <div class="workWith__item-title">Волонтеры Домодедово</div>
            <v-btn to="/" depressed class="workWith__item-btn">Подробнее</v-btn>
          </div>
        </div>
        <div class="workWith__item" style="background-image: url('/work2.jpg');">
          <div class="workWith__item-content">
            <div class="workWith__item-title">Молодежные организации</div>
            <v-btn to="/" depressed class="workWith__item-btn">Подробнее</v-btn>
          </div>
        </div>
      </div>
    </section>
    <section class="events">
      <div class="title">Афиша мероприятий</div>
      <VueSlickCarousel v-bind="settingsEventsSlider" class="eventsSlider">
        <template #prevArrow="arrowOption">
          <div class="eventsSlider__arrow prev" v-ripple>
            <v-icon size="40" color="#36566A">mdi-chevron-left</v-icon>
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="eventsSlider__arrow next" v-ripple>
            <v-icon size="40" color="#36566A">mdi-chevron-right</v-icon>
          </div>
        </template>
        <template #customPaging="page">
          <div class="eventsSlider__dot"></div>
        </template>
        <div v-for="(item, i) in events" :key="i">
          <div class="eventsSlider__item">
            <div class="eventsSlider__item-header">
              <div class="eventsSlider__item-header--link">
                <div class="eventsSlider__item-header--circle">
                  <v-icon color="#fff" size="26">mdi-plus</v-icon>
                </div>
                <span>Смотреть</span>
              </div>
              <img :src="item.img" :alt="item.title">
            </div>
            <div class="eventsSlider__item-date">{{$moment(item.date).format('d MMM y')}}</div>
            <div class="eventsSlider__item-title">{{item.title}}</div>
          </div>
        </div>
      </VueSlickCarousel>
      <v-btn depressed class="events__more" to="/">Смотреть все</v-btn>
    </section>
    <section>
      <v-container>
        <v-row>
          <v-col sm="12" md="10" offset-md="1" class="py-0 px-0">
            <div class="news">
              <div class="news__top">
                <div class="title">Рубрика: Новости МКЦ «Победа»</div>
                <nuxt-link to="/" class="news__top-link">Читать все новости</nuxt-link>
              </div>
              <v-container class="px-0 py-0">
                <v-row no-gutters>
                  <v-col
                    v-for="(item, i) in news"
                    :key="i"
                    sm="12"
                    cols="12"
                    :md="i === 0 ? 12 : 6"
                  >
                    <div class="news__item" :class="{main: i === 0}">
                      <nuxt-link :to="item.link" class="news__item-img" v-ripple>
                        <div class="news__item-date">{{$moment(item.date).format('d MMM y')}}</div>
                        <img :src="item.img" :alt="item.title">
                      </nuxt-link>
                      <div class="news__item-info">
                        <nuxt-link :to="item.link" class="news__item-title">{{item.title}}</nuxt-link>
                        <div class="news__item-text">{{item.text}}</div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <v-btn depressed class="news__more" to="/">Читать все новости</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row>
          <v-col sm="12" md="10" offset-md="1" class="py-0 px-0">
            <div class="classes">
              <div class="title">Чем можно заниматься МКЦ «Победа»</div>
              <v-container class="px-0 py-0">
                <v-row no-gutters>
                  <v-col
                    v-for="(item, i) in classes"
                    :key="i"
                    sm="12"
                    md="4"
                  >
                    <div class="classes__item">
                      <div class="classes__item-img">
                        <img :src="item.img" :alt="item.title">
                      </div>
                      <div class="classes__item-title">{{item.title}}</div>
                      <nuxt-link
                        :to="link.link"
                        class="classes__item-link"
                        v-for="(link, index) in item.items"
                        :key="index"
                      >
                        <span>{{link.title}}</span>
                        <v-icon color="#68889C" size="18" class="ml-2">mdi-chevron-right</v-icon>
                      </nuxt-link>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: {
    VueSlickCarousel: () => import('vue-slick-carousel')
  },
  data: () => ({
    settingsNewsSlider: {
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            draggable: true,
            arrows: false
          }
        }
      ]
    },
    settingsBranchesSlider: {
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: false,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            draggable: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    },
    settingsEventsSlider: {
      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: false,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: "unslick"
        }
      ]
    },
    newsSlider: [
      {
        badge: 'Новости',
        img: 'http://localhost:3000/newsSlider.jpg',
        link: '/',
        title: 'Вы крутые! Сыграли в «FIFA20»'
      },
      {
        badge: 'Новости',
        img: 'http://localhost:3000/newsSlider.jpg',
        link: '/',
        title: 'Вы крутые! Сыграли в «FIFA20»'
      },
      {
        badge: 'Новости',
        img: 'http://localhost:3000/newsSlider.jpg',
        link: '/',
        title: 'Вы крутые! Сыграли в «FIFA20»'
      },
      {
        badge: 'Новости',
        img: 'http://localhost:3000/newsSlider.jpg',
        link: '/',
        title: 'Вы крутые! Сыграли в «FIFA20»'
      }
    ],
    branches: [
      {
        img: 'http://localhost:3000/branch1.png',
        link: '/',
        title: 'Филиал "Молодежный центр технического творчества "Интеграл"'
      },
      {
        img: 'http://localhost:3000/branch2.png',
        link: '/',
        title: 'Центр военно-патриотического воспитания'
      },
      {
        img: 'http://localhost:3000/branch3.png',
        link: '/',
        title: 'Филиал "Молодежное пространство "4К"'
      },
      {
        img: 'http://localhost:3000/branch1.png',
        link: '/',
        title: 'Филиал "Молодежный центр технического творчества "Интеграл"'
      },
      {
        img: 'http://localhost:3000/branch2.png',
        link: '/',
        title: 'Центр военно-патриотического воспитания'
      },
      {
        img: 'http://localhost:3000/branch3.png',
        link: '/',
        title: 'Филиал "Молодежное пространство "4К"'
      },
      {
        img: 'http://localhost:3000/branch1.png',
        link: '/',
        title: 'Филиал "Молодежный центр технического творчества "Интеграл"'
      },
      {
        img: 'http://localhost:3000/branch2.png',
        link: '/',
        title: 'Центр военно-патриотического воспитания'
      },
      {
        img: 'http://localhost:3000/branch3.png',
        link: '/',
        title: 'Филиал "Молодежное пространство "4К"'
      },
    ],
    events: [
      {
        img: 'http://localhost:3000/event1.jpg',
        link: '/',
        title: 'Ринг-рок',
        date: '2021-08-20 00:00:00'
      },
      {
        img: 'http://localhost:3000/event2.jpg',
        link: '/',
        title: 'ЖивуСпортом',
        date: '2021-08-21 00:00:00'
      },
      {
        img: 'http://localhost:3000/event3.jpg',
        link: '/',
        title: 'Свеча памяти',
        date: '2021-08-21 00:00:00'
      },
      {
        img: 'http://localhost:3000/event1.jpg',
        link: '/',
        title: 'Ринг-рок',
        date: '2021-08-20 00:00:00'
      },
      {
        img: 'http://localhost:3000/event2.jpg',
        link: '/',
        title: 'ЖивуСпортом',
        date: '2021-08-21 00:00:00'
      },
      {
        img: 'http://localhost:3000/event3.jpg',
        link: '/',
        title: 'Свеча памяти',
        date: '2021-08-21 00:00:00'
      },
      {
        img: 'http://localhost:3000/event1.jpg',
        link: '/',
        title: 'Ринг-рок',
        date: '2021-08-20 00:00:00'
      },
      {
        img: 'http://localhost:3000/event2.jpg',
        link: '/',
        title: 'ЖивуСпортом',
        date: '2021-08-21 00:00:00'
      },
      {
        img: 'http://localhost:3000/event3.jpg',
        link: '/',
        title: 'Свеча памяти',
        date: '2021-08-21 00:00:00'
      },
    ],
    news: [
      {
        img: 'http://localhost:3000/news1.jpg',
        link: '/',
        title: 'День донора',
        date: '2021-08-21 00:00:00',
        text: 'Сегодня в Молодежном центре «Победа» состоялся «День донора».Мероприятие уже превратилось в хорошую традицию, единственная задача которой — помощь.Спасибо всем, кто принял участие в этом важном событии, вы — настоящие герои!'
      },
      {
        img: 'http://localhost:3000/news2.jpg',
        link: '/',
        title: 'День донора',
        date: '2021-08-21 00:00:00',
        text: 'Нам очень повезло. У нас есть друзья - ВЫ!  Верные, честные, любимые!...'
      },
      {
        img: 'http://localhost:3000/news2.jpg',
        link: '/',
        title: 'Музыкальная точка',
        date: '2021-08-21 00:00:00',
        text: 'то весело и полно ностальгии ☺ Молодёжь округа, посетив это мероприятие, всегда...'
      },
    ],
    classes: [
      {
        img: 'http://localhost:3000/classes1.jpg',
        title: 'Хореография',
        items: [
          {
            title: 'Народная хореография',
            link: '/'
          },
          {
            title: 'Современная хореография',
            link: '/'
          },
        ]
      },
      {
        img: 'http://localhost:3000/classes2.jpg',
        title: 'Ударные инструменты',
        items: [
          {
            title: 'Ансамбль «ДрамТеатр»',
            link: '/'
          },
        ]
      },
      {
        img: 'http://localhost:3000/classes3.jpg',
        title: 'Вокал',
        items: [
          {
            title: 'Студия вокала «Виктория»',
            link: '/'
          },
        ]
      },
      {
        img: 'http://localhost:3000/classes4.jpg',
        title: 'Мастерская',
        items: [
          {
            title: 'Студия вокала «Виктория»',
            link: '/'
          },
        ]
      },
      {
        img: 'http://localhost:3000/classes4.jpg',
        title: 'Клуб молодых родителей',
        items: [
          {
            title: 'Клуб молодых родителей',
            link: '/'
          },
        ]
      },
    ]
  }),
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .newsSlider {

    .slick-slide {
      outline: 0 !important;
    }

    &__item {
      height: 450px;
      background-size: cover;
      background-position: center center;
      border-radius: 20px;
      padding: 40px 100px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;

      @media(max-width: 768px) {
        height: 180px;
        padding: 13px 16px;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 50%;
        background: linear-gradient(90deg, #304095 3.34%, rgba(48, 64, 149, 0) 100%);

        @media(max-width: 768px) {
          width: 70%;
        }
      }

      &-content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      &-badge {
        padding: 8px 10px;
        background: #304095;
        border-radius: 8px;
        font-size: 12px;
        color: #fff;
      }

      &-title {
        font-size: 40px;
        font-family: 'Proxima Nova Bl', sans-serif;
        max-width: 300px;
        line-height: 1.1;
        color: #fff;
        margin: 30px 0;

        @media(max-width: 768px) {
          font-size: 18px;
          margin: 10px 0;
          max-width: 60%;
        }
      }

      &-btn {
        height: 40px !important;
        padding: 10px 32px !important;
        border-radius: 4px;
        background: #fff !important;
        color: #000;
        text-transform: none;
        z-index: 3;
        font-family: 'Proxima Nova Sb', sans-serif;

        @media(max-width: 768px) {
          padding: 10px 17px !important;
        }
      }
    }

    &__arrow {
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;

      &:before {
        display: none;
      }

      &.prev {
        left: 20px;
      }

      &.next {
        right: 20px;
      }
    }

    &__dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.5);
      transition: .3s;

      @media(max-width: 768px) {
        background: #C2C6CC;
      }
    }
  }

  .title {
    font-size: 22px;
    font-family: "Proxima Nova Sb", sans-serif;
    color: #212C66;
    margin: 60px 0 30px;
    text-align: center;
  }

  .branches {
    display: flex;
    flex-direction: column;

    &Slider {
      margin-top: 30px;
      padding-bottom: 40px;

      &__item {
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #CCE0FF;
        width: 205px;
        height: 256px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(max-width: 768px) {
          width: auto;
        }

        &-img {
          width: 91px;
          height: 91px;
          margin-bottom: 17px;
          border-radius: 20px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        &-title {
          text-align: center;
          font-size: 12px;
          color: #212C66;
          font-family: "Proxima Nova Sb", sans-serif;
          margin-bottom: 17px;
        }

        &-btn {
          background: rgba(48, 64, 149, 0.8) !important;
          border-radius: 8px;
          color: #ffffff;
          height: 40px !important;
          padding: 10px 32px !important;
          text-transform: none;
          margin-top: auto;

          &:hover {
            color: #fff !important;
          }
        }
      }

      &__arrow {
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
          display: none;
        }

        &.prev {
          left: 20px;
        }

        &.next {
          right: 20px;
        }
      }

      &__dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #C2C6CC;
        transition: width .3s;
      }
    }
  }

  .cooperation {
    display: flex;
    justify-content: space-between;
    background-image: url('/cooperation-bg.jpg');
    background-size: cover;
    background-position: center bottom;
    height: 463px;
    border-radius: 20px;
    padding: 30px 103px 30px 70px;

    @media(max-width: 768px) {
      flex-direction: column-reverse;
      align-items: center;
      height: auto;
      background-image: url('/cooperation-bg-mobile.jpg');
      padding: 24px 20px;
    }

    &__content {
      position: relative;
      width: 425px;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(100px);
      border-radius: 20px;
      padding: 20px 25px;
      color: #fff;
      align-self: flex-start;

      @media(max-width: 768px) {
        width: 100%;
      }

      &-title {
        font-size: 22px;
        font-family: "Proxima Nova Sb", sans-serif;
        line-height: 1.2;
      }

      &-text {
        display: flex;
        flex-direction: column;
        font-size: 12px;

        p {
          margin-bottom: 20px;
        }

        span {

          &:not(:last-of-type) {
            margin-bottom: 20px;
          }
        }
      }
    }

    &__img {
      align-self: center;
      width: 355px;
      height: 355px;

      @media(max-width: 768px) {
        width: 150px;
        height: 150px;
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__btn {
      position: absolute;
      bottom: -50px;
      left: 20px;
      height: 40px !important;
      padding: 10px 23px !important;
      color: #212D45;
      background: #fff !important;
      text-transform: none;
      font-family: "Proxima Nova Sb", sans-serif;

      @media(max-width: 768px) {
        position: relative;
        bottom: 0;
        left: 0;
        margin-top: 20px;
      }
    }
  }

  .workWith {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 100px;

    @media(max-width: 768px) {
      flex-direction: column;
    }

    &__item {
      height: 161px;
      width: 379px;
      background-size: cover;
      background-position: center center;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-end;
      justify-content: center;
      border-radius: 16px;

      &:not(:last-of-type) {
        margin-right: 32px;
      }

      @media(max-width: 768px) {
        margin-right: 0 !important;
        margin-bottom: 10px;
        width: 100%;
      }

      &-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
      }

      &-title {
        font-size: 16px;
        color: #212C66;
        font-family: "Proxima Nova Bl", sans-serif;
        margin-bottom: 12px;
        line-height: 1.2;
        width: 140px;
        text-align: center;
      }

      &-btn {
        color: #36566A;
        padding: 10px 28px;
        height: 40px !important;
        background: #fff !important;
        text-transform: none;
      }
    }
  }

  .events {
    display: flex;
    flex-direction: column;

    &Slider {

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(max-width: 768px) {
          margin-bottom: 20px;
        }

        &-header {
          width: 244px;
          height: 237px;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          cursor: pointer;

          &:hover {
            .eventsSlider__item-header--link {
              opacity: 1;
            }
          }

          img {
            width: 100%;
            height: 100%;
          }

          &--link {
            transition: .3s;
            opacity: 0;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(180deg, rgba(48, 64, 149, 0.5) 0%, rgba(48, 64, 149, 0.5) 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            span {
              color: #fff;
              font-size: 12px;
              margin-top: 10px;
            }
          }

          &--circle {
            width: 54px;
            height: 54px;
            border-radius: 50%;
            background: #304095;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        &-date {
          font-size: 16px;
          color: #212C66;
          font-family: "Proxima Nova Bl", sans-serif;
          margin: 10px 0 6px;
        }

        &-title {
          color: #68889C;
          font-size: 16px;
        }
      }

      &__arrow {
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:before {
          display: none;
        }

        &.prev {
          left: 20px;
        }

        &.next {
          right: 20px;
        }
      }

      &__dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #C2C6CC;
        transition: width .3s;
      }
    }

    &__more {
      color: #304095 !important;
      background: transparent !important;
      border: 1px solid #304095;
      margin-top: 40px;
      align-self: center;
      text-transform: none;
      font-family: "Proxima Nova Sb", sans-serif;

      @media(max-width: 768px) {
        margin-top: 0;
      }
    }
  }

  .news {
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    &__top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 44px;

      @media(max-width: 768px) {
        justify-content: center;
      }

      .title {
        margin: 0;

        @media(max-width: 768px) {
          text-align: center;
        }
      }

      &-link {
        align-self: flex-end;
        color: #304095;
        font-family: "Proxima Nova Bl", sans-serif;
        text-decoration: underline;

        @media(max-width: 768px) {
          display: none;
        }
      }
    }

    &__more {
      color: #304095 !important;
      background: transparent !important;
      border: 1px solid #304095;
      margin-top: 20px;
      align-self: center;
      text-transform: none;
      font-family: "Proxima Nova Sb", sans-serif;

      @media(min-width: 769px) {
        display: none;
      }
    }

    &__item {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      &.main {
        flex-direction: row;
        align-items: center;

        @media(max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
        }

        .news__item-img {
          height: 280px;
          margin-right: 33px;
          margin-bottom: 0;

          @media(max-width: 768px) {
            height: 180px;
            margin-right: 0;
            margin-bottom: 20px;
          }
        }
      }

      &-img {
        position: relative;
        width: 379px;
        height: 200px;
        flex-shrink: 0;
        margin-bottom: 20px;

        @media(max-width: 768px) {
          width: 100%;
          height: 180px;
        }

        img {
          width: 100%;
          height: 100%;
        }
      }

      &-date {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 8px 10px;
        background: #222837;
        border-radius: 8px;
        font-size: 12px;
        color: #ffffff;
      }

      &-title {
        font-size: 16px;
        color: #212C66;
        font-family: "Proxima Nova Bl", sans-serif;
        margin-bottom: 8px;
        display: flex;
      }

      &-text {
        color: #68889C;
        font-size: 16px;
        line-height: 1.6;

        @media(max-width: 768px) {
          font-size: 12px;
        }
      }
    }
  }

  .classes {

    .title {
      text-align: left;

      @media(max-width: 768px) {
        text-align: center;
      }
    }

    &__item {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;

      @media(max-width: 768px) {
          align-items: center;
      }

      &-title {
        color: #212C66;
        font-size: 16px;
        font-family: "Proxima Nova Bl", sans-serif;
      }

      &-link {
        color: #68889C;
        margin-top: 8px;
        display: flex;
        align-items: center;

        span {
          font-size: 16px;
          text-decoration: underline;
        }
      }
    }
  }
</style>
