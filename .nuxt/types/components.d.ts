
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'FadeInSection': typeof import("../../components/FadeInSection.vue")['default']
  'ContactHeroSection': typeof import("../../components/contact/ContactHeroSection.vue")['default']
  'ContactInfoSection': typeof import("../../components/contact/ContactInfoSection.vue")['default']
  'ExhibitionsHeader': typeof import("../../components/exhibitions/ExhibitionsHeader.vue")['default']
  'ExhibitionsList': typeof import("../../components/exhibitions/ExhibitionsList.vue")['default']
  'HomeHeroSection': typeof import("../../components/home/HeroSection.vue")['default']
  'HomeIntroSection': typeof import("../../components/home/IntroSection.vue")['default']
  'HomeInvitationSection': typeof import("../../components/home/InvitationSection.vue")['default']
  'HomePhilosophySection': typeof import("../../components/home/PhilosophySection.vue")['default']
  'ProgramsGrid': typeof import("../../components/programs/ProgramsGrid.vue")['default']
  'ProgramsHeader': typeof import("../../components/programs/ProgramsHeader.vue")['default']
  'ProjectsContent': typeof import("../../components/projects/ProjectsContent.vue")['default']
  'ProjectsHeader': typeof import("../../components/projects/ProjectsHeader.vue")['default']
  'ShopContent': typeof import("../../components/shop/ShopContent.vue")['default']
  'ShopHeader': typeof import("../../components/shop/ShopHeader.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  'NuxtPicture': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyFadeInSection': LazyComponent<typeof import("../../components/FadeInSection.vue")['default']>
  'LazyContactHeroSection': LazyComponent<typeof import("../../components/contact/ContactHeroSection.vue")['default']>
  'LazyContactInfoSection': LazyComponent<typeof import("../../components/contact/ContactInfoSection.vue")['default']>
  'LazyExhibitionsHeader': LazyComponent<typeof import("../../components/exhibitions/ExhibitionsHeader.vue")['default']>
  'LazyExhibitionsList': LazyComponent<typeof import("../../components/exhibitions/ExhibitionsList.vue")['default']>
  'LazyHomeHeroSection': LazyComponent<typeof import("../../components/home/HeroSection.vue")['default']>
  'LazyHomeIntroSection': LazyComponent<typeof import("../../components/home/IntroSection.vue")['default']>
  'LazyHomeInvitationSection': LazyComponent<typeof import("../../components/home/InvitationSection.vue")['default']>
  'LazyHomePhilosophySection': LazyComponent<typeof import("../../components/home/PhilosophySection.vue")['default']>
  'LazyProgramsGrid': LazyComponent<typeof import("../../components/programs/ProgramsGrid.vue")['default']>
  'LazyProgramsHeader': LazyComponent<typeof import("../../components/programs/ProgramsHeader.vue")['default']>
  'LazyProjectsContent': LazyComponent<typeof import("../../components/projects/ProjectsContent.vue")['default']>
  'LazyProjectsHeader': LazyComponent<typeof import("../../components/projects/ProjectsHeader.vue")['default']>
  'LazyShopContent': LazyComponent<typeof import("../../components/shop/ShopContent.vue")['default']>
  'LazyShopHeader': LazyComponent<typeof import("../../components/shop/ShopHeader.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
