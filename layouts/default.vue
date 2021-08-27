<template>
  <v-app>
    <Header />
    <v-main>
      <v-container>
        <v-row>
          <v-col offset-md="1" sm="12" md="10">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data: () => ({

  })
}
</script>
