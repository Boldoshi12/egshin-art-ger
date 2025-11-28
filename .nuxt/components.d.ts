
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


export const FadeInSection: typeof import("../components/FadeInSection.vue")['default']
export const ContactHeroSection: typeof import("../components/contact/ContactHeroSection.vue")['default']
export const ContactInfoSection: typeof import("../components/contact/ContactInfoSection.vue")['default']
export const ExhibitionsHeader: typeof import("../components/exhibitions/ExhibitionsHeader.vue")['default']
export const ExhibitionsList: typeof import("../components/exhibitions/ExhibitionsList.vue")['default']
export const HomeHeroSection: typeof import("../components/home/HeroSection.vue")['default']
export const HomeIntroSection: typeof import("../components/home/IntroSection.vue")['default']
export const HomeInvitationSection: typeof import("../components/home/InvitationSection.vue")['default']
export const HomePhilosophySection: typeof import("../components/home/PhilosophySection.vue")['default']
export const ProgramsGrid: typeof import("../components/programs/ProgramsGrid.vue")['default']
export const ProgramsHeader: typeof import("../components/programs/ProgramsHeader.vue")['default']
export const ProjectsContent: typeof import("../components/projects/ProjectsContent.vue")['default']
export const ProjectsHeader: typeof import("../components/projects/ProjectsHeader.vue")['default']
export const ShopContent: typeof import("../components/shop/ShopContent.vue")['default']
export const ShopHeader: typeof import("../components/shop/ShopHeader.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyFadeInSection: LazyComponent<typeof import("../components/FadeInSection.vue")['default']>
export const LazyContactHeroSection: LazyComponent<typeof import("../components/contact/ContactHeroSection.vue")['default']>
export const LazyContactInfoSection: LazyComponent<typeof import("../components/contact/ContactInfoSection.vue")['default']>
export const LazyExhibitionsHeader: LazyComponent<typeof import("../components/exhibitions/ExhibitionsHeader.vue")['default']>
export const LazyExhibitionsList: LazyComponent<typeof import("../components/exhibitions/ExhibitionsList.vue")['default']>
export const LazyHomeHeroSection: LazyComponent<typeof import("../components/home/HeroSection.vue")['default']>
export const LazyHomeIntroSection: LazyComponent<typeof import("../components/home/IntroSection.vue")['default']>
export const LazyHomeInvitationSection: LazyComponent<typeof import("../components/home/InvitationSection.vue")['default']>
export const LazyHomePhilosophySection: LazyComponent<typeof import("../components/home/PhilosophySection.vue")['default']>
export const LazyProgramsGrid: LazyComponent<typeof import("../components/programs/ProgramsGrid.vue")['default']>
export const LazyProgramsHeader: LazyComponent<typeof import("../components/programs/ProgramsHeader.vue")['default']>
export const LazyProjectsContent: LazyComponent<typeof import("../components/projects/ProjectsContent.vue")['default']>
export const LazyProjectsHeader: LazyComponent<typeof import("../components/projects/ProjectsHeader.vue")['default']>
export const LazyShopContent: LazyComponent<typeof import("../components/shop/ShopContent.vue")['default']>
export const LazyShopHeader: LazyComponent<typeof import("../components/shop/ShopHeader.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
