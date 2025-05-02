<template>
  <section
    class="h-[70vh] lg:h-[60vh] relative"
  >
    <div class="relative h-full overflow-hidden">
      <slot name="text"></slot>
      <div
        class="absolute inset-0 -translate-y-0 z-5 bg-gradient-to-b from-black/50 to-black/30 h-full"
      ></div>
    </div>
  </section>
</template>
