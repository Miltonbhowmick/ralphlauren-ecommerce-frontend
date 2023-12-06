// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig:{
    public:{
      HOST:
        process.env.VUE_APP_STATIC_HOST ||
				process.env.VUE_APP_DEVBROWSERHOST ||
				process.env.VUE_APP_DEVHOST ||
				"http://localhost:8000",
      baseURL:
        process.env.VUE_APP_STATIC_HOST ||
        process.env.VUE_APP_DEVBROWSERHOST ||
        process.env.VUE_APP_DEVHOST ||
        "http://localhost:8000",
    }
  },
  app:{
    head:{
      title: "Home",
      titleTemplate: "Ralphlauren | %s",
      htmlAttrs:{
        lang: "en",
      },
      meta:[
        { charset: "utf-8" },
				{
					hid: "viewport",
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{ hid: "description", property: "description", content: "" },
				{ property: "format-detection", content: "telephone=no" },
				{
					hid: "og:type",
					property: "og:type",
					content: "",
				},
				{
					hid: "og:title",
					property: "og:title",
					content: "",
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "",
				},
				{
					hid: "og:url",
					property: "og:url",
					content: "",
				},
				{
					hid: "og:site_name",
					property: "og:site_name",
					content: "",
				},
				{
					hid: "Keywords",
					property: "Keywords",
					content: "",
				},
				{
					hid: "Description",
					property: "Description",
					content: "",
				},
      ]
    }
  },
	plugins:[
		'~/plugins/nuxtcarousel.js',
	],
	vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_config.scss" as *;'
        }
      }
    }
  },
  modules:[
    '@pinia/nuxt',
  ],
	css:[
		'~/assets/css/main.scss',
	]
})
